export default {
  title: 'Настройки',
  common: {
    title: 'Общие настройки',
    resetData: 'Сбросить данные',
    language: 'Язык',
    languageSelect: 'Выбрать язык',
    searchEngine: 'Поисковая система',
    searchEngineSelect: 'Выбрать поисковую систему',
    searchPreview: 'Предпросмотр поиска',
    searchAssistantModel: 'Модель ассистента поиска',
    selectModel: 'Выбрать модель',
    proxyMode: 'Режим прокси',
    proxyModeSelect: 'Выбрать режим прокси',
    proxyModeSystem: 'Системный прокси',
    proxyModeNone: 'Без прокси',
    proxyModeCustom: 'Пользовательский прокси',
    customProxyUrl: 'Пользовательский URL прокси',
    customProxyUrlPlaceholder: 'Например: http://127.0.0.1:7890',
    invalidProxyUrl: 'Недействительный URL прокси, введите действительный http/https URL',
    addCustomSearchEngine: 'Добавить пользовательскую поисковую систему',
    addCustomSearchEngineDesc:
      'Добавьте новую поисковую систему, указав имя и URL поиска. URL должен включать {query} в качестве заполнителя.',
    searchEngineName: 'Название поисковой системы',
    searchEngineNamePlaceholder: 'Введите название поисковой системы',
    searchEngineUrl: 'URL поиска',
    searchEngineUrlPlaceholder: 'Например: https://example.com/search?q={query}',
    searchEngineUrlError: "URL должен содержать {'{'}query{'}'} в качестве заполнителя запроса",
    deleteCustomSearchEngine: 'Удалить пользовательскую поисковую систему',
    deleteCustomSearchEngineDesc:
      'Вы уверены, что хотите удалить пользовательскую поисковую систему "{name}"? Это действие нельзя отменить.',
    contentProtection: 'Защита экрана',
    contentProtectionDialogTitle: 'Подтвердите изменение защиты экрана',
    contentProtectionEnableDesc:
      'Включение защиты экрана предотвращает захват окна DeepChat программами для совместного использования экрана, защищая конфиденциальность вашего контента. Обратите внимание, что эта функция не полностью скрывает все интерфейсы. Пожалуйста, используйте эту функцию ответственно и в соответствии с правилами. Кроме того, не все программы для совместного использования экрана соблюдают настройки конфиденциальности пользователей, и эта функция может не работать на некоторых программах. Кроме того, в некоторых окружениях может остаться черный экран.',
    contentProtectionDisableDesc:
      'Отключение защиты экрана позволит программам для совместного использования экрана захватывать окно DeepChat.',
    contentProtectionRestartNotice:
      'Изменение этой настройки приведет к перезапуску приложения. Вы хотите продолжить?',
    testSearchEngine: 'Тестировать поисковую систему',
    testSearchEngineDesc:
      'Будет выполнен тестовый поиск по запросу "погода" с использованием поисковой системы {engine}.',
    testSearchEngineNote:
      'Если поисковая страница требует входа или других действий, вы можете выполнить их в тестовом окне. Пожалуйста, закройте тестовое окно, когда закончите.',
    theme: 'Тема',
    loggingEnabled: 'Включить логирование',
    loggingDialogTitle: 'Подтверждение изменения настроек логирования',
    loggingEnableDesc:
      'Включение логирования поможет нам диагностировать проблемы и улучшить приложение. Файлы логов могут содержать конфиденциальную информацию.',
    loggingDisableDesc: 'Отключение логирования остановит сбор логов приложения.',
    loggingRestartNotice:
      'Изменение этой настройки приведет к перезапуску приложения. Вы хотите продолжить?',
    openLogFolder: 'Открыть папку логов'
  },
  data: {
    title: 'Настройки данных',
    syncEnable: 'Включить синхронизацию данных',
    syncFolder: 'Папка синхронизации',
    openSyncFolder: 'Открыть папку синхронизации',
    lastSyncTime: 'Время последней синхронизации',
    never: 'Никогда',
    startBackup: 'Начать резервное копирование',
    backingUp: 'Резервное копирование...',
    importData: 'Импорт данных',
    incrementImport: 'Инкрементальный импорт',
    overwriteImport: 'Импорт с перезаписью',
    importConfirmTitle: 'Подтверждение импорта данных',
    importConfirmDescription:
      'Импорт перезапишет все текущие данные, включая историю чатов и настройки. Убедитесь, что вы сделали резервную копию важных данных. После импорта потребуется перезапуск приложения.',
    importing: 'Импорт...',
    confirmImport: 'Подтвердить импорт',
    importSuccessTitle: 'Импорт успешно завершен',
    importErrorTitle: 'Ошибка импорта'
  },
  model: {
    title: 'Настройки модели',
    systemPrompt: {
      label: 'Системный запрос',
      placeholder: 'Введите системный запрос...',
      description: 'Настройте системный запрос AI помощника для определения его поведения и роли'
    },
    temperature: {
      label: 'Температура модели',
      description:
        'Контролирует случайность вывода, более высокие значения создают более креативные ответы'
    },
    contextLength: {
      label: 'Длина контекста',
      description: 'Установите максимальную длину контекста разговора'
    },
    responseLength: {
      label: 'Длина ответа',
      description: 'Установите максимальную длину ответа AI'
    },
    artifacts: {
      description: 'Включение функции артефактов позволяет AI генерировать более богатый контент'
    }
  },
  provider: {
    enable: 'Включить сервис',
    urlPlaceholder: 'Введите API URL',
    keyPlaceholder: 'Введите API Key',
    verifyKey: 'Проверить ключ',
    howToGet: 'Как получить',
    getKeyTip: 'Перейдите по следующему адресу',
    getKeyTipEnd: 'Получите API Key',
    modelList: 'Список моделей',
    enableModels: 'Включить модели',
    disableAllModels: 'Отключить все модели',
    modelsEnabled: 'Модели включены',
    verifyLink: 'Проверить ссылку',
    syncModelsFailed: 'Не удалось синхронизировать модели...',
    addCustomProvider: 'Добавить пользовательский провайдер',
    delete: 'Удалить',
    stopModel: 'Остановить модель',
    pulling: 'Скачивание...',
    runModel: 'Запустить модель',
    dialog: {
      disableModel: {
        title: 'Подтвердите отключение модели',
        content: 'Вы уверены, что хотите отключить модель "{name}"?',
        confirm: 'Отключить'
      },
      configModels: {
        title: 'Настройка списка моделей'
      },
      disableAllModels: {
        title: 'Подтвердите отключение всех моделей',
        content: 'Вы уверены, что хотите отключить все модели для "{name}"?',
        confirm: 'Отключить все'
      },
      verify: {
        missingFields: 'Пожалуйста, введите API Key и API URL',
        failed: 'Проверка не удалась',
        success: 'Проверка успешна'
      },
      addCustomProvider: {
        title: 'Добавить пользовательский провайдер',
        description: 'Пожалуйста, заполните необходимую информацию для провайдера',
        name: 'Имя',
        namePlaceholder: 'Введите имя провайдера',
        apiType: 'Тип API',
        apiTypePlaceholder: 'Выберите тип API',
        apiKey: 'API Key',
        apiKeyPlaceholder: 'Введите API Key',
        baseUrl: 'API URL',
        baseUrlPlaceholder: 'Введите API URL',
        enable: 'Включить провайдер'
      },
      deleteProvider: {
        title: 'Подтверждение удаления провайдера',
        content:
          'Вы уверены, что хотите удалить провайдера "{name}"? Это действие нельзя отменить.',
        confirm: 'Удалить'
      },
      deleteModel: {
        title: 'Подтверждение удаления модели',
        content: 'Вы уверены, что хотите удалить модель "{name}"? Это действие нельзя отменить.',
        confirm: 'Удалить'
      },
      pullModel: {
        title: 'Скачивание модели',
        pull: 'Скачать'
      }
    },
    pullModels: 'Скачать модели',
    refreshModels: 'Обновить модели',
    modelsRunning: 'Модели запущены',
    runningModels: 'Запущенные модели',
    noRunningModels: 'Нет запущенных моделей',
    deleteModel: 'Удалить модель',
    deleteModelConfirm:
      'Вы уверены, что хотите удалить модель "{name}"? Это действие нельзя отменить.',
    noLocalModels: 'Нет локальных моделей',
    localModels: 'Локальные модели'
  },
  mcp: {
    title: 'Настройки MCP',
    description: 'Управление и настройка серверов и инструментов MCP (Model Control Protocol)',
    enabledTitle: 'Включить MCP',
    enabledDescription: 'Включение или отключение функций и инструментов MCP',
    enableToAccess: 'Пожалуйста, включите MCP для доступа к настройкам',
    tabs: {
      servers: 'Серверы',
      tools: 'Инструменты'
    },
    serverList: 'Список серверов',
    addServer: 'Добавить сервер',
    running: 'Запущен',
    stopped: 'Остановлен',
    stopServer: 'Остановить сервер',
    startServer: 'Запустить сервер',
    noServersFound: 'Серверы не найдены',
    addServerDialog: {
      title: 'Добавить сервер',
      description: 'Настройка нового сервера MCP'
    },
    editServerDialog: {
      title: 'Редактировать сервер',
      description: 'Редактирование конфигурации сервера MCP'
    },
    serverForm: {
      name: 'Имя сервера',
      namePlaceholder: 'Введите имя сервера',
      nameRequired: 'Имя сервера обязательно',
      type: 'Тип сервера',
      typePlaceholder: 'Выберите тип сервера',
      typeStdio: 'Стандартный ввод-вывод',
      typeSse: 'Server-Sent Events',
      typeInMemory: 'In-Memory',
      baseUrl: 'Базовый URL',
      baseUrlPlaceholder: 'Введите базовый URL сервера (например, http://localhost:3000)',
      command: 'Команда',
      commandPlaceholder: 'Введите команду',
      commandRequired: 'Команда не может быть пустой',
      args: 'Параметры',
      argsPlaceholder: 'Введите параметры, разделенные пробелами',
      argsRequired: 'Параметры не могут быть пустыми',
      env: 'Переменные окружения',
      envPlaceholder: 'Введите переменные окружения в формате JSON',
      envInvalid: 'Переменные окружения должны быть в формате JSON',
      description: 'Описание',
      descriptionPlaceholder: 'Введите описание сервера',
      descriptions: 'Описание',
      descriptionsPlaceholder: 'Введите описание сервера',
      icon: 'Иконка',
      iconPlaceholder: 'Введите иконку',
      icons: 'Иконки',
      iconsPlaceholder: 'Введите иконки',
      autoApprove: 'Автоматический допуск',
      autoApproveAll: 'Все',
      autoApproveRead: 'Чтение',
      autoApproveWrite: 'Запись',
      autoApproveHelp:
        'Выберите тип операции, которая будет автоматически разрешена без подтверждения пользователя',
      submit: 'Отправить',
      add: 'Добавить',
      update: 'Обновить',
      cancel: 'Отменить',
      jsonConfigIntro:
        'Вы можете вставить JSON-конфигурацию напрямую или выбрать ручную настройку сервера.',
      jsonConfig: 'JSON-конфигурация',
      jsonConfigPlaceholder: 'Вставьте конфигурацию MCP-сервера в формате JSON',
      jsonConfigExample: 'Пример JSON-конфигурации',
      parseSuccess: 'Конфигурация успешно обработана',
      configImported: 'Конфигурация успешно импортирована',
      parseError: 'Ошибка обработки',
      skipToManual: 'Перейти к ручной настройке',
      parseAndContinue: 'Обработать и продолжить'
    },
    deleteServer: 'Удалить сервер',
    editServer: 'Редактировать сервер',
    setDefault: 'Установить по умолчанию',
    isDefault: 'Сервер по умолчанию',
    default: 'По умолчанию',
    setAsDefault: 'Установить по умолчанию',
    removeServer: 'Удалить сервер',
    confirmRemoveServer:
      'Вы уверены, что хотите удалить сервер {name}? Это действие нельзя отменить.',
    removeServerDialog: {
      title: 'Удалить сервер'
    },
    confirmDelete: {
      title: 'Подтвердите удаление',
      description: 'Вы уверены, что хотите удалить сервер {name}? Это действие нельзя отменить.',
      confirm: 'Удалить',
      cancel: 'Отмена'
    },
    resetToDefault: 'Восстановить по умолчанию',
    resetConfirmTitle: 'Восстановить серверы по умолчанию',
    resetConfirmDescription:
      'Это восстановит все серверы по умолчанию, сохраняя при этом ваши пользовательские серверы. Любые изменения серверов по умолчанию будут потеряны.',
    resetConfirm: 'Восстановить'
  },
  about: {
    title: 'О нас',
    version: 'Версия',
    checkUpdate: 'Проверить обновления',
    checking: 'Проверка...',
    latestVersion: 'Последняя версия'
  }
}
