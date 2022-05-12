import App from '@/view/App'
import Vue from 'vue'
import VueRouter from 'vue-router'
import router from '@/router/index'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import { registerMicroApps, start } from 'qiankun'
 
Vue.use(VueRouter)
Vue.use(ElementUI)

registerMicroApps([
    {
        name: 'comp1',
        entry: 'http://localhost:33901',
        activeRule: '/comp1',
        container: '#sub-container'
    }
])

start()

new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    render (h) {
        return h('App')
    }
})

