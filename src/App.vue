<template>
  <v-app id="app">
    <v-navigation-drawer class="transparent" width="250" height="100%" :mini-variant="mini"
      absolute app disable-resize-watcher disable-route-watcher floating hide-overlay permanent left stateless touchless
      update:mini-variant="">
      <v-layout column class="pa-1">
        <v-list-tile class="round2 mx-2 b--text"  avatar to="/">
          <v-avatar size="70" class="anim-down" tile style="margin-left: -1em;margin-top: -1em; margin-right: -1.2em;">
            <img v-if="!theme" src="./assets/logo-light.png">
            <img v-else src="./assets/logo-dark.png">
          </v-avatar>
          <v-list-tile-content>
            <h1 class="anim-right b--text mb-3" style="font-size: 2.5em;font-family: open-sans;">chool</h1>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-ripple class="anim-zoom item round2 ma-2 b--text" avatar to="/student">
          <v-icon large left class="b--text">person</v-icon>
          <v-list-tile-content>
            <b style="font-size: 1.1em;" class="b--text px-2">Student</b>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-ripple class="anim-zoom item round2 ma-2 b--text" avatar to="/">
          <v-icon large left class="b--text">dashboard</v-icon>
          <v-list-tile-content>
            <b style="font-size: 1.1em;" class="b--text px-2">Classes</b>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-ripple class="anim-zoom item round2 ma-2 b--text" avatar to="/todo">
          <v-badge top left overlap color="red" transition="fab-transition"
            mode="" origin="" :value="badge">
             <b slot="badge">{{ badge }}</b> <!--slot can be any component-->
             <v-icon large left class="b--text">done_all</v-icon>
          </v-badge>
          <v-list-tile-content>
            <b style="font-size: 1.1em;" class="b--text px-2">Todo</b>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-ripple class="anim-zoom item round2 ma-2 b--text" avatar to="/calendar">
          <v-badge top left overlap color="red" transition="fab-transition"
            mode="" origin="" :value="badge">
             <b slot="badge">{{ badge }}</b> <!--slot can be any component-->
             <v-icon large left class="b--text">calendar_today</v-icon>
          </v-badge>
          <v-list-tile-content>
            <b style="font-size: 1.1em;" class="b--text px-2">Calendar</b>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-ripple class="anim-zoom item round2 ma-2 b--text" avatar to="/grades">
          <v-icon large left class="b--text">text_format</v-icon>
          <v-list-tile-content>
            <b style="font-size: 1.1em;" class="b--text px-2">Grades</b>
          </v-list-tile-content>
        </v-list-tile>
        <v-layout column style="position: fixed; bottom: 5em;">
          <v-btn fab flat class="anim-zoom item b--text" @click="theme = !theme, theme ? ($vuetify.theme.b = '#333', $vuetify.theme.t = '#eee') :  ($vuetify.theme.b = '#fff',  $vuetify.theme.t = '#333')"><v-icon large>{{ theme ? 'brightness_3' : 'brightness_7' }}</v-icon></v-btn>
          <v-btn fab flat class="anim-zoom item b--text" @click="mini = !mini"><v-icon large>{{ mini ? 'keyboard_arrow_right' : 'keyboard_arrow_left' }}</v-icon></v-btn>
          <v-list-tile style="position: fixed; bottom: 0; max-width: 70%;" v-ripple class="anim-zoom item round2 ma-2 b--text" avatar to="/settings">
            <v-icon large left class="b--text">settings</v-icon>
            <v-list-tile-content>
              <b style="font-size: 1.1em;" class="b--text px-2">Settings</b>
            </v-list-tile-content>
          </v-list-tile>
        </v-layout>
      </v-layout>
    </v-navigation-drawer>
    <v-content><router-view class="b round2 scroll-y"/></v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      mini: false,
      theme: false,
      badge: 2
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Comfortaa');
* {
  font-family: 'Comfortaa';
}
html, body {
  overflow: hidden !important;
  background: black;
  border-radius: 2em !important;
  overflow: hidden !important;
  height: 100%;
  width: 100%;
  padding-top: constant(safe-area-inset-top);
  padding-bottom: constant(safe-area-inset-top);
  padding-left: constant(safe-area-inset-left);
  padding-right: constant(safe-area-inset-right);
}
#app {
  height: 100%;
  width: 100%;
  overflow: hidden !important;
  background: #FFC107;
}
/* #app::before {
  content: "";
  top: 0;
  left: 0;
  width: 280px;
  height: 100%;
  position: absolute;
  animation: bgMove 60s ease-in-out infinite forwards;
  filter: brightness(50%);
} */
@keyframes bgMove {
 from {
   background: url('https://images.unsplash.com/photo-1533982388521-71c3e7163a0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2017&q=80') 0% 100% no-repeat;
   background-size: cover;
 }
 50% {
   background: url('https://images.unsplash.com/photo-1533982388521-71c3e7163a0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2017&q=80') 100% 100% no-repeat;
   background-size: cover;
 }
 to {
   background: url('https://images.unsplash.com/photo-1533982388521-71c3e7163a0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2017&q=80') 0% 100% no-repeat;
   background-size: cover;
 }
}
.round1 {
  border-radius: 1em;
}
.round2 {
  border-radius: 2em;
}
.shadow {
  box-shadow: 0 0 2em -0.5em grey;
}
::-webkit-scrollbar{
  width: 0;
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.v-list__tile {
  padding: 0 10px;
}
.scroll-y {
  height: 100%;
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-transform: translateZ(0);
  overflow-y: scroll; /* has to be scroll, not auto */
  -webkit-overflow-scrolling: touch;
}

@keyframes bounceInDown {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0);
            transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 15px, 0);
            transform: translate3d(0, 15px, 0);
  }

  75% {
    opacity: 1;
    -webkit-transform: translate3d(0, -10px, 0);
            transform: translate3d(0, -10px, 0);
  }

  90% {
    opacity: 1;
    -webkit-transform: translate3d(0, 5px, 0);
            transform: translate3d(0, 5px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
            transform: none;
  }
}
.anim-down {
  opacity: 0;
  animation: bounceInDown 1s 0.5s linear 1 forwards;
}
@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }
  50% {
    opacity: 1;
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.anim-zoom {
  opacity: 0;
  animation: zoomIn .5s ease 1 forwards;
}
@keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
            transform: none;
  }
}

.anim-right {
  opacity: 0;
  animation: fadeInRight 1s 0.5s ease 1 forwards;
}
.item:nth-of-type(1){
  animation-delay: 0.1s;
}
.item:nth-of-type(2){
  animation-delay: 0.2s;
}
.item:nth-of-type(3){
  animation-delay: 0.3s;
}
.item:nth-of-type(4){
  animation-delay: 0.4s;
}
.item:nth-of-type(5){
  animation-delay: 0.5s;
}
.item:nth-of-type(6){
  animation-delay: 0.6s;
}
.item:nth-of-type(7){
  animation-delay: 0.7s;
}
.item:nth-of-type(8){
  animation-delay: 0.8s;
}
.item:nth-of-type(9){
  animation-delay: 0.9s;
}
</style>
