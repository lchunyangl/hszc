import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    saveScrollPosition: true,
    routes: [
        {
            name: 'index',
            path: '',
            component: resolve => void(require(['../components/iview/Index.vue'], resolve))
        },
        {
            name: 'user',
            path: '/user',
            component: resolve => void(require(['../components/iview/user/Index.vue'], resolve))
        }
    ]
});