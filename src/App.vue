<template>
    <div id="app">
        <SiteHeader />
        <router-view></router-view>
        <SiteFooter v-bind:copyrightYear="2017" />
    </div>
</template>

<script>
import SiteHeader from '@/components/includes/SiteHeader';
import SiteFooter from '@/components/includes/SiteFooter';

export default {
    name: 'app',
    components: {
        SiteHeader,
        SiteFooter,
    },
};
</script>

<style>
body {
    margin-top: 40px;
    margin-bottom: 60px;
}
</style>
