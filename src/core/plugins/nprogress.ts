import NProgress from 'nprogress'
import type { CustomPlugin } from '~/types'

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
