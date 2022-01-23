<template>
  <div class="div-type">
    <input type="checkbox" class="regular-checkbox" @click="$emit('selected', !checkbox)" v-model="checkbox" />
    <p>CROSS</p>
  </div>
</template>

<script>
export default {
  name: 'CheckBox',
  data() {
    return {
      checkbox: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.div-type {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
  & input {
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 100%;
  }
  & p {
    color: #fff;
    margin-left: 8px;
  }
}
.regular-checkbox {
	-webkit-appearance: none;
	box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);
	padding: 9px;
	border-radius: 3px;
	display: inline-block;
	position: relative;
}
.regular-checkbox:checked:after {
	content: '\2714';
	font-size: 14px;
	position: absolute;
	top: 0px;
	left: 3px;
	color: white;
}
</style>
