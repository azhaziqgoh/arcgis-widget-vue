<template>
  <div class="arcgis-map">
    <div ref="map" class="map"></div>
  </div>
</template>

<script>
import { loadModules } from "esri-loader";
import CameraInfo from "./CameraInfo.vue";
import WidgetCreator from "../utils/esri-widget-element-creator.js";

export default {
  name: 'arcgis-smap',
  mounted: function () {
    loadModules([
      "esri/Map",
      "esri/views/SceneView",
      "esri/core/watchUtils",
      "vue"])
      .then(([EsriMap, SceneView, watchUtils, Vue]) => {
        
        const esriMap = new EsriMap({
          basemap: "hybrid",
          ground: "world-elevation"
        });

        const initialCamera = {
          position: [7.654, 45.919, 5184],
          tilt: 80,
          heading: 0
        };

        const view = new SceneView({
          container: this.$refs.map,
          map: esriMap,
          camera: initialCamera
        });

        window.mapView = view;
        
        view.when(function() {

          let esriWidget = WidgetCreator.generateElement(CameraInfo,{
            //By default the value of the props will used the same name with
            //prop name. Here is to specify otherwise
            props: {
              'camera': 'camera',
              'initialCamera': 'initialCamera'
            },
            events: {},
            classes: [],
            id: undefined,
            styles: {}
          });
          
          const info = new Vue({
            el: esriWidget,
            data: {
              camera: view.camera,
              initialCamera: initialCamera
            },
            components: {
              'camera-info': CameraInfo
            }
          });
          view.ui.add(info.$el, "top-right");
          watchUtils.watch(view, "camera", function() {
            info.camera = view.camera;
          });
        });
      })
      .catch(err => {
        // handle any script or module loading errors
        console.error(err);
      });
  },
  // components: {
  //   'camera-info': CameraInfo
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url('https://js.arcgis.com/4.12/esri/themes/light/main.css');
.map {
  height: 500px;
}
</style>
