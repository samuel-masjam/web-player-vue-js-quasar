<template>
  <q-layout style="background-image: url('https://images.pexels.com/photos/130991/pexels-photo-130991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
    background-size: cover;"
    view="lHh Lpr lFf"
  >
    <q-header  class="transparent">
      <q-toolbar class="q-gutter-md q-pa-md" style="background-color: rgba(0, 0, 0, 0.5); padding: 0px 150px 0px 150px;">
        <q-toolbar-title>Web Player</q-toolbar-title>
        <q-btn
          no-caps outline
          color="white"
          href="https://www.spotify.com/au/signup"
          label="Sign Up"
        />
        <q-btn
          no-caps outline
          color="white"
          :href="`${loginUrl}`"
          label="Login"
        />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const auth_endpoint = 'https://accounts.spotify.com/authorize'
    const client_id = 'f951aad967c440aca3c036b592860e24';
    const redirect_uri = 'http://localhost:9000'
    const scopes = [
      'user-read-currently-playing',
      'user-read-recently-played',
      'user-read-playback-state',
      'user-top-read',
      'user-modify-playback-state'
    ]
    const loginUrl = `${auth_endpoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`
    return { loginUrl }
  }
})
</script>
