import type { ViteSSGContext } from 'vite-ssg'

/**
 * Extends the browser window object
 */
declare interface Window {}

export type CustomPlugin = (ctx: ViteSSGContext) => void
