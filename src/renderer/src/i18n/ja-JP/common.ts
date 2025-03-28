const common = {
  enabled: '有効',
  disabled: '無効',
  loading: '読み込み中...',
  copySuccess: 'コピーしました!',
  copyCode: 'コードをコピー',
  copy: 'コピー',
  paste: '貼り付け',
  newChat: '新しいチャット',
  newTopic: '新しいトピック',
  cancel: 'キャンセル',
  confirm: '確認',
  close: '閉じる',
  error: {
    requestFailed: 'リクエストに失敗しました...',
    createChatFailed: 'チャットの作成に失敗しました',
    selectChatFailed: 'チャットの選択に失敗しました',
    renameChatFailed: 'チャットの名前変更に失敗しました',
    deleteChatFailed: 'チャットの削除に失敗しました',
    userCanceledGeneration: 'ユーザーが生成をキャンセルしました',
    sessionInterrupted: 'セッションが中断され、生成が完了しませんでした',
    cleanMessagesFailed: 'チャットメッセージのクリーンアップに失敗しました',
    noModelResponse: 'モデルは何も返しませんでした。タイムアウトの可能性があります',
    invalidJson: '無効なJSON形式',
    maximumToolCallsReached: '最大のツール呼び出し回数に達しました'
  },
  resetDataConfirmTitle: 'すべてのデータをリセットしますか？',
  resetDataConfirmDescription:
    'すべてのデータがデフォルト設定にリセットされます。この操作は元に戻せません。',
  proxyMode: 'プロキシモード',
  proxyModeSelect: 'プロキシモードを選択',
  proxyModeSystem: 'システムプロキシ',
  proxyModeNone: 'プロキシなし',
  proxyModeCustom: 'カスタムプロキシ',
  customProxyUrl: 'カスタムプロキシURL',
  customProxyUrlPlaceholder: '例: http://127.0.0.1:7890',
  invalidProxyUrl: '無効なプロキシURL、有効なhttp/https URLを入力してください'
}

export default common
