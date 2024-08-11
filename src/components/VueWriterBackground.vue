<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

// @ts-ignore
const props = defineProps({
  text: { type: String, required: true }
})
var refText = computed(() => {
  var returnText = props.text
  for (let index = 0; index < 30; index++) {
    returnText += props.text
  }
  return returnText
})
</script>
<template>
  <p>
    <button @click="console.log('button clicked!')">
      Fun Fact! This background is the source code of this website!
    </button>
    {{ refText }}
    {{ refText }}
  </p>
</template>
<style scoped>
button {
  margin: 0;
  flex: 1;
  font-size: 2vh;
  opacity: 0.6;
  background: none;
  color: white;
  border: none;
  cursor: pointer;
  max-width: 3000px;
}
button:hover {
  background: green;
}
p {
  text-align: justify;
  opacity: 0.1;
  font-size: 2vh;
}
</style>
