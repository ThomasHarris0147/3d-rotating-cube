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
  <div id="container">
    <div class="background">
      <VueWriterBackground :text="backgroundTextAppVue" />
    </div>
    <div class="cube">
      <Render3DCanvas ref="cubeComponent" />
    </div>
    <button @click="growCube" class="button-85" role="button">Grow Cube</button>
    <button @click="shrinkCube" class="button-85" role="button">Shrink Cube</button>
  </div>
</template>
<style>
#container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  justify-content: center;
  margin: 0 auto;
  overflow: auto;
  /* border: 1px solid green; */
}
.cube {
  height: 50vh;
  width: 50vw;
  margin: 0 auto;
}
@media only screen and (max-width: 760px) {
  .cube {
    height: 50vh;
    width: 100vw;
    margin: 0 auto;
  }
}
.background {
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
/* .button-85 {
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-85:before {
  content: '';
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing-button-85 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

@keyframes glowing-button-85 {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.button-85:after {
  z-index: -1;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: #222;
  left: 0;
  top: 0;
  border-radius: 10px;
} */
</style>
