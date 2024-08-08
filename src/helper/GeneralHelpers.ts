// @ts-ignore
import path from 'path-browserify'

function randomIntFromInterval(min: number, max: number): number {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

async function readFileReturnText(filePath: string): Promise<string> {
  const response = await fetch(path.join(filePath))
  const text = await response.text()
  return text
}

// YES, I RESORTED TO THIS DUMB WAY OF DOING THINGS
function returnAppSourceCode(): string {
  return `<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import Render3DCanvas from './components/Render3DCanvas.vue'
import { readFileReturnText, returnAppSourceCode } from './helper/GeneralHelpers'
const displayBackgroundTextAppVue: Ref<string> = ref('')
const display2ndText: Ref<string> = ref(returnAppSourceCode())
onMounted(async () => {
  displayBackgroundTextAppVue.value = await readFileReturnText('./App.vue')
})
</script>

<template>
  <div id="content">
    <div id="background">
      <div style="float: left; left: 0; width: 50%">
        <pre>{{ display2ndText }}</pre>
      </div>
      <div style="overflow: hidden; right: 0; width: 50%">
        <pre>{{ displayBackgroundTextAppVue }}</pre>
      </div>
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
</style>`
}

export { returnAppSourceCode, randomIntFromInterval, readFileReturnText }
