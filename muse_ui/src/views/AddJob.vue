<template>
    <div id="app">
        <v-app id="inspire">
            <v-form
                    ref="form"
                    lazy-validation
            >
                <v-text-field
                        v-model="job.company"
                        :counter="10"
                        label="Company"
                        required
                ></v-text-field>

                <v-text-field
                        v-model="job.logoId"
                        label="Logo id"
                        required
                ></v-text-field>
                <v-text-field
                        v-model="job.location"
                        label="Location"
                        required
                ></v-text-field>
                <v-text-field
                        v-model="job.jobTitle"
                        label="Job Title"
                        required
                ></v-text-field>
                <v-text-field
                        v-model="job.description"
                        label="Description"
                        required
                ></v-text-field>
                <v-text-field
                        v-model="job.link"
                        label="Link"
                        required
                ></v-text-field>

                <v-btn
                        class="primary"
                        @click="submit"
                >
                    Submit
                </v-btn>

            </v-form>
        </v-app>
    </div>
    
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {

                job:{}

            }
        },
        methods:{
            submit: function(){

                axios.post('http://localhost:5000/addjob',this.job)

            }
        }
    }
</script>


<style scoped>

</style>