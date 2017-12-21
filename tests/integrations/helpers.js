exports.getConfig = (app, locale = 'en-US') => {
  const opts = {
    appId: 'your-app-id',
    app: app,
    locale,
    handler: app.handler
  }
  return opts
}
