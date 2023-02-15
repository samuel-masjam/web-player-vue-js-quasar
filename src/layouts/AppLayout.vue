<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->
    <q-footer  class="transparent">
      <q-toolbar class="bg-grey-9 flex flex-center">
        <div>
          <q-btn flat round class="q-h1" icon="fast_rewind"></q-btn>
          <q-btn flat round class="q-h2" icon="play_circle"></q-btn>
          <q-btn flat round class="q-h2" icon="fast_forward"></q-btn>
        </div>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>asdf
import router from 'src/router';
import { defineComponent, ref } from 'vue'

export default {
  name: 'AppLayout',
  setup() {
    if(window.location.pathname.contains($router.access_token)) {
      router.push({name: homePade, path: '/app'})
    }  asdfasdf
  }
}
</script>
