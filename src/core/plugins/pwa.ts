import type { CustomPlugin } from '~/types'

export const install: CustomPlugin = ({ isClient, router }) => {
  if (!isClient) return

  router.isReady().then(async () => {
    const { registerSW } = await import('virtual:pwa-register')
    registerSW({ immediate: true })
  })
}
