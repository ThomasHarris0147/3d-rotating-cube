<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref, type Ref } from 'vue'
// @ts-ignore
import Render3DCanvas from './components/Render3DCanvas.vue'
// @ts-ignore
import { readFileReturnText } from './helper/GeneralHelpers'
// @ts-ignore
import VueWriterBackground from './components/VueWriterBackground.vue'
const backgroundTextAppVue: Ref<string> = ref('')
onMounted(async () => {
  backgroundTextAppVue.value = await readFileReturnText('./App.vue')
  console.log(backgroundTextAppVue.value)
})
const cubeComponent = ref(null)
const seconds = 2
function spinCube() {
  // @ts-ignore
  cubeComponent.value!.onViewSpinClicked()
}
function growCube() {
  // @ts-ignore
  cubeComponent.value!.onViewGrowClicked()
}
function shrinkCube() {
  // @ts-ignore
  cubeComponent.value!.onViewShrinkClicked()
}
setInterval(() => {
  spinCube()
}, seconds * 1000)
</script>

<template>
  <div id="content">
    <div id="background">
      <VueWriterBackground :text="backgroundTextAppVue" />
    </div>
    <header>
      <Render3DCanvas ref="cubeComponent" />
    </header>
    <!-- <button @click="spinCube">Spin Cube</button> -->
  </div>
</template>
<style>
header {
  height: 50%;
  width: 50%;
  position: absolute;
  box-sizing: border-box;
  right: 50vh;
  top: 0;
  display: flex;
  justify-content: center;
}
#container {
  position: relative;
}
#background {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  overflow: hidden;
}
body {
  font-family: 'Noto Sans', sans-serif;
  margin: 0 auto;
  height: 100%;
  width: 100%;
}
</style>
