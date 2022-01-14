import type { CustomPlugin } from '~/types'
import NProgress from 'nprogress'

export const install: CustomPlugin = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach(() => {
      NProgress.start()
    })
    router.afterEach(() => {
      NProgress.done()
    })
  }
}
