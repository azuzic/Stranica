<template>
  <div>
    <div class="button-bg text-center pt-3 pb-3 pl-9 pr-9">
      <button class="button-text" type="button" @click="btnClickHandler">
        <p>{{ btn }}</p>
      </button>
    </div>
    <div class="button-bg2">
    </div>
  </div>
</template>

<script>
export default {
  name: "CButtonSingle",
  props: {
    btn: String,
    btnClickHandler: Function,
  },
};
</script>

<style scoped lang="scss">
.button-bg {
  width: 90vw;
  background: var(--BalticSea__EerieBlack);
  box-shadow: 0px 4px 4px var(--Transparent25__Transparent75);
  border-radius: 16px;
}

.button-bg2 {
  position: relative;
  width: 90vw;
  height: 51px;
  margin-bottom: -51px;
  z-index: -21;
  bottom: 51px;
  background: var(--Snow__DarkToneInk);
  border-radius: 16px;
}

.button-text {
  width: 100%;
  font-family: "Lora", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 6.5vw;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
}

.button-text p {
  width: 100%;
  align-items: center;
  text-align: center;
  color: var(--Fresco__KinglyCloud);
}
</style>
