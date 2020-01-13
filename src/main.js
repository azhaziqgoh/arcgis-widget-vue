import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

window.dojoConfig = {
  packages: [
    {
      name: "vue",
      location: "https://unpkg.com/vue/dist/",
      main: "vue"
    }
  ]
};

new Vue({
  render: h => h(App),
}).$mount('#app')
