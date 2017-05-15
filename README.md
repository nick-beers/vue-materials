# Vue Materials
<p align="center">
<a href="https://www.npmjs.com/package/@edge_blade/vue-materials"><img src="https://img.shields.io/npm/dt/@edge_blade/vue-materials.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/@edge_blade/vue-materials"><img src="https://img.shields.io/npm/v/@edge_blade/vue-materials.svg" alt="Version"></a>
</p>

> Vue 2.0 and Materialize.css Components

## Build Setup

``` bash
# install
npm install @edge_blade/vue-materials

# import and use the plugin
import Vue from 'vue'
import Materials from '@edge_blade/vue-materials'

Vue.use(Materials)
```

## Testing Changes
To test changes to this package add a `/dev ` folder under the root directory and load the plugin from the `/src`, then mount a Vue instance to the app like in the example below.

``` bash
# index.js
import Vue from 'vue'
import App from './App.vue'

import MVueComponents from '../src'

Vue.use(MVueComponents);

# Mount Vue App Below
new Vue({
  el: '#app',
  render: h => h(App)
})
```

Then run the following command to boot webpack
``` bash
# run
npm run dev
```

___

Thank you to John Leider for providing the original sourcecode for the project.