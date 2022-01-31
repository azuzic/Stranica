<template>
  <div class="uploading inline-flex items-center px-4 py-2" disabled="">
    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'LoadingPrompt',
  props: {
    msg: String,
  }
}
</script>

<style lang="scss" scoped>
.uploading {
  z-index: 150;
  background-color: rgba(35,38,67,.5);
  box-shadow: 0px 0px 8px -2px #0b1622b9;
  padding: 4px 16px 4px 16px;
  border-radius: 48px;
  color: #EDF1F5;
}
</style>
