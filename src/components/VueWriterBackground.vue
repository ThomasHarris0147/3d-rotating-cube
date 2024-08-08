<script setup lang="ts">
import { computed } from 'vue'

// @ts-ignore
const props = defineProps({
  text: { type: String, required: true }
})
var refText = computed(() => {
  var returnText = props.text
  for (let index = 0; index < 20; index++) {
    if (index == 11) {
      returnText += 'Fun Fact! This background is the source code of this website!'
    }
    returnText += props.text
  }
  return returnText
})
</script>
<template>
  <p>{{ refText }}</p>
</template>
<style scoped>
p {
  text-align: justify;
  opacity: 0.1;
  font-size: 2vh;
}
</style>
