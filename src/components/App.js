import html from '../utils/html.js';

import BaseButton from './BaseButton.js';

export default {
  name: `App`,
  data() {
    return {
      count: 0,
    };
  },
  render() {
    return html`
      <div>
        Count: ${this.count}
        <${BaseButton} onClick=${() => { this.count += 1 }}>
          +1
        <//>
      </div>
    `;
  },
};
