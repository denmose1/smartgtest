<template> 
  <div id="app">
      <v-layout
       wrap  
    >
  <v-toolbar dark color="deep-purple darken-3">
    <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>

    <v-toolbar-title class="white--text">MANAGEMENT</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
   

  </v-toolbar>


<v-navigation-drawer
      id= "nav"
      
      style="height: 250px;"
      v-model="drawer"
      app class="indigo"
      :mini-variant="mini"
      absolute
      dark
      temporary
    >
      <v-list class="deep-purple darken-3">
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
             <img src="">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Management</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-list class="deep-purple darken-3" dense>
        <v-divider light></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-layout>

    <router-view/>


    <v-card
      class="flex"
      flat
      tile
    >
    </v-card>

  </div>
</template>

<script>

export default {
  
  name: 'App',
  components: {}, 
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Employee'},
          { title: 'Account'},
          { title: 'Payments'},
        ],
        mini: false,
        right: null
      }
    },
    
  }
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  
}
#nav{height: "100%";}
</style>
