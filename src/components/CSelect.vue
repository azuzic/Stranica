<template>
  <div class="custom-select">
    <div
      @click="open = !open"
      :class="open ? 'CSelect-max' : 'CSelect-min'"
    ></div>
    <div
      v-if="options.includes(selected)"
      class="selected"
      @click="open = !open"
    >
      {{ selected }}
    </div>
    <div
      v-if="!options.includes(selected)"
      class="selected"
      @click="open = !open"
    >
      {{ options[0] }}
    </div>
    <img
      v-if="store.darkToggle"
      class="float-right"
      :class="open ? 'spin-pos' : 'spin-pos2'"
      src="@/assets/dropdown_icon.svg"
    />
    <img
      v-if="!store.darkToggle"
      class="float-right"
      :class="open ? 'spin-pos' : 'spin-pos2'"
      src="@/assets/dropdown_icon_dark.svg"
    />

    <div
      class="items"
      :class="
        !open
          ? 'selectHide'
          : 'selectShow'
      "
    >
      <div
        transition="thing"
        v-for="(option, i) of options"
        :key="i"
        :class="option == selected ? 'isSelected' : ''"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
      >
        <div>
          {{ option }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "CSelect",
  props: {
    options: Array,
    default: String,
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
      store,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
};
</script>

<style scoped>
.selected {
  background: var(--Transparent__ExtraordinaryAbundanceOfTinge);
  outline: none;
  width: 100%;
  height: 40px;
  border: 2px solid var(--StretchLimo__ChromaphobicBlack) !important;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--DwarfFortress__Lead) !important;
  display: flex;
  align-items: center;
  padding-left: 4px;
}

.custom-select {
  background: var(--Snow__DarkToneInk);
  box-shadow: 0px 0px 4px var(--Transparent25__Transparent75);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  overflow: hidden;
  width: 100%;
  z-index: 1;
}

.items {
  position: absolute;
  width: calc(100% - 2rem);
  z-index: 1000;
  transform-origin: 50% 0%;
  max-height: 170px;
  overflow-y: scroll;
  box-shadow: 0px 0px 4px var(--Transparent25__Transparent75);
}

.items div {
  background: var(--DustySky__Black);
}

.items div div {
  outline: none;
  width: 100%;
  height: 40px !important;
  background: var(--Transparent__ExtraordinaryAbundanceOfTinge);
  border: 2px solid var(--StretchLimo__ChromaphobicBlack);
  color: var(--BalticSea__Squant);
  cursor: pointer;
  user-select: none;
  margin-top: -3px;
  display: flex;
  align-items: center;
  padding-left: 4px;
}

.isSelected {
  background-color: var(--FluorescentRed__FrenchWine) !important;
  color: var(--DwarfFortress__Lead) !important;
}
.isSelected div {
  color: var(--DwarfFortress__Lead) !important;
}

.selectHide {
  transition: 0.25s;
  transform: scaleY(0);
}
.selectShow {
  transition: 0.25s;
  transform: scaleY(1);
}
.spin-pos {
  transition: 0.25s;
  transform: scaleY(-1);
  float: right;
  margin-top: -28px;
  margin-right: 12px;
  position: relative;
  z-index: 0;
  cursor: pointer;
  height: 18px;
}
.spin-pos2 {
  fill: var(--FluorescentRed__FrenchWine);
  transition: 0.25s;
  transform: scaleY(1);
  float: right;
  margin-top: -26px;
  margin-right: 12px;
  position: relative;
  z-index: 0;
  cursor: pointer;
  height: 18px;
}
.CSelect-max {
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: rgba(128, 255, 0, 0);
  z-index: 800;
  height: 100%;
  width: 100%;
}
.CSelect-min {
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: rgba(128, 255, 0, 0);
  z-index: 800;
  height: 0%;
  width: 0%;
  pointer-events: none;
}
</style>
