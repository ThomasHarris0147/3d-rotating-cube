<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref, type Ref } from 'vue'
// @ts-ignore
import AboutMe from './views/AboutMe.vue'
// @ts-ignore
import Render3DCanvas from './components/Render3DCanvas.vue'
// @ts-ignore
import { readFileReturnText } from './helper/GeneralHelpers'
// @ts-ignore
import VueWriterBackground from './components/VueWriterBackground.vue'
const backgroundTextAppVue: Ref<string> = ref('')
const showAboutMe: Ref<boolean> = ref(false)
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
function dissapearCube() {
  // @ts-ignore
  cubeComponent.value!.onViewShrinkDissapear()
}
function reappearCube() {
  // @ts-ignore
  cubeComponent.value!.onViewGrowReappear()
  showAboutMe.value = false
}
function coolCubeEffect() {
  growCube()
  setTimeout(shrinkCube, 500)
  showAboutMe.value = false
}

function aboutMeEffect() {
  dissapearCube()
  showAboutMe.value = true
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
    <div class="button-container" v-if="!showAboutMe">
      <button @click="coolCubeEffect" class="glow-on-hover" role="button">Hello World!</button>
      <button @click="aboutMeEffect" class="glow-on-hover" role="button">About Me</button>
      <button @click="growCube" class="glow-on-hover" role="button" id="action">Grow Cube</button>
    </div>
    <div style="display: block" v-if="showAboutMe">
      <button
        @click="reappearCube"
        class="glow-on-hover"
        role="button"
        id="action"
        style="max-width: fit-content; bottom: 0; position: absolute"
      >
        Hello Cube
      </button>
      <AboutMe />
    </div>
  </div>
</template>
<style>
.button-container {
  display: flex;
  justify-self: space-between;
  padding: 10%;
}
button {
  margin: auto 20px;
  flex: 1;
  font-size: calc(20px + 2vw);
  background: none;
  color: white;
  border: none;
  cursor: pointer;
}
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
@media screen and (max-width: 515px) {
  .button-container {
    flex-direction: column;
    display: flex;
    gap: 20px;
  }
  button {
    max-width: 200px;
    margin: 0 auto;
    font-size-adjust: none;
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
.glow-on-hover {
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
}

.glow-on-hover:before {
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
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

.glow-on-hover:active:after {
  background: transparent;
}

.glow-on-hover:hover:before {
  opacity: 1;
}

.glow-on-hover:after {
  z-index: -1;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000000;
  opacity: 0;
  left: 0;
  top: 0;
  border-radius: 10px;
}

@keyframes glowing {
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
</style>
