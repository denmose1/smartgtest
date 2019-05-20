<template>
<v-card>
    <v-toolbar
    absolute
    color='teal lighten-3'
    dark
    extended 
    flat
    >
    </v-toolbar>
        <v-layout row pb-2>
      <v-flex xs8 offset-xs2>
        <v-card class="card--flex-toolbar">
          <v-toolbar card prominent>
            <v-toolbar-title class="body-2 grey--text">Title</v-toolbar-title>

            <v-spacer></v-spacer>
<!--
            <v-btn icon>
              <v-icon>search</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>apps</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>more_vert</v-icon>
            </v-btn>
-->

          </v-toolbar>


          <v-divider></v-divider>

          <v-card-text style="height: 500px;">

              <div>
              <b-alert show>Default Alert</b-alert>

              <b-alert variant="success" show>Success Alert</b-alert>

              <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
                Dismissible Alert!
              </b-alert>

              <b-alert
                :show="dismissCountDown"
                dismissible
                variant="warning"
                @dismissed="dismissCountDown=0"
                @dismiss-count-down="countDownChanged"
              >
                <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
                <b-progress
                  variant="warning"
                  :max="dismissSecs"
                  :value="dismissCountDown"
                  height="4px"
                ></b-progress>
              </b-alert>

              <b-button @click="showAlert" variant="info" class="m-1">
                Show alert with count-down timer
              </b-button>
              <b-button @click="showDismissibleAlert=true" variant="info" class="m-1">
                Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})
              </b-button>
            </div>
          <v-alert
      v-model="alert"
      dismissible
      type="success"
    >
      This is a success alert that is closable.
    </v-alert>
    <div class="text-xs-center">
      <v-btn
        v-if="!alert"
        color="primary"
        dark
        @click="alert = true"
      >
        Reset
      </v-btn>
  </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

</v-card>
</template>

<script>
  export default {
    data() {
      return {
        dismissSecs: 10,
        dismissCountDown: 0,
        showDismissibleAlert: false
      }
    },
    methods: {
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      }
    }
  }
</script>