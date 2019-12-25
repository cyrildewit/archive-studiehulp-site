<template>
    <div class="container dashboard">
        <h1 class="page-header">Dashboard</h1>
        <br />
        <div class="well">
            <div class="row">
                <div class="col-md-6">
                    <h3>Actieve Doelen <span class="label label-primary">3</span></h3>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                            </tr>
                        </thead>
                    </table>
                    <br />
                    <h2>Maandoel</h2>
                    <div class="panel panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title">{{ getMonthGoal() }}</h3>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">Aankomende maandoelen</h3>
                        </div>
                        <ul class="list-group">
                            <li class="list-group-item" v-for="goal in monthGoals">
                                <strong>{{ goal.month | cleanDate }}</strong>: {{ goal.desc }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dashboard',
    data() {
        return {
            monthGoals: [
                { month: 0, desc: 'Learn JavaScript Promises' },
                { month: 1, desc: 'Read a book' },
                { month: 2, desc: 'Build a personal website' },
                { month: 3, desc: 'Lean JavaScript AJAX' },
            ],
        };
    },
    methods: {
        getMonthGoal: function() {
            var thisMonth = new Date().getMonth();

            for (var i = 0; i < this.monthGoals.length; i++) {
                if (this.monthGoals[i].month === thisMonth) {
                    return this.monthGoals[i].desc;
                }
            }

            return "Geen doel voor deze maand!";
        },
    },
    filters: {
        moment: function(date) {
            return moment(date).format('MMMM Do YYYY, h:mm:ss a');
        },
        cleanDate: function(date) {
            return moment(date).format('MMMM');
        },
    },
};
</script>

<style scoped>
</style>
