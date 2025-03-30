import { eventBus } from '@/eventbus'
import { MCPServerConfig } from '@shared/presenter'
import { MCP_EVENTS } from '@/events'
import ElectronStore from 'electron-store'
import { app } from 'electron'
import { compare } from 'compare-versions'

// MCP设置的接口
interface IMcpSettings {
  mcpServers: Record<string, MCPServerConfig>
  defaultServer?: string // 保留旧字段以支持版本兼容
  defaultServers: string[] // 新增：多个默认服务器数组
  mcpEnabled: boolean // 添加MCP启用状态字段
  [key: string]: unknown // 允许任意键
}
export type MCPServerType = 'stdio' | 'sse' | 'inmemory'
// const filesystemPath = path.join(app.getAppPath(), 'resources', 'mcp', 'filesystem.mjs')
const DEFAULT_MCP_SERVERS = {
  mcpServers: {
    // 先定义内置MCP服务器
    buildInFileSystem: {
      args: [app.getPath('home')],
      descriptions: 'DeepChat内置文件系统mcp服务',
      icons: '📁',
      autoApprove: ['read'],
      type: 'inmemory' as MCPServerType,
      command: 'filesystem',
      env: {},
      disable: false
    },
    // 还有问题，暂时不开放
    // buildInArtifacts: {
    //   args: [],
    //   descriptions: 'DeepChat内置artifacts mcp服务',
    //   icons: '🎨',
    //   autoApprove: ['all'],
    //   type: 'inmemory' as MCPServerType,
    //   command: 'artifacts',
    //   env: {},
    //   disable: false
    // },
    // 之后是默认的三方MCP服务器
    memory: {
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-memory'],
      env: {},
      descriptions: '内存存储服务',
      icons: '🧠',
      autoApprove: ['all'],
      disable: true,
      type: 'stdio' as MCPServerType
    },
    bitcoin: {
      command: 'npx',
      args: ['-y', 'bitcoin-mcp@latest'],
      env: {},
      descriptions: '查询比特币',
      icons: '💰',
      autoApprove: ['all'],
      type: 'stdio' as MCPServerType
    },
    airbnb: {
      descriptions: 'Airbnb',
      icons: '🏠',
      autoApprove: ['all'],
      type: 'stdio' as MCPServerType,
      command: 'npx',
      args: ['-y', '@openbnb/mcp-server-airbnb', '--ignore-robots-txt'],
      env: {}
    }
  },
  defaultServers: ['buildInFileSystem'], // 默认服务器列表
  mcpEnabled: false // 默认关闭MCP功能
}

export class McpConfHelper {
  private mcpStore: ElectronStore<IMcpSettings>

  constructor() {
    // 初始化MCP设置存储
    this.mcpStore = new ElectronStore<IMcpSettings>({
      name: 'mcp-settings',
      defaults: {
        mcpServers: DEFAULT_MCP_SERVERS.mcpServers,
        defaultServers: DEFAULT_MCP_SERVERS.defaultServers,
        mcpEnabled: DEFAULT_MCP_SERVERS.mcpEnabled
      }
    })
  }

  // 获取MCP服务器配置
  getMcpServers(): Promise<Record<string, MCPServerConfig>> {
    return Promise.resolve(this.mcpStore.get('mcpServers') || DEFAULT_MCP_SERVERS.mcpServers)
  }

  // 设置MCP服务器配置
  async setMcpServers(servers: Record<string, MCPServerConfig>): Promise<void> {
    this.mcpStore.set('mcpServers', servers)
    eventBus.emit(MCP_EVENTS.CONFIG_CHANGED, {
      mcpServers: servers,
      defaultServers: this.mcpStore.get('defaultServers') || [],
      mcpEnabled: this.mcpStore.get('mcpEnabled')
    })
  }

  // 获取默认服务器列表
  getMcpDefaultServers(): Promise<string[]> {
    return Promise.resolve(this.mcpStore.get('defaultServers') || [])
  }

  // 添加默认服务器
  async addMcpDefaultServer(serverName: string): Promise<void> {
    const defaultServers = this.mcpStore.get('defaultServers') || []
    if (!defaultServers.includes(serverName)) {
      defaultServers.push(serverName)
      this.mcpStore.set('defaultServers', defaultServers)
      eventBus.emit(MCP_EVENTS.CONFIG_CHANGED, {
        mcpServers: this.mcpStore.get('mcpServers'),
        defaultServers,
        mcpEnabled: this.mcpStore.get('mcpEnabled')
      })
    }
  }

  // 移除默认服务器
  async removeMcpDefaultServer(serverName: string): Promise<void> {
    const defaultServers = this.mcpStore.get('defaultServers') || []
    const updatedServers = defaultServers.filter((name) => name !== serverName)
    this.mcpStore.set('defaultServers', updatedServers)
    eventBus.emit(MCP_EVENTS.CONFIG_CHANGED, {
      mcpServers: this.mcpStore.get('mcpServers'),
      defaultServers: updatedServers,
      mcpEnabled: this.mcpStore.get('mcpEnabled')
    })
  }

  // 切换服务器的默认状态
  async toggleMcpDefaultServer(serverName: string): Promise<void> {
    const defaultServers = this.mcpStore.get('defaultServers') || []
    if (defaultServers.includes(serverName)) {
      await this.removeMcpDefaultServer(serverName)
    } else {
      await this.addMcpDefaultServer(serverName)
    }
  }

