import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

console.log("run");
if (!document.getElementById("app")) {
  const el = document.createElement("div");
  el.id = "app";
  document.body.appendChild(el);
}

createApp(App).mount("#app");
