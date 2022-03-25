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

<style scoped>
.full-screen:active {
  position: absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
  position: fixed !important;
  z-index: 50000000;
  width: 90% !important;
  border-radius: 16px;
  box-shadow: 0px 0px 8px hsl(0, 0%, 0%, 75%);
}
</style>