<template>
  <app-links/>
  <sing-log-in/>
  <router-view/>
</template>

<script>
import AppLinks from './components/AppLinks.vue'
import SingLogIn from './components/SingLogIn.vue'

export default {
  components: {
    AppLinks,
    SingLogIn
  }
}
</script>