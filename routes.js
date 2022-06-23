import { Router } from '@layer0/core'

export default new Router().post('/', ({ renderWithApp }) => {
  renderWithApp()
})
