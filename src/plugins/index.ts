/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import type { App } from 'vue';
import loadFonts from './webfontloader';
import vuetify from './vuetify';

// Types

export default function registerPlugins(app: App) {
  loadFonts();
  app.use(vuetify);
}
