<template>
  <q-page class="verticle flex flex-center" style="padding-left: 150px; padding-right: 150px;">
      <div class="text-h4">A custom web based music player</div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

export default defineComponent({
  name: 'IndexPage'
})
</script>
