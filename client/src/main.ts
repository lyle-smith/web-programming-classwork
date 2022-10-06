import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import ttt, * as math from "./stores/temp";

console.log({ ttt });
const bigger = math.add(ttt, 2);
console.log({ bigger });

let reducer = 0;
if (reducer) {
  const smaller = math.subtract(ttt, reducer);
  console.log({ smaller });
}

import "bulma";
import "./assets/main.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
