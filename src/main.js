import App from '@/view/App'
import Vue from 'vue'
import VueRouter from 'vue-router'
import router from '@/router/index'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import { registerMicroApps, start } from 'qiankun'
 
Vue.use(VueRouter)
Vue.use(ElementUI)

const entry = process.env.NODE_ENV === 'development' ? 'http://localhost:33901' : 'http://124.221.44.7:33901'

registerMicroApps([
    {
        name: 'comp1',
        entry,
        activeRule: '/comp1',
        container: '#sub-container',
        props: {
            superRouter: router
        }
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

