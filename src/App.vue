<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref, type Ref } from 'vue'
// @ts-ignore
import Render3DCanvas from './components/Render3DCanvas.vue'
import { readFileReturnText } from './helper/GeneralHelpers'
const displayBackgroundTextAppVue: Ref<string> = ref('')
onMounted(async () => {
  const appVueContents = await readFileReturnText('./App.vue')
  displayBackgroundTextAppVue.value = appVueContents
})
</script>

<template>
  <div id="content">
    <div id="background">
      <pre>{{ displayBackgroundTextAppVue }}</pre>
    </div>
    <header>
      <Render3DCanvas />
    </header>
  </div>
</template>
<style>
header {
  height: 50%;
  width: 50%;
  position: absolute;
  /* border: 1px solid red; */
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
/* body {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(222, 222, 237, 1) 75%,
    rgba(196, 208, 210, 1) 100%
  );
} */
</style>
