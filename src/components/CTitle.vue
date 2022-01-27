<template>
  <div class="title">
    <div class="title-bg pt-3 pb-3 text-center">
      <h1 class="title-msg text-center">{{ msg1 }} <br />{{ msg2 }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "CTitle",
  props: {
    msg1: String,
    msg2: String,
  },
};
</script>

<style scoped lang="scss">
.title {
  width: 90%;
}
.title-bg {
  background: var(--FluorescentRed__OffBlack);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}

.title-msg {
  font-family: "Lora", serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  color: var(--BalticSea__Lead);
}
</style>
