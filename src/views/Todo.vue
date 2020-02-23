<template>
  <v-container fill-height fluid>
    <v-layout row align-content-start>
      <v-flex>
        <v-flex xs12 sm12 md12 lg6 class="pa-3">
          <v-select :dark="true" :menu-props="{dark: true, contentClass:'round2'}" :items="classes" prepend-icon="contacts" label="Filter"></v-select>
        </v-flex>
        <v-list subheader two-line class="round2 transparent t--text">
          <v-subheader class="t--text">Due</v-subheader>
          <v-list-tile avatar v-ripple class="round2 pa-2" style="cursor: pointer">
            <v-list-tile-avatar>
              <v-icon class="t--text">assignment</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Assignment Name</v-list-tile-title>
              <v-list-tile-sub-title class="t--text">Class Name</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <span>Due Feb 11<v-icon class="primary--text" right>alarm</v-icon></span>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider class="mx-4"></v-divider>
          <v-list-tile avatar v-ripple class="round2 pa-2" style="cursor: pointer">
            <v-list-tile-avatar>
              <v-icon class="t--text">assignment</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Assignment Name</v-list-tile-title>
              <v-list-tile-sub-title class="t--text">Class Name</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <span>Due Feb 4, 2:59 PM<v-icon class="primary--text" right>alarm</v-icon></span>
            </v-list-tile-action>
          </v-list-tile>
          <v-subheader class="t--text">Late</v-subheader>
          <v-list-tile avatar v-ripple class="round2 pa-2" style="cursor: pointer">
            <v-list-tile-avatar>
              <v-icon class="t--text">assignment_late</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Assignment Name</v-list-tile-title>
              <v-list-tile-sub-title class="t--text">Class Name</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <span>Due Nov 1, 2018<v-icon class="error--text" right>alarm_off</v-icon></span>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider class="mx-4"></v-divider>
          <v-list-tile avatar v-ripple class="round2 pa-2" style="cursor: pointer">
            <v-list-tile-avatar>
              <v-icon class="t--text">assignment_late</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Assignment Name</v-list-tile-title>
              <v-list-tile-sub-title class="t--text">Class Name</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <span>Due Sep 25, 2018, 2:59 PM<v-icon class="error--text" right>alarm_off</v-icon></span>
            </v-list-tile-action>
          </v-list-tile>
          <v-subheader class="t--text">Done</v-subheader>
          <v-list-tile avatar v-ripple class="round2 pa-2" style="cursor: pointer">
            <v-list-tile-avatar>
              <v-icon class="t--text">assignment_turned_in</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Assignment Name</v-list-tile-title>
              <v-list-tile-sub-title class="t--text">Class Name</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <span>Due Dec 3, 2018<v-icon class="success--text" right>alarm_on</v-icon></span>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider class="mx-4"></v-divider>
          <v-list-tile avatar v-ripple class="round2 pa-2" style="cursor: pointer">
            <v-list-tile-avatar>
              <v-icon class="t--text">assignment_turned_in</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Assignment Name</v-list-tile-title>
              <v-list-tile-sub-title class="t--text">Class Name</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <span>Due Oct 25, 2018<v-icon class="success--text" right>alarm_on</v-icon></span>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      classes: [
        'All Classes',
        'Spanish 2B',
        'AP Computer Science Principles B',
        'English 10B',
        'AP AB Calculus B'
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
