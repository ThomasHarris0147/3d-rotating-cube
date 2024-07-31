<script lang="ts" setup>
import { useLoop } from '@tresjs/core'
import { shallowRef, ref } from 'vue'
const { onBeforeRender } = useLoop()
const donutRef = shallowRef()
onBeforeRender(({ delta, elapsed }) => {
  if (donutRef.value) {
    donutRef.value.rotation.y += delta
    donutRef.value.rotation.z = elapsed * 0.1
    donutRef.value.rotation.x = elapsed * 0.2
  }
})
</script>
<template>
  <TresMesh ref="donutRef" cast-shadow>
    <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
    <TresMeshToonMaterial color="orange" />
  </TresMesh>
</template>
