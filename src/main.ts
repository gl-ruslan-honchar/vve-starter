import { ViteSSG } from "vite-ssg";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";

import "virtual:windi-base.css";
import "virtual:windi-components.css";
import "virtual:windi-devtools";
import "virtual:windi-utilities.css";

import "./core/assets/styles/main.css";
import App from "./App.vue";

const routes = setupLayouts(generatedRoutes);

export const createApp = ViteSSG(App, { routes }, (ctx) => {
  Object.values(import.meta.globEager("./**/plugins/*.ts")).map((i) =>
    i.install?.(ctx)
  );
});
