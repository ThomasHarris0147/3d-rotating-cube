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
  <TresMesh cast-shadow ref="triangleRef" :position="[3, -1, 0]">
    <TresSphereGeometry />
    <TresMeshToonMaterial color="#FBB03B" />
  </TresMesh>
</template>
