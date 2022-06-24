const { createDevServer } = require('@layer0/core/dev')

module.exports = function () {
  return createDevServer({
    label: 'Outputs from express server:',
    command: (port) => `PORT=${port} npm run dev`,
  })
}
