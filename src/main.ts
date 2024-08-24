import { createApp } from 'vue';
import App from './App.vue';

import { setupPinia } from './store';

function boot() {
  const app = createApp(App);

  setupPinia(app);

  app.mount('#app');
}

boot();
