import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import 'virtual:windi-devtools'
import 'virtual:windi-utilities.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
