import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import { useLoginStore } from '@/stores/login.js';

const app = createApp(App);

const pinia = createPinia();

app.use(pinia);
app.use(router);

router.beforeEach((to, from, next) => {
  const login = useLoginStore(pinia);

  if (to.meta.requireAuth) {
    if (login.isLoggedIn) {
      next()
    } else {
      alert("로그인이 필요합니다.");
      next({ name: 'login' });
    }
  } else {
    next()
  }

});

app.mount('#app')
