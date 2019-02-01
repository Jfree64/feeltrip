import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/src/css/mapbox-gl.css';

class LiveMap extends Component {

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiamZyZWU2NCIsImEiOiJjajZ3YWNuM3oxYWh0MzhvM3RxcDJlOXB5In0.1nebqO9VfnJmK4DpLWRFKg';
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/jfree64/cjr826tpb071j2smdocv4wuul',
      center: [-96.951969,38.275618],
      zoom: 4.26
    });

    this.map.on('load', () => {

          this.map.addLayer({
       id: "terrain-data",
       lineMetrics: true,
       type: "line",
       source: {
           type: 'vector',
           url: 'mapbox://jfree64.6c9mjnun'
       },
       "source-layer": "line",
       paint: {
           "line-color": "#FF2A93",
           "line-width": 3,

       },
       "layout": {
           "line-join": "round",
           "line-cap": "round"
       }
   });

      });

}

  componentWillUnmount() {
    this.map.remove();
  }



  render() {
    const style  = {
      position: 'relative',
      minHeight: '90vh',
      width: '100%'
    };

    return (
      <div style={style} className = 'map' ref={el => this.mapContainer = el} />
    )
  }
}

export default LiveMap;
