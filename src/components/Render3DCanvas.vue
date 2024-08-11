<script setup lang="ts">
// @ts-ignore
import CubeObject from '../views/CubeObject.vue'
// import { OrbitControls } from '@tresjs/cientos'
import { TresCanvas } from '@tresjs/core'
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three'
import { ref } from 'vue'
const gl = {
  shadows: true,
  alpha: true,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping
}
const cubeComponent = ref(null)

function onViewGrowClicked(): void {
  // @ts-ignore
  cubeComponent.value!.onViewGrowClicked()
}
function onViewShrinkClicked(): void {
  // @ts-ignore
  cubeComponent.value!.onViewShrinkClicked()
}

function onViewSpinClicked(): void {
  // @ts-ignore
  cubeComponent.value!.onViewSpinClicked()
}

function onViewShrinkDissapear(): void {
  // @ts-ignore
  cubeComponent.value!.onViewShrinkDissapear()
}

function onViewGrowReappear(): void {
  // @ts-ignore
  cubeComponent.value!.onViewGrowReappear()
}

defineExpose({
  onViewGrowClicked,
  onViewShrinkClicked,
  onViewSpinClicked,
  onViewShrinkDissapear,
  onViewGrowReappear
})
</script>
<template>
  <TresCanvas class="add-border" v-bind="gl">
    <TresPerspectiveCamera :position="[5, 5, 5]" :look-at="[0, 0, 0]" />
    <!-- OrbitControls /-->
    <Suspense>
      <CubeObject ref="cubeComponent" />
    </Suspense>
    <TresAmbientLight :intensity="0.5" />
    <TresDirectionalLight :position="[0, 2, 4]" :intensity="0.5" cast-shadow />
  </TresCanvas>
</template>
<style>
/* .add-border {
  border: 1px solid red;
} */
</style>
