<template>
  <v-layout column class="ma-2 b round2 shadow text-xs-left">
    <v-img v-ripple gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0, .3), rgba(0,0,0,.3)"
    class="round2 mb-2" aspect-ratio="1.6"
    :src="payload.background"
    :lazy-src="payload.background" >
      <v-layout class="pa-2 white--text">
        <v-layout column class="ma-2">
          <h2>{{ payload.name }}</h2>
          <b>Period {{ payload.period }}</b>
        </v-layout>
        <v-spacer></v-spacer>
        <v-btn icon flat class="white--text"><v-icon>more_horiz</v-icon></v-btn>
      </v-layout>
      <v-layout style="position: absolute; bottom: 0;" class="ma-3 white--text">
        <b>{{ payload.teacher }}</b>
      </v-layout>
      <v-layout slot="placeholder" fill-height align-center justify-center>
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </v-layout>
    </v-img>
    <span class="t--text px-2 pb-2">
      <v-layout row>
        <v-btn icon flat color="primary"><v-icon>done_all</v-icon></v-btn>
        <v-btn icon flat color="primary"><v-icon>calendar_today</v-icon></v-btn>
        <v-spacer></v-spacer>
        <v-btn icon class="white--text"
        :color="payload.grade.substring(0,1) == 'A' ? 'green darken-1' : payload.grade.substring(0,1) == 'B' ? 'blue darken-1' : payload.grade.substring(0,1) == 'C' ? 'amber darken-1' : payload.grade.substring(0,1) == 'D' ? 'orange darken-1' : 'red darken-1'">
          <b>{{ payload.grade }}</b></v-btn>
      </v-layout>
    </span>
  </v-layout>
</template>

<script>
export default {
  props: ['payload']
}
</script>

<style lang="css" scoped>
</style>
