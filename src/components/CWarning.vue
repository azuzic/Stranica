<template>
  <div role="alert">
    <div class="CWarning-border p-2">
      <div class="flex CWarning-flex py-1">
        <img v-if="store.toggleDark" class="img-warning mr-2" src="@/assets/warning_icon.svg">
        <img v-if="!store.toggleDark" class="img-warning mr-2" src="@/assets/warning_icon_dark.svg">
        <p class="CWarning-bg text-center CWarning">{{msg1}}</p>
      </div>
      <p class="text-center CWarning-msg mt-2 mb-1">{{ msg2 }}</p>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "CWarning",
  props: {
    msg1: String,
    msg2: String,
  },
  data() {
    return {
      store
    }
  }
};
</script>
<style>
.CWarning-bg {
  font-weight: bold;
  font-size: 24px;
}
.CWarning-border {
  border-width: 3px;
  border-radius: 8px;
  border-style: dashed;
  border-color: var(--VivaldiRed__FrenchWine);
  background-color: var(--Snow__DarkToneInk);
}
.img-warning {
  height: 25px;
}
.CWarning-flex {
  align-items: center;
  text-align: center;
  justify-content: center;
}
.CWarning-msg {
  color: var(--VivaldiRed__FrenchWine);
}
</style>