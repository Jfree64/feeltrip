import React, { useState, Component } from 'react';
import mapboxgl from 'mapbox-gl'
import polyline from '@mapbox/polyline'
import 'mapbox-gl/src/css/mapbox-gl.css';
import axios from 'axios'
import feeltrip from './feeltrip.json'

class LiveMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: []
    }
  }

  componentDidMount() {
  //   axios.get('https://www.strava.com/api/v3/athletes/13604830/activities?after=1558760400&per_page=100', {
  //     headers: { Authorization: "Bearer 7d4f8177c26a33c4fb5210a421256c920a1b97ee"}})
  // .then((response) => {
  //   // handle success
  //   const routes = response.data.map(route => polyline.toGeoJSON(route.map.summary_polyline));
  //   this.setState({routes: routes})
  //   console.log(routes)
  // })
  // .catch((error) => {
  //   // handle error
  //   console.log(error);
  // })
  // .finally(() => {
  //   // always executed
  // });

    mapboxgl.accessToken = 'pk.eyJ1IjoiamZyZWU2NCIsImEiOiJjajZ3YWNuM3oxYWh0MzhvM3RxcDJlOXB5In0.1nebqO9VfnJmK4DpLWRFKg';
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/jfree64/cjr826tpb071j2smdocv4wuul',
      center: [-96.951969,38.275618],
      zoom: 4.26
    });

    this.map.on('load', () => {
      //add the expected route
      this.map.addLayer({
       id: "planned-route",
       type: "line",
       source: {
         type: 'vector',
         url: 'mapbox://jfree64.6c9mjnun',
         lineMetrics: true
       },
       "source-layer": "line",
       paint: {
           "line-color": "white",
           "line-width": 3,

       },
       "layout": {
           "line-join": "round",
           "line-cap": "round"
       }
      });

       this.map.addLayer({
        id: "final-route",
        type: "line",
        source: {
          'type': 'geojson',
          'data': feeltrip,
          lineMetrics: true,
        },
        paint: {
            "line-color": "#FFF",
            "line-width": 3,
            'line-gradient': [
              'interpolate',
              ['linear'],
              ['line-progress'],
              0,
              '#3DD9FF',
              1,
              '#FF0F69'
            ]

        },
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        }
       });


      //ADD FIRST 30 RIDES
      // this.state.routes.forEach(route =>
      //   this.map.addLayer({
      //     id: `${route.coordinates[0]}`,
      //     type: "line",
      //     source: {
      //       type: "geojson",
      //       data: {
      //         type: "Feature",
      //         properties: {},
      //         geometry: route
      //       }
      //     },
      //     layout: {
      //     "line-join": "round",
      //     "line-cap": "round"
      //     },
      //     paint: {
      //     "line-color": "#3DD9FF",
      //     "line-width": 3
      //     }
      //   })
      //   )
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
