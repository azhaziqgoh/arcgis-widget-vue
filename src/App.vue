<template>
  <div id="app">
    <h1>ARCGIS Widget using vue</h1>
    <arcgis-map></arcgis-map>
  </div>
</template>

<script>
import ArcGISMap from './components/Map.vue'

export default {
  name: 'app',
  components: {
    'arcgis-map': ArcGISMap
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
