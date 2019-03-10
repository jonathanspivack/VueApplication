<template>
  <div class="projects">
    <h1 class="subheading grey--text">Jobs</h1>

    <v-container class="my-5">
      <v-expansion-panel  >
        <v-expansion-panel-content   v-for="job in jobs" :key="job.company" >

          <img style="width:100px;height:auto;margin-left: 22px" :src="`https://assets.themuse.com/uploaded/companies/${job.logo}/small_logo.png`" />

          <div @click="add_view(job.id)" slot="header" class="py-1"><div class="text-lg-left font-weight-bold">{{ job.company }}</div> <div>{{job.job_title}}</div>

          </div>
          <v-card>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold">Location: {{ job.location }}</div>
              <div class="font-weight-bold">Views: {{ job.views }}</div>
              <br>
              <div>{{job.job_description}}</div>
              <v-spacer></v-spacer>
              <v-btn :href="`${job.link}`" block color="primary" dark>Apply</v-btn>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>

  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
          jobs: []
      }
    },
      created() {
      var vm = this;
      axios.get('http://localhost:5000/getjobs')
      .then(function(response) {
        vm.jobs = response.data
      })
  },
       methods: {
        add_view: function (job_id) {
        let url = 'http://localhost:5000/jobview/' + job_id;
        axios.get(url)

    }
  }

  }
</script>