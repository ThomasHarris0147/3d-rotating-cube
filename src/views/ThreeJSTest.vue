<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import DonutObject from './DonutObject.vue'
import TriangleObject from './TriangleObject.vue'
import SphereObject from './SphereObject.vue'
import PlaneObject from './PlaneObject.vue'
import { OrbitControls } from '@tresjs/cientos'
import { ref } from 'vue'
const camera_position = ref([9, 9, 9])
</script>

<template>
  <div class="halfscreen-left">
    <TresCanvas clear-color="#82DBC5" shadows>
      <TresPerspectiveCamera :position="camera_position" :look-at="[0, 0, 0]" />
      <OrbitControls />
      <DonutObject />
      <SphereObject />
      <TriangleObject />
      <PlaneObject />
      <TresDirectionalLight :position="[0, 2, 1]" :intensity="1.5" cast-shadow />
    </TresCanvas>
  </div>
</template>
<style>
.halfscreen-left {
  position: absolute;
  top: 0;
  left: 50%;
  bottom: 0;
  width: 50%;
}
</style>
