import Vue from 'vue'
import Router from 'vue-router'
import View1 from './views/firstView.vue'
import View2 from './views/secondView.vue'

Vue.use(Router)

export default new Router ({
    linkActiveClass: 'active',
    routes: [
        {
            path: '/firstView',
            component: View1
        },
        {
            path: '/secondView',
            component: View2
        },
        {
            path: '/',
            component: View1
        }
    ]

})
