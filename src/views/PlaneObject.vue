<script></script>
<template>
  <TresMesh :position="[0, -2, 0]" :rotation="[-Math.PI / 2, 0, 0]" receive-shadow>
    <TresPlaneGeometry :args="[10, 10, 10, 10]" />
    <TresMeshStandardMaterial color="#f7f7f7" />
  </TresMesh>
</template>
