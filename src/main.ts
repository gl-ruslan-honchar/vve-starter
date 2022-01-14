import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import 'virtual:windi-devtools'
import 'virtual:windi-utilities.css'
import './core/assets/styles/main.css'

import App from './App.vue'
import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'

const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(App, { routes }, (ctx) => {
  Object.values(import.meta.globEager('./**/plugins/*.ts')).map((i) => i.install?.(ctx))
})
