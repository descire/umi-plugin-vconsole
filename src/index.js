module.exports = function (api, options) {
  const isDev = process.env.NODE_ENV === 'development';
  if (isDev) {
    api.addEntryImport({
      source: 'vconsole',
      specifier: 'VConsole',
    })

    api.addEntryCodeAhead(`
      new VConsole();
    `)
  }
}
