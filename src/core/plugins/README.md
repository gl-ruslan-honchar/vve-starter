# Plugins

A custom plugin system. Place a `.ts` file with the following template, it will be
installed automatically.

```ts
import type { CustomPlugin } from '~/types'

export const install: CustomPlugin = ({ app, router, isClient }) => {
  // do something
}
```
