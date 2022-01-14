const path = require('path')
const AutoImport = require('unplugin-auto-import/vite')
const WindiCSS = require('vite-plugin-windicss').default

module.exports = {
  framework: '@storybook/vue3',
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/base/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'storybook-builder-vite',
  },
  async viteFinal(config, { configType }) {
    config.plugins = config.plugins || []
    config.plugins.push(
      AutoImport({
        imports: ['vue', 'vue-router', 'vue-i18n', '@vueuse/head', '@vueuse/core'],
        dts: '.storybook/auto-imports.d.ts',
      })
    )
    config.plugins.push(
      WindiCSS({
        // root: path.dirname(__dirname),
        config: path.join(__dirname, '..', 'windi.config.ts'),
      })
    )

    config.resolve.dedupe = ['@storybook/client-api']

    // customize the Vite config here
    return config
  },
}
