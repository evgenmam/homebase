import { useEffect, useState } from 'react'
import { fetchCityPointData } from '../api/fetchCityPointData'
import { addPropertiesToCityJSON } from '../data/addPropertiesToCityJSON'
import { useStore } from '../store/store'

function useFetchHexData(zillowData) {
  const addToLoadingStack = useStore((state) => state.addToLoadingStack)
  const removeFromLoadingStack = useStore((state) => state.removeFromLoadingStack)
  const [hexData, setHexData] = useState({
    type: 'FeatureCollection',
    features: [],
  })

  useEffect(() => {
    if (zillowData === null) return
    addToLoadingStack('fetchingCityPointData')

    fetchCityPointData().then((coordinates) => {
      const hexDataUpdate = addPropertiesToCityJSON(coordinates, zillowData)
      setHexData(hexDataUpdate)
      
      removeFromLoadingStack('fetchingCityPointData')
    })
  }, [zillowData])

  return hexData
}

export default useFetchHexData
