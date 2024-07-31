<script lang="ts" setup>
import { useLoop } from '@tresjs/core'
import { shallowRef, ref } from 'vue'
const { onBeforeRender } = useLoop()
const triangleRef = shallowRef()
onBeforeRender(({ delta, elapsed }) => {
  if (triangleRef.value) {
    triangleRef.value.rotation.y += delta
  }
})
</script>
<template>
  <TresMesh cast-shadow ref="triangleRef" :position="[-2, 2, 0]" :rotation="[0, Math.PI, 0]">
    <TresConeGeometry :args="[1, 1.5, 3]" />
    <TresMeshToonMaterial color="#82DBC5" />
  </TresMesh>
</template>
