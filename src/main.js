import { createApp } from 'vue';  // Import Vue
import App from './App.vue';       // Import the root component (App.vue)
import router from './router';     // Import the router

// Create the Vue app instance, tell it to use the router, and mount it to #app
createApp(App).use(router).mount('#app');