  // 设置MCP启用状态
  async setMcpEnabled(enabled: boolean): Promise<void> {
    this.mcpStore.set('mcpEnabled', enabled)
    eventBus.emit(MCP_EVENTS.CONFIG_CHANGED, {
      mcpServers: this.mcpStore.get('mcpServers'),
      defaultServers: this.mcpStore.get('defaultServers'),
      mcpEnabled: enabled
    })
  }

  // 获取MCP启用状态
  getMcpEnabled(): Promise<boolean> {
    return Promise.resolve(this.mcpStore.get('mcpEnabled') ?? DEFAULT_MCP_SERVERS.mcpEnabled)
  }

  // 添加MCP服务器
  async addMcpServer(name: string, config: MCPServerConfig): Promise<void> {
    const mcpServers = await this.getMcpServers()
    mcpServers[name] = config
    await this.setMcpServers(mcpServers)
  }

  // 移除MCP服务器
  async removeMcpServer(name: string): Promise<void> {
    const mcpServers = await this.getMcpServers()
    delete mcpServers[name]
    await this.setMcpServers(mcpServers)

    // 如果删除的服务器在默认服务器列表中，则从列表中移除
    const defaultServers = await this.getMcpDefaultServers()
    if (defaultServers.includes(name)) {
      await this.removeMcpDefaultServer(name)
    }
  }

  // 更新MCP服务器配置
  async updateMcpServer(name: string, config: Partial<MCPServerConfig>): Promise<void> {
    const mcpServers = await this.getMcpServers()
    if (!mcpServers[name]) {
      throw new Error(`MCP server ${name} not found`)
    }
    mcpServers[name] = {
      ...mcpServers[name],
      ...config
    }
    await this.setMcpServers(mcpServers)
  }

  // 恢复默认服务器配置
  async resetToDefaultServers(): Promise<void> {
    const currentServers = await this.getMcpServers()
    const updatedServers = { ...currentServers }

    // 删除所有类型为inmemory的服务
    for (const [serverName, serverConfig] of Object.entries(updatedServers)) {
      if (serverConfig.type === 'inmemory') {
        delete updatedServers[serverName]
      }
    }

    // 遍历所有默认服务，有则覆盖，无则新增
    for (const [serverName, serverConfig] of Object.entries(DEFAULT_MCP_SERVERS.mcpServers)) {
      updatedServers[serverName] = serverConfig
    }

    // 更新服务器配置
    await this.setMcpServers(updatedServers)

    // 恢复默认服务器设置
    this.mcpStore.set('defaultServers', DEFAULT_MCP_SERVERS.defaultServers)
    eventBus.emit(MCP_EVENTS.CONFIG_CHANGED, {
      mcpServers: updatedServers,
      defaultServers: DEFAULT_MCP_SERVERS.defaultServers,
      mcpEnabled: this.mcpStore.get('mcpEnabled')
    })
  }

  public onUpgrade(oldVersion: string | undefined): void {
    console.log('onUpgrade', oldVersion)
    if (oldVersion && compare(oldVersion, '0.0.12', '<=')) {
      // 将旧版本的defaultServer迁移到新版本的defaultServers
      const oldDefaultServer = this.mcpStore.get('defaultServer') as string | undefined
      if (oldDefaultServer) {
        console.log(`迁移旧版本defaultServer: ${oldDefaultServer}到defaultServers`)
        const defaultServers = this.mcpStore.get('defaultServers') || []
        if (!defaultServers.includes(oldDefaultServer)) {
          defaultServers.push(oldDefaultServer)
          this.mcpStore.set('defaultServers', defaultServers)
        }
        // 删除旧的defaultServer字段，防止重复迁移
        this.mcpStore.delete('defaultServer')
      }

      // 迁移 filesystem 服务器到 buildInFileSystem
      try {
        const mcpServers = this.mcpStore.get('mcpServers') || {}
        console.log('mcpServers', mcpServers)
        if (mcpServers.filesystem) {
          console.log('检测到旧版本的 filesystem MCP 服务器，开始迁移到 buildInFileSystem')

          // 检查 buildInFileSystem 是否已存在
          if (!mcpServers.buildInFileSystem) {
            // 创建 buildInFileSystem 配置
            mcpServers.buildInFileSystem = {
              args: [app.getPath('home')], // 默认值
              descriptions: '内置文件系统mcp服务',
              icons: '💾',
              autoApprove: ['read'],
              type: 'inmemory' as MCPServerType,
              command: 'filesystem',
              env: {},
              disable: false
            }
          }

          // 如果 filesystem 的 args 长度大于 2，将第三个参数及以后的参数迁移
          if (mcpServers.filesystem.args && mcpServers.filesystem.args.length > 2) {
            mcpServers.buildInFileSystem.args = mcpServers.filesystem.args.slice(2)
          }

          // 迁移 autoApprove 设置
          if (mcpServers.filesystem.autoApprove) {
            mcpServers.buildInFileSystem.autoApprove = [...mcpServers.filesystem.autoApprove]
          }

          delete mcpServers.filesystem
          // 更新 mcpServers
          this.mcpStore.set('mcpServers', mcpServers)

          // 如果 filesystem 是默认服务器，将 buildInFileSystem 添加到默认服务器列表
          const defaultServers = this.mcpStore.get('defaultServers') || []
          if (
            defaultServers.includes('filesystem') &&
            !defaultServers.includes('buildInFileSystem')
          ) {
            defaultServers.push('buildInFileSystem')
            this.mcpStore.set('defaultServers', defaultServers)
          }

          console.log('迁移 filesystem 到 buildInFileSystem 完成')
        }
      } catch (error) {
        console.error('迁移 filesystem 服务器时出错:', error)
      }
    }
  }
}
