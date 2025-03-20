export default {
  title: '설정',
  common: {
    title: '일반 설정',
    resetData: '데이터 초기화',
    language: '언어',
    languageSelect: '언어 선택',
    searchEngine: '검색 엔진',
    searchEngineSelect: '검색 엔진 선택',
    searchPreview: '검색 미리보기',
    searchAssistantModel: '검색 보조 모델',
    selectModel: '모델 선택',
    proxyMode: '프록시 모드',
    proxyModeSelect: '프록시 모드 선택',
    proxyModeSystem: '시스템 프록시',
    proxyModeNone: '프록시 사용 안 함',
    proxyModeCustom: '사용자 정의 프록시',
    customProxyUrl: '사용자 정의 프록시 URL',
    customProxyUrlPlaceholder: '예: http://127.0.0.1:7890',
    invalidProxyUrl: '잘못된 프록시 URL, 유효한 http/https URL을 입력하세요',
    addCustomSearchEngine: '사용자 정의 검색 엔진 추가',
    addCustomSearchEngineDesc:
      "새 검색 엔진을 추가하려면 이름과 검색 URL을 제공해야 합니다. URL에는 {'{'}query{'}'}가 쿼리 자리 표시자로 포함되어야 합니다.",
    searchEngineName: '검색 엔진 이름',
    searchEngineNamePlaceholder: '검색 엔진 이름을 입력하세요',
    searchEngineUrl: '검색 URL',
    searchEngineUrlPlaceholder: "예: https://a.com/search?q={'{'}query{'}'}",
    searchEngineUrlError: "URL에는 {'{'}query{'}'}가 쿼리 자리 표시자로 포함되어야 합니다",
    deleteCustomSearchEngine: '커스텀 검색 엔진 삭제',
    deleteCustomSearchEngineDesc:
      '정말로 커스텀 검색 엔진 "{name}"을(를) 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.',
    testSearchEngine: '검색 엔진 테스트',
    testSearchEngineDesc: '{engine} 검색 엔진을 사용하여 "날씨"에 대한 테스트 검색을 수행합니다.',
    testSearchEngineNote:
      '검색 페이지에 로그인이나 다른 작업이 필요한 경우 테스트 창에서 수행할 수 있습니다. 테스트가 완료되면 테스트 창을 닫아주세요.',
    theme: '테마',
    themeSelect: '테마 선택',
    closeToQuit: '닫기 버튼을 클릭할 때 프로그램 종료',
    contentProtection: '화면 보호',
    contentProtectionDialogTitle: '화면 보호 전환 확인',
    contentProtectionEnableDesc:
      '화면 보호를 활성화하면 화면 공유 소프트웨어가 DeepChat 창을 캡쳐할 수 없습니다. 이 기능은 모든 인터페이스를 완전히 숨기지 않습니다. 이 기능을 사용할 때는 항상 규정을 준수하세요. 또한, 모든 화면 공유 소프트웨어가 이 기능을 지원하지 않을 수 있습니다. 또한, 일부 환경에서는 검은색 창이 남을 수 있습니다.',
    contentProtectionDisableDesc:
      '화면 보호를 비활성화하면 화면 공유 소프트웨어가 DeepChat 창을 캡쳐할 수 있습니다.',
    contentProtectionRestartNotice: '이 설정을 변경하면 프로그램이 재시작됩니다. 계속하시겠습니까?'
  },
  data: {
    title: '데이터 설정',
    syncEnable: '데이터 동기화 활성화',
    syncFolder: '동기화 폴더',
    openSyncFolder: '동기화 폴더 열기',
    lastSyncTime: '마지막 동기화 시간',
    never: '동기화 안 됨',
    startBackup: '지금 백업하기',
    backingUp: '백업 중...',
    importData: '데이터 가져오기',
    incrementImport: '증분 가져오기',
    overwriteImport: '덮어쓰기 가져오기',
    importConfirmTitle: '데이터 가져오기 확인',
    importConfirmDescription:
      '가져오기를 실행하면 채팅 기록과 설정을 포함한 모든 현재 데이터가 덮어쓰기됩니다. 중요한 데이터를 백업했는지 확인하세요. 가져오기 후에는 애플리케이션을 다시 시작해야 합니다.',
    importing: '가져오는 중...',
    confirmImport: '가져오기 확인',
    importSuccessTitle: '가져오기 성공',
    importErrorTitle: '가져오기 실패'
  },
  model: {
    title: '모델 설정',
    systemPrompt: {
      label: '시스템 프롬프트',
      placeholder: '시스템 프롬프트를 입력하세요...',
      description: 'AI 어시스턴트의 행동과 역할을 정의하는 시스템 프롬프트 설정'
    },
    temperature: {
      label: '모델 온도',
      description: '출력의 무작위성을 제어합니다. 값이 높을수록 더 창의적인 응답이 생성됩니다'
    },
    contextLength: {
      label: '컨텍스트 길이',
      description: '대화 컨텍스트의 최대 길이 설정'
    },
    responseLength: {
      label: '응답 길이',
      description: 'AI 응답의 최대 길이 설정'
    },
    artifacts: {
      description: '인공물 기능을 활성화하면 AI가 더 풍부한 콘텐츠를 생성할 수 있습니다'
    }
  },
  provider: {
    enable: '서비스 활성화',
    urlPlaceholder: 'API URL을 입력하세요',
    keyPlaceholder: 'API 키를 입력하세요',
    verifyKey: '키 확인',
    howToGet: '얻는 방법',
    getKeyTip: '다음으로 이동하세요',
    getKeyTipEnd: 'API 키를 얻으려면',
    modelList: '모델 목록',
    enableModels: '모델 활성화',
    disableAllModels: '모든 모델 비활성화',
    modelsEnabled: '모델이 활성화되었습니다',
    verifyLink: '링크 확인',
    syncModelsFailed: '모델 동기화 실패...',
    addCustomProvider: '커스텀 제공자 추가',
    delete: '삭제',
    stopModel: '모델 중지',
    pulling: '가져오는 중...',
    runModel: '모델 실행',
    dialog: {
      disableModel: {
        title: '모델 비활성화 확인',
        content: '모델 "{name}"을(를) 비활성화하시겠습니까?',
        confirm: '비활성화'
      },
      disableAllModels: {
        title: '모든 모델 비활성화 확인',
        content: '"{name}"의 모든 모델을 비활성화하시겠습니까?',
        confirm: '모두 비활성화'
      },
      configModels: {
        title: '모델 목록 구성'
      },
      verify: {
        missingFields: 'API 키와 API URL을 입력하세요',
        failed: '확인 실패',
        success: '확인 성공'
      },
      addCustomProvider: {
        title: '커스텀 제공자 추가',
        description: '제공자에 필요한 정보를 입력하세요',
        name: '이름',
        namePlaceholder: '제공자 이름을 입력하세요',
        apiType: 'API 유형',
        apiTypePlaceholder: 'API 유형을 선택하세요',
        apiKey: 'API 키',
        apiKeyPlaceholder: 'API 키를 입력하세요',
        baseUrl: '기본 URL',
        baseUrlPlaceholder: '기본 URL을 입력하세요',
        enable: '제공자 활성화'
      },
      deleteProvider: {
        title: '제공자 삭제',
        content: '제공자 "{name}"을(를) 삭제하시겠습니까? 이 작업은 취소할 수 없습니다.',
        confirm: '삭제'
      },
      deleteModel: {
        title: '모델 삭제 확인',
        content: '모델 "{name}"을(를) 삭제하시겠습니까? 이 작업은 취소할 수 없습니다.',
        confirm: '삭제'
      },
      pullModel: {
        title: '모델 가져오기',
        pull: '가져오기'
      }
    },
    pullModels: '모델 가져오기',
    refreshModels: '모델 새로고침',
    modelsRunning: '실행 중인 모델',
    runningModels: '실행 중인 모델',
    noRunningModels: '실행 중인 모델 없음',
    deleteModel: '모델 삭제',
    deleteModelConfirm: '모델 "{name}"을(를) 삭제하시겠습니까? 이 작업은 취소할 수 없습니다.',
    noLocalModels: '로컬 모델 없음',
    localModels: '로컬 모델'
  },
  mcp: {
    title: 'MCP 설정',
    description: 'MCP(Model Control Protocol) 서버 및 도구 관리 및 구성',
    enabledTitle: 'MCP 활성화',
    enabledDescription: 'MCP 기능 및 도구 활성화 또는 비활성화',
    enableToAccess: '구성 옵션에 액세스하려면 MCP를 활성화하세요',
    tabs: {
      servers: '서버',
      tools: '도구'
    },
    serverList: '서버 목록',
    addServer: '서버 추가',
    running: '실행 중',
    stopped: '중지됨',
    stopServer: '서버 중지',
    startServer: '서버 시작',
    noServersFound: '서버 없음',
    addServerDialog: {
      title: '서버 추가',
      description: '새 MCP 서버 구성'
    },
    editServerDialog: {
      title: '서버 편집',
      description: 'MCP 서버 구성 편집'
    },
    serverForm: {
      name: '서버 이름',
      namePlaceholder: '서버 이름 입력',
      nameRequired: '서버 이름이 필요합니다',
      type: '서버 유형',
      typePlaceholder: '서버 유형 선택',
      typeStdio: '표준 입출력',
      typeSse: '서버 전송 이벤트',
      baseUrl: '기본 URL',
      baseUrlPlaceholder: '서버 기본 URL 입력(예: http://localhost:3000)',
      command: '명령어',
      commandPlaceholder: '명령어 입력',
      commandRequired: '명령어는 비어 있을 수 없습니다',
      args: '매개변수',
      argsPlaceholder: '매개변수 입력, 공백으로 구분',
      argsRequired: '매개변수는 비어 있을 수 없습니다',
      env: '환경 변수',
      envPlaceholder: 'JSON 형식의 환경 변수 입력',
      envInvalid: '환경 변수는 유효한 JSON 형식이어야 합니다',
      description: '설명',
      descriptionPlaceholder: '서버 설명 입력',
      descriptions: '설명',
      descriptionsPlaceholder: '서버 설명 입력',
      icon: '아이콘',
      iconPlaceholder: '아이콘 입력',
      icons: '아이콘',
      iconsPlaceholder: '아이콘 입력',
      autoApprove: '자동 승인',
      autoApproveAll: '전체',
      autoApproveRead: '읽기',
      autoApproveWrite: '쓰기',
      autoApproveHelp: '자동 승인할 작업 유형을 선택하세요. 사용자 확인 없이 실행할 수 있습니다',
      submit: '제출',
      add: '추가',
      update: '업데이트',
      cancel: '취소',
      jsonConfigIntro:
        'JSON 구성을 직접 붙여넣거나 서버를 수동으로 구성하는 것 중에서 선택할 수 있습니다.',
      jsonConfig: 'JSON 구성',
      jsonConfigPlaceholder: 'MCP 서버의 JSON 형식 구성을 붙여넣으세요',
      jsonConfigExample: 'JSON 구성 예시',
      parseSuccess: '구성 파싱 성공',
      configImported: '구성을 성공적으로 가져왔습니다',
      parseError: '파싱 오류',
      skipToManual: '수동 구성으로 건너뛰기',
      parseAndContinue: '파싱 및 계속'
    },
    deleteServer: '서버 삭제',
    editServer: '서버 편집',
    setDefault: '기본 설정',
    isDefault: '기본 서버',
    default: '기본',
    setAsDefault: '기본 설정',
    removeServer: '서버 삭제',
    confirmRemoveServer: '서버 {name}을(를) 삭제하시겠습니까? 이 작업은 취소할 수 없습니다.',
    removeServerDialog: {
      title: '서버 삭제'
    },
    confirmDelete: {
      title: '삭제 확인',
      description: '서버 {name}을(를) 삭제하시겠습니까? 이 작업은 취소할 수 없습니다.',
      confirm: '삭제',
      cancel: '취소'
    },
    resetToDefault: '기본값으로 재설정',
    resetConfirmTitle: '기본 서버로 재설정',
    resetConfirmDescription:
      '이 작업은 사용자 정의 서버를 유지하면서 모든 기본 서버를 복원합니다. 기본 서버에 대한 모든 수정 사항이 손실됩니다.',
    resetConfirm: '재설정'
  },
  about: {
    title: '우리에 대해',
    version: '버전',
    checkUpdate: '업데이트 확인',
    checking: '확인 중...',
    latestVersion: '최신 버전'
  }
}
