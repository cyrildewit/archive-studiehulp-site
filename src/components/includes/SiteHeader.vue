<template>
    <header class="container site-header">
        <nav class="navbar navbar-default">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Studie Hulp</a>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li><router-link to="/">Dashboard</router-link></li>
                        <li><router-link to="/doelen">Doelen</router-link></li>
                        <li><router-link to="/taken">Taken</router-link></li>
                        <li><router-link to="/planning">Planning</router-link></li>
                        <li><router-link to="/over">Over</router-link></li>
                    </ul>
                    <!-- <ul class="nav navbar-nav navbar-right">
                        <li><router-link to="/add">Add Customer</router-link></li>
                    </ul> -->
                </div> <!--/.nav-collapse -->
            </div>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'header',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style scoped>
</style>
