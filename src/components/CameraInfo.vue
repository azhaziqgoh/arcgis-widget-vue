<template>
  <div>
    <h2>Camera Details</h2>
    <p><strong>Heading</strong>: {{ camera.heading.toFixed(3) }}</p>
    <p><strong>Tilt</strong>: {{ camera.heading.toFixed(3) }}</p>
    <p><strong>Latitude</strong>: {{ camera.heading.toFixed(3) }}</p>
    <p><strong>Longitude</strong>: {{ camera.heading.toFixed(3) }}</p>
    <button @click="onClickReset">Reset Camera</button>
  </div>
</template>

<script>
export default {
  name: 'camera-info',
  props: {
    'camera': {
      type: Object
    },
    'initialCamera': {
      type: Object
    }
  },
  mounted(){},
  methods: {
    onClickReset: function(){
      let camera = this.$props.camera.clone();
      camera.set(this.$props.initialCamera);
      window.mapView.goTo(camera);
    }
  }
}
</script>