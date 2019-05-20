<template>
  <div>
    
   
    <!-- <v-layout row pb-2> -->

    <v-layout row wrap justify-space-between>
      <v-card width="20%">
        <v-container>
          <v-list-item>
            <v-list-item-content>
              <v-btn flat>Home</v-btn>
            </v-list-item-content>
            <v-divider></v-divider>
            <br>
            <v-list-item-content>
              <router-link tag="v-btn" to="/Products" flat> <p> Products </p> </router-link>
            </v-list-item-content>
            <v-divider></v-divider>
            <br>
            <v-list-item-content>
              <router-link tag="v-btn" to="/alerts" flat> <p> Alerts </p> </router-link>            
            </v-list-item-content>
            <v-divider></v-divider>
            <br>
            <v-list-item-content>
              <router-link tag="v-btn" to="/Management" flat> <p> Management </p> </router-link>
            </v-list-item-content>
            <v-divider></v-divider>
            <br>
            <v-list-item-content>
              <router-link tag="v-btn" to="/staff" flat> <p> Add Employee  </p> </router-link>
            </v-list-item-content>
            <v-divider></v-divider>
            <br>
               <v-list-item-content>
              <router-link tag="v-btn" to="/Dashboard" flat> <p> Dashboard  </p> </router-link>
            </v-list-item-content>
            <v-divider></v-divider>
            <br>
        </v-list-item>
        </v-container>
      </v-card>
      <v-card width="80%">
        <v-layout mt-2 row max-width="100%">
          <v-card height="50%" width="100%" color="blue-grey darken-4" dark flat>
            <v-card-title>Graphs/Sales</v-card-title>
          </v-card>
        </v-layout>
        <v-layout mt-2 row justify-space-between max-width="100%">
          <v-card width="50%" height="250px">
            <v-container>
              <v-card-title>Item 1</v-card-title>
            </v-container>
          </v-card>
          <v-card width="50%" height="250px">
            <v-container>
              <v-card-title>Item 6</v-card-title>
            </v-container>
          </v-card>
        </v-layout>
        <v-layout mt-2 row max-width="100%">
          <v-card height="40px" width="100%" color="blue-grey darken-4" dark flat>
            <v-card-title>Maps/Notification</v-card-title>
          </v-card>
        </v-layout>
        <v-layout mt-2 row justify-space-between max-width="100%">
          <v-card width="50%" height="250px">
            <v-container>
              <v-card-title>Item 1</v-card-title>
            </v-container>
          </v-card>
          <v-card width="50%" height="250px">
            <v-container>
              <v-card-title>Item 2</v-card-title>
            </v-container>
          </v-card>          
        </v-layout>
      </v-card>
    </v-layout>
  </div>
</template>