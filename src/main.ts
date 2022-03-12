import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

const APP_ID = "soundhouse-ayase";
if (!document.getElementById(APP_ID)) {
  console.log(APP_ID);
  const el = document.createElement("div");
  el.id = APP_ID;
  document.body.appendChild(el);
}

createApp(App).mount(`#${APP_ID}`);
