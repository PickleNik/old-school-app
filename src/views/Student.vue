<template>
  <v-container fill-height fluid class="pa-0 t--text">
    <v-layout column>
      <v-layout row class="pa-3">
        <v-avatar size="150" class="primary ma-3"></v-avatar>
        <v-layout column class="mt-4 ml-3">
          <h1>Nikita Krupin </h1><span>237081</span>
          <span>Junior</span>
          <br>
          <span>GPA: 3.14</span>
        </v-layout>
        <v-btn fab flat color="primary"><v-icon>more_vert</v-icon></v-btn>
      </v-layout>
      <v-layout row class="ma-3">
        <v-flex md6>
          <v-sparkline
            :value="value"
            :gradient="['#f72047', '#ffd200', '#1feaea']"
            :smooth="10"
            :padding="0"
            line-width="2"
            stroke-linecap="round"
            gradient-direction="bottom"
            auto-draw
          ></v-sparkline>
          <h1>Grades</h1>
        </v-flex>
        <v-flex md6>
          <h1>Calendar</h1>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
