<template>
  <v-container fill-height fluid class="pa-2">
    <v-layout row wrap align-content-start>
      <v-flex class="anim-zoom item" xs12 sm12 md6 lg3 v-for="c in classes" :key="classes[c]">
        <class :payload="c"></class>
      </v-flex>
      <v-btn fab fixed bottom right class="anim-zoom" color="primary" @click="dialog = true"><v-icon large class="b--text">add</v-icon></v-btn>
    </v-layout>
    <v-dialog v-model="dialog" width="500" content-class="t--text pa-3 b round2">
      <v-layout column>
        <h2 class="mx-auto my-3">Join Class</h2>
        <span class="mx-4">Ask your teacher for the class code, then enter it here.</span>
        <v-text-field dark class="mx-4" clearable label="Class code"></v-text-field>
        <v-layout row>
          <v-btn @click="dialog=false" round flat color="t">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="dialog=false" round flat color="primary">Join</v-btn>
        </v-layout>
      </v-layout>
    </v-dialog>
  </v-container>
</template>

<script>
import Class from '@/components/class.vue'

export default {
  components: {
    Class
  },
  data () {
    return {
      dialog: false,
      classes: {
        0: {
          name: 'Spanish 2B',
          period: '1',
          teacher: 'Gabriela Selva',
          grade: 'A',
          background: 'https://previews.123rf.com/images/mironovak/mironovak1511/mironovak151100021/47406132-flag-of-spain-or-spanish-banner-on-rough-pattern-metal-background.jpg'
        },
        1: {
          name: 'AP Computer Science Principles',
          period: '2',
          teacher: 'Fedor Menchukov',
          grade: 'C+',
          background: 'https://aits.org/wp-content/uploads/2018/09/bluechip780.jpg'
        },
        2: {
          name: 'English 10B',
          period: '3',
          teacher: 'Aishling McGinty',
          grade: 'A-',
          background: 'http://www.riviera-press.fr/sites/default/files/Y4P32I1G1K_0.jpg'
        },
        3: {
          name: 'AP AB Calculus B',
          period: '4',
          teacher: 'Ms. Zussman',
          grade: 'B+',
          background: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX15193776.jpg'
        }
      }
    }
  }
}
</script>
