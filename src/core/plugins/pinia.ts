import type { CustomPlugin } from '~/types'
import { createPinia } from 'pinia'

export const install: CustomPlugin = ({ isClient, initialState, app }) => {
  const pinia = createPinia()
  app.use(pinia)
  if (isClient) pinia.state.value = initialState.pinia || {}
  else initialState.pinia = pinia.state.value
}
