<script setup>
/* eslint no-use-before-define: 0 */
const props = defineProps({
  color: { type: [String, null], required: true },
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  depth: { type: Number, required: true },
  position: { type: Array, required: true }
})
</script>
<template>
  <TresMesh :position="props.position" cast-shadow>
    <TresBoxGeometry :args="[props.width, props.height, props.depth]" />
    <TresMeshToonMaterial v-bind:color="props.color" />
  </TresMesh>
</template>
<style></style>
