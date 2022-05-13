import React, { useEffect, useState } from 'react'
import { useFetchCityBoundaries } from './DataAggregation'
import Map from './Map'
import { addPropertiesToCityJSON } from './DataConditioning'
import { GeoJsonLayer } from '@deck.gl/layers'
import { HexagonLayer } from '@deck.gl/aggregation-layers'
import { colorScale } from './Map'

export default function MapData({ stateChoices }) {
  const [geoJsonData, setGeoJsonData] = useState({
    type: 'FeatureCollection',
    name: 'tl_2019_02_place',
    crs: { type: 'name', properties: { name: 'urn:ogc:def:crs:EPSG::4269' } },
    features: [],
  })
  const [hexData, setHexData] = useState({
    type: 'FeatureCollection',
    name: 'tl_2019_02_place',
    crs: { type: 'name', properties: { name: 'urn:ogc:def:crs:EPSG::4269' } },
    features: [],
  })

  //Code for hexagon layer

  useEffect(() => {
    async function fetchData(stateChoices) {
      const cityRes = await fetch('../src/data/US_City_points_geojson.json')
      const cityPoints = await cityRes.json()
      let coordinates = []
      cityPoints.features.forEach((city) => {
        coordinates.push({
          COORDINATES: city.geometry.coordinates,
        })
      })
      // console.log(cityPoints)
      // //With zillow API key this would be fetched from their API and then conditioned the same way
      // let zillowRes = await fetch('../src/data/Zillow_Home_Value_By_City_May_2022.csv', {
      //   headers: {
      //     'content-type': 'text/csv;charset=UTF-8',
      //   },
      // })
      // const zillowData = await zillowRes.text()
      // let mergedData = await addPropertiesToCityJSON(cityPoints, zillowData)
      return coordinates
    }
    fetchData(stateChoices).then((d) => {
      setHexData(d)
    })
  }, [])
  let choice = 1
  const layers = []

  const colorRange = [
    [1, 152, 189],
    [73, 227, 206],
    [216, 254, 181],
    [254, 237, 177],
    [254, 173, 84],
    [209, 55, 78],
  ]

  if (choice === 1) {
    layers.push(
      new HexagonLayer({
        id: 'heatmap',
        colorRange,
        coverage: 1,
        data: hexData,
        elevationRange: [0, 3000],
        extruded: true,
        getPosition: (d) => d.COORDINATES,
        pickable: true,
        radius: 10000,
        upperPercentile: 100,
        transitions: {
          elevationScale: 3000,
        },
      })
    )
  }

  useEffect(() => {
    async function fetchData(stateChoices) {
      const cityBoundaries = await useFetchCityBoundaries(stateChoices)

      //With zillow API key this would be fetched from their API and then conditioned the same way
      let zillowRes = await fetch('../src/data/Zillow_Home_Value_By_City_May_2022.csv', {
        headers: {
          'content-type': 'text/csv;charset=UTF-8',
        },
      })
      const zillowData = await zillowRes.text()
      let mergedData = await addPropertiesToCityJSON(cityBoundaries, zillowData)
      return mergedData
    }

    fetchData(stateChoices).then((d) => {
      setGeoJsonData(d)
    })
  }, [])

  if (choice === 0) {
    layers.push(
      new GeoJsonLayer({
        id: 'geojson',
        data: geoJsonData,
        opacity: 0.8,
        stroked: false,
        filled: true,
        extruded: true,
        wireframe: true,
        getFillColor: (city) => colorScale(city.properties.houseAppreciation2yr),
        getLineColor: (city) => colorScale(city.properties.houseAppreciation2yr),
        getElevation: 0,
        //Code for elevation based on Zillow data
        // (city) => {
        //   if (city.properties.currentTypicalHousePrice === '$NaN') return 0
        //   return parseFloat(city.properties.currentTypicalHousePrice.replace(/[^0-9.-]+/g, '')) / 20
        // }
        pickable: true,
      })
    )
  }

  return (
    <div>
      <Map layers={layers} />
    </div>
  )
}
