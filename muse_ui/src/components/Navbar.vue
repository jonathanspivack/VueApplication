<template>
    <div>
        <nav>
            <v-toolbar flat app>
                <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
                <v-toolbar-title class="text-uppercase grey--text">
                    <span class="font-weight-light">Job</span>
                    <span>Board</span>
                </v-toolbar-title>
                <v-spacer></v-spacer>

            </v-toolbar>

            <v-navigation-drawer v-model="drawer" app class="indigo">
                <v-list>
                    <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-tile-action>
                            <v-icon class="white--text">{{ link.icon}}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title class="white--text">
                                {{ link.text}}
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>
        </nav>
    </div>

</template>

<script>
    export default {
        data(){
            return{
                drawer:false,
                links: [
                    { icon: 'folder', text: 'My Jobs', route: '/' },

                ]
            }
        }
    }
</script>

<style scoped>

</style>