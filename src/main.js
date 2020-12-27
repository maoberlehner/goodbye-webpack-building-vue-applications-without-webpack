import { createApp, h } from 'https://unpkg.com/vue@3.0.4/dist/vue.runtime.esm-browser.js';

import App from './components/App.js';

const app = createApp({
  render: () => h(App),
});
app.mount(`#app`);
