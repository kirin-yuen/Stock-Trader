import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import Portfolio from '../components/portfolio/Portfolio.vue'
import Stocks from '../components/stocks/Stocks.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
            path: '/', // or empty path
            component: Home
        },
        {
            path: '/Portfolio',
            component: Portfolio
        }, {
            path: '/Stocks',
            component: Stocks
        }
    ]
})