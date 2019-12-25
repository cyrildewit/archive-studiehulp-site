<template>
    <div class="container dashboard">
        <h1 class="page-header">Doelen</h1>
        <br />
        <div class="row">
            <div class="col-md-6" v-for="goal in goals">
                <div class="well">
                    <ul class="list-group">
                        <li class="list-group-item"><strong>Doel naam:</strong> {{ goal.name }}</li>
                        <li class="list-group-item"><strong>Beschrijving / Doel:</strong> {{ goal.description }}</li>
                        <li class="list-group-item"><strong>Start datum:</strong> {{ goal.startDate | cleanDate }}</li>
                        <li class="list-group-item"><strong>Deadline:</strong> {{ goal.endDate | cleanDate }}</li>
                        <li class="list-group-item"><strong>Categorie:</strong> {{ goal.category }}</li>
                        <li class="list-group-item"><strong>created_at:</strong> {{ goal.created_at }}</li>
                        <li class="list-group-item"><strong>updated_at:</strong> {{ goal.updated_at }}</li>
                    </ul>
                    <h4>Taken</h4>
                    <ul class="list-group">
                        <li class="list-group-item" v-for="task in goal.tasks">{{ task.title }} - {{ task.progress }}%</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'goals-home',
    data() {
        return {
            goals: [
                {
                    name: 'Leer JavaScript',
                    description: 'Om de beste JavaScript expert te worden.',
                    startDate: '2017-02-25',
                    endDate: '2018-04-16',
                    category: 'Personal Development',
                    tasks: [
                        {
                            title: 'Read Book',
                            progress: 60,
                        },
                        {
                            title: 'Read Book',
                            progress: 20,
                        },
                    ],
                    created_at: moment(),
                    updated_at: moment(),
                },
                {
                    name: 'Leer Vue.js',
                    description: 'Om hele snelle JavaScript applicaties te kunnen bouwen!',
                    startDate: new Date(),
                    endDate: new Date(),
                    category: 'Personal Development',
                    tasks: [
                        {
                            title: 'Read Book',
                            progress: 10,
                        },
                        {
                            title: 'Read Book',
                            progress: 70,
                        },
                    ],
                    created_at: moment(),
                    updated_at: moment(),
                },
            ],
        };
    },
    filters: {
        moment: function(date) {
            return moment(date).format('MMMM Do YYYY, h:mm:ss a');
        },
        cleanDate: function(date) {
            return moment(date).format('DD MMMM YYYY');
        },
        makeHash: function() {
            var text = prefix || "";

            var alphabet = "abcdefghijklmnopqrstuvwxyz";
            var numbers = "0123456789";

            var possible = alphabet + numbers;

            for ( var i = 0; i < max; i++ ) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }

            return text;
        },
    },
};
</script>

<style scoped>
</style>
