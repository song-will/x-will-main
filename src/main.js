import App from '@/view/App'
import Vue from 'vue'
import VueRouter from 'vue-router'
import router from '@/router/index'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import { registerMicroApps, start } from 'qiankun'
 
Vue.use(VueRouter)
Vue.use(ElementUI)


const createEntry = (port = 33901) => {
    return process.env.NODE_ENV === 'development' ? `http://localhost:${port}` : `http://124.221.44.7:${port}`
}

registerMicroApps([
    {
        name: 'comp1',
        entry: createEntry(33901),
        activeRule: '/comp1',
        container: '#sub-container',
        props: {
            superRouter: router
        }
    },
    {
        name: 'comp2',
        entry: createEntry(33902),
        activeRule: '/comp2',
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

