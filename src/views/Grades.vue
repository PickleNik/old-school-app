<template>
  <v-container fill-height fluid class="pa-3">
    <v-layout column>
        <v-list subheader dark class="transparent t--text">
          <v-layout class="ma-3">
            <h2>Grades Report<v-icon right dark>keyboard_arrow_down</v-icon></h2>
            <v-spacer></v-spacer>
            GPA: 3.2
          </v-layout>
          <v-subheader>
            <v-flex xs2 class="">Classes</v-flex>
            <v-flex xs2 class="text-xs-center">MP1</v-flex>
            <v-flex xs2 class="text-xs-center">MP2</v-flex>
            <v-flex xs2 class="text-xs-center">MP3</v-flex>
            <v-flex xs2 class="text-xs-center">MP4</v-flex>
            <v-flex xs2 class="text-xs-right">Total</v-flex>
          </v-subheader>
          <v-divider></v-divider>
          <v-list-tile class="my-2">
            <v-list-tile-title>Spanish 2</v-list-tile-title>
            <v-list-tile-title class="text-xs-center round2 success--text py-3" style="height: 3.5em; cursor: pointer;" v-ripple>A</v-list-tile-title>
            <v-list-tile-title class="text-xs-center round2 blue--text py-3" style="height: 3.5em; cursor: pointer;" v-ripple>B</v-list-tile-title>
            <v-list-tile-title class="text-xs-center round2 success--text py-3" style="height: 3.5em; cursor: pointer;" v-ripple>A</v-list-tile-title>
            <v-list-tile-title class="text-xs-center round2 amber--text py-3" style="height: 3.5em; cursor: pointer;" v-ripple>C</v-list-tile-title>
            <v-list-tile-title class="text-xs-right round2 blue--text py-3 pr-3" style="margin-left: -1em; height: 3.5em; cursor: pointer;" v-ripple>B</v-list-tile-title>
          </v-list-tile>
          <v-divider></v-divider>
          <v-list-tile class="my-2">
            <v-list-tile-title>AP Computer Science P...</v-list-tile-title>
            <v-list-tile-title class="text-xs-center round2 success--text py-3" style="height: 3.5em; cursor: pointer;" v-ripple>A</v-list-tile-title>
            <v-list-tile-title class="text-xs-center round2 amber--text py-3" style="height: 3.5em; cursor: pointer;" v-ripple>C</v-list-tile-title>
            <v-list-tile-title class="text-xs-center round2 blue--text py-3" style="height: 3.5em; cursor: pointer;" v-ripple>B</v-list-tile-title>
            <v-list-tile-title class="text-xs-center round2 blue--text py-3" style="height: 3.5em; cursor: pointer;" v-ripple>B</v-list-tile-title>
            <v-list-tile-title class="text-xs-right round2 blue--text py-3 pr-3" style="margin-left: -1em; height: 3.5em; cursor: pointer;" v-ripple>B</v-list-tile-title>
          </v-list-tile>
          <v-divider></v-divider>
          <v-list-tile class="my-2">
            <v-list-tile-title>English 10</v-list-tile-title>
            <v-list-tile-title class="text-xs-center round2 orange--text py-3" style="height: 3.5em; cursor: pointer;" v-ripple>D</v-list-tile-title>
            <v-list-tile-title class="text-xs-center round2 orange--text py-3" style="height: 3.5em; cursor: pointer;" v-ripple>D</v-list-tile-title>
            <v-list-tile-title class="text-xs-center round2 amber--text py-3" style="height: 3.5em; cursor: pointer;" v-ripple>C</v-list-tile-title>
            <v-list-tile-title class="text-xs-center round2 error--text py-3" style="height: 3.5em; cursor: pointer;" v-ripple>E</v-list-tile-title>
            <v-list-tile-title class="text-xs-right round2 orange--text py-3 pr-3" style="margin-left: -1em; height: 3.5em; cursor: pointer;" v-ripple>D</v-list-tile-title>
          </v-list-tile>
          <v-divider></v-divider>
          <v-list-tile class="my-2">
            <v-list-tile-title>AP AB Calculus</v-list-tile-title>
            <v-list-tile-title class="text-xs-center round2 amber--text py-3" style="height: 3.5em; cursor: pointer;" v-ripple>C</v-list-tile-title>
            <v-list-tile-title class="text-xs-center round2 amber--text py-3" style="height: 3.5em; cursor: pointer;" v-ripple>C</v-list-tile-title>
            <v-list-tile-title class="text-xs-center round2 blue--text py-3" style="height: 3.5em; cursor: pointer;" v-ripple>B</v-list-tile-title>
            <v-list-tile-title class="text-xs-center round2 success--text py-3" style="height: 3.5em; cursor: pointer;" v-ripple>A</v-list-tile-title>
            <v-list-tile-title class="text-xs-right round2 blue--text py-3 pr-3" style="margin-left: -1em; height: 3.5em; cursor: pointer;" v-ripple>B</v-list-tile-title>
          </v-list-tile>
          <v-divider></v-divider>
          <v-list-tile class="my-2">
            <v-list-tile-title>Sp PE Basketball</v-list-tile-title>
            <v-list-tile-title class="text-xs-center grey--text">N</v-list-tile-title>
            <v-list-tile-title class="text-xs-center grey--text">N</v-list-tile-title>
            <v-list-tile-title class="text-xs-center round2 success--text py-3" style="height: 3.5em; cursor: pointer;" v-ripple>A</v-list-tile-title>
            <v-list-tile-title class="text-xs-center round2 success--text py-3" style="height: 3.5em; cursor: pointer;" v-ripple>A</v-list-tile-title>
            <v-list-tile-title class="text-xs-right round2 success--text py-3 pr-3" style="margin-left: -1em; height: 3.5em; cursor: pointer;" v-ripple>A</v-list-tile-title>
          </v-list-tile>
          <v-divider></v-divider>
          <v-list-tile class="my-2">
            <v-list-tile-title>AP Computer Science JAVA</v-list-tile-title>
            <v-list-tile-title class="text-xs-center round2 success--text py-3" style="height: 3.5em; cursor: pointer;" v-ripple>A</v-list-tile-title>
            <v-list-tile-title class="text-xs-center round2 amber--text py-3" style="height: 3.5em; cursor: pointer;" v-ripple>C</v-list-tile-title>
            <v-list-tile-title class="text-xs-center round2 blue--text py-3" style="height: 3.5em; cursor: pointer;" v-ripple>B</v-list-tile-title>
            <v-list-tile-title class="text-xs-center round2 success--text py-3" style="height: 3.5em; cursor: pointer;" v-ripple>A</v-list-tile-title>
            <v-list-tile-title class="text-xs-right round2 blue--text py-3 pr-3" style="margin-left: -1em; height: 3.5em; cursor: pointer;" v-ripple>B</v-list-tile-title>
          </v-list-tile>
          <v-divider></v-divider>
          <v-list-tile class="my-2">
            <v-list-tile-title>Guitar</v-list-tile-title>
            <v-list-tile-title class="text-xs-center round2 success--text py-3" style="height: 3.5em; cursor: pointer;" v-ripple>A</v-list-tile-title>
            <v-list-tile-title class="text-xs-center round2 success--text py-3" style="height: 3.5em; cursor: pointer;" v-ripple>A</v-list-tile-title>
            <v-list-tile-title class="text-xs-center round2 blue--text py-3" style="height: 3.5em; cursor: pointer;" v-ripple>B</v-list-tile-title>
            <v-list-tile-title class="text-xs-center round2 success--text py-3" style="height: 3.5em; cursor: pointer;" v-ripple>A</v-list-tile-title>
            <v-list-tile-title class="text-xs-right round2 success--text py-3 pr-3" style="margin-left: -1em; height: 3.5em; cursor: pointer;" v-ripple>A</v-list-tile-title>
          </v-list-tile>
        </v-list>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="css" scoped>
</style>
