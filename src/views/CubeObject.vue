<script setup lang="ts">
import { Levioso, Html } from '@tresjs/cientos'
// @ts-ignore
import { BoxObjectHandler } from '@/components/handler/BoxObjectHandler'
// @ts-ignore
import BoxObject from '@/components/BoxObject.vue'
import { ref, type Ref } from 'vue'
// @ts-ignore
import gsap from 'gsap'
// @ts-ignore
import type { BoxObjectInterface } from '@/components/interfaces/BoxObjectInterface'
import { Group, Object3D } from 'three'
import { Vector3 } from 'three'
// @ts-ignore
import { rotateAboutPoint, degToRadians } from '@/helper/ThreejsTools'
// @ts-ignore
import { randomIntFromInterval } from '@/helper/GeneralHelpers'
const BoxObjects = new BoxObjectHandler()
const ReferencedEntireBox: Ref<BoxObjectInterface[]> = ref(BoxObjects.getBoxObjects())
const ReferencedTopFace: Ref<BoxObjectInterface[]> = ref(BoxObjects.getTopFace())
const ReferencedTheRest: Ref<BoxObjectInterface[]> = ref(BoxObjects.getTheRest())
const closeUp = ref(false)
const entireBox: Ref<Group | null> = ref(null)
const topFace: Ref<Group | null> = ref(null)
const onViewGrowClicked = () => {
  gsap.to(entireBox.value, {
    duration: 0.5,
    onComplete: () => {
      for (let i = 0; i < ReferencedEntireBox.value.length; i++) {
        ReferencedEntireBox.value[i].height = 1
        ReferencedEntireBox.value[i].width = 1
        ReferencedEntireBox.value[i].depth = 1
      }
    },
    onUpdate: () => {
      for (let i = 0; i < ReferencedEntireBox.value.length; i++) {
        if (ReferencedEntireBox.value[i].height >= 1) {
          ReferencedEntireBox.value[i].height = 1
          ReferencedEntireBox.value[i].width = 1
          ReferencedEntireBox.value[i].depth = 1
        }
        ReferencedEntireBox.value[i].height += 0.1
        ReferencedEntireBox.value[i].width += 0.1
        ReferencedEntireBox.value[i].depth += 0.1
      }
    }
  })
}
const onViewShrinkClicked = () => {
  gsap.to(entireBox.value, {
    duration: 0.5,
    onComplete: () => {
      for (let i = 0; i < ReferencedEntireBox.value.length; i++) {
        ReferencedEntireBox.value[i].height = 0.5
        ReferencedEntireBox.value[i].width = 0.5
        ReferencedEntireBox.value[i].depth = 0.5
      }
    },
    onUpdate: () => {
      for (let i = 0; i < ReferencedEntireBox.value.length; i++) {
        if (ReferencedEntireBox.value[i].height <= 0.5) {
          ReferencedEntireBox.value[i].height = 0.5
          ReferencedEntireBox.value[i].width = 0.5
          ReferencedEntireBox.value[i].depth = 0.5
          continue
        }
        ReferencedEntireBox.value[i].height -= 0.1
        ReferencedEntireBox.value[i].width -= 0.1
        ReferencedEntireBox.value[i].depth -= 0.1
      }
    }
  })
}
const onViewSpinClicked = () => {
  const degrees = 10
  var degrees_rotated = 0
  gsap.to(entireBox.value, {
    duration: 1,
    onUpdate: () => {
      if (degrees_rotated == 180) {
        return
      }
      const theta = degToRadians(degrees)
      console.log('theta: ', theta)
      const pivotPoint = new Vector3(1, 1, 1)
      const pivotAxis = new Vector3(0, 1, 0)
      if (entireBox.value === null) {
        throw new Error('topFace is null')
      }
      const object: Object3D = topFace.value!
      rotateAboutPoint(object, pivotPoint, pivotAxis, theta)
      degrees_rotated += degrees
    },
    onComplete: () => {
      const theta_choices = [90, -90, 180]
      const random_theta = randomIntFromInterval(0, 2)
      const theta = degToRadians(theta_choices[random_theta])
      console.log('theta: ', theta)
      const pivotPoint = new Vector3(1, 1, 1)
      const pivotAxis = new Vector3(0, 0, 1)
      if (entireBox.value === null) {
        throw new Error('topFace is null')
      }
      const object: Object3D = entireBox.value!
      rotateAboutPoint(object, pivotPoint, pivotAxis, theta)
    }
  })
}
</script>
<template>
  <Html>
    <button @click="onViewGrowClicked">grow</button>
    <button @click="onViewShrinkClicked">shrink</button>
    <button @click="onViewSpinClicked">spin</button>
  </Html>
  <Levioso :speed="closeUp ? 0 : 1" :rotationFactor="closeUp ? 0 : 1">
    <TresGroup ref="entireBox">
      <TresGroup ref="topFace">
        <BoxObject
          v-for="square in ReferencedTopFace"
          :key="square.id"
          :color="square.color"
          :position="square.position"
          :width="square.width"
          :height="square.height"
          :depth="square.depth"
        />
      </TresGroup>
      <BoxObject
        v-for="square in ReferencedTheRest"
        :key="square.id"
        :color="square.color"
        :position="square.position"
        :width="square.width"
        :height="square.height"
        :depth="square.depth"
      />
    </TresGroup>
  </Levioso>
</template>
