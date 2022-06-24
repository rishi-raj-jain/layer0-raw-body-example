import { Router } from '@layer0/core'

export default new Router().fallback(({ renderWithApp }) => {
  renderWithApp()
})
