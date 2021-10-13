import {createApp} from 'vue';
import App from './App.vue';
import store from './store/index';
import router from "./router";

const app = createApp(App);

app.use(store); // Add vuex
app.use(router); // Add vue router

app.mount('#app')
