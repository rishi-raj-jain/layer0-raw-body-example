import { Router } from '@layer0/core'

export default new Router()
  .post('/compute', ({ compute, send }) => {
    compute((req) => {
      const { rawBody, body } = request
      console.log('rawBody', rawBody)
      console.log('body', body)

      send(`rawBody: ${rawBody}\n\nbody: ${body}`)
    })
  })
  .fallback(({ renderWithApp }) => {
    renderWithApp()
  })

// In production be specific like follows to not overuse serverless functions for any request that shouldn't be entertained
// import { Router } from '@layer0/core'

// export default new Router()
//   .get('/', ({ renderWithApp }) => {
//     renderWithApp()
//   })
//   .post('/', ({ renderWithApp }) => {
//     renderWithApp()
//   })
