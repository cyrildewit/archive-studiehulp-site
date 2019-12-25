<template>
    <footer class="container footer">
        <hr />
        <p>&copy; <span v-if="2017 !== copyrightYear">2017 - </span>{{ copyrightYear }} Studie Hulp &amp; Cyril de Wit.</p>
    </footer>
</template>

<script>
export default {
    name: 'footer',
    props: [
        'copyrightYear',
    ],
};
</script>

<style scoped>
</style>
