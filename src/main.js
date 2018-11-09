import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Helper from '@/helpers/Helper.js'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    methods: {
        Helper
    },
    watch: {
        '$route' (to, from) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
            document.body.classList.remove('menu-show')
            document.getElementById('burger').classList.remove('clicked')
        }
    },
    mounted: function () {
        this.Helper()
    },
    render: h => h(App)
}).$mount('#app')
