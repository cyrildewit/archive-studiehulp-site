import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from '@/components/Dashboard';

import GoalsHome from '@/components/Goals/GoalsHome';

import Over from '@/components/pages/Over';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: '../' + __dirname,
    routes: [
        { path: '/', name: 'Dashboard', component: Dashboard, },
        { path: '/doelen', name: 'Doelen', component: GoalsHome, },
        { path: '/over', name: 'Over', component: Over, },
    ],
});
