/*
  GeoLocation API
  - https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
  - getCurrentPosition()
  - watchPosition()

*/

////////////////////////////
// getCurrentPosition(success(), err(), options{})
////////////////////////////
function curSuccess(pos) {
  console.log(pos)
  const coords = pos.coords // coords.accuracy = meter

  console.log(`Latitude: ${coords.latitude}`)
  console.log(`Longitude: ${coords.longitude}`)
  console.log(`Within: ${coords.accuracy} meters`)
}

function curError(err) {
  console.log(`Error: ${err.code} - ${err.message}`)
}

const curOptions = {
  enableHighAccuracy: true, // Use GPS if available
  timeout: 5000, // Time to wait to stop trying for location
  maximumAge: 0, // Do not use a cached position
}

navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions)

/////////////////////////////
// watchPosition(success(), err(), options{}) >> this will update as position is changing
/////////////////////////////
const target = {
  latitude: 41.3874387,
  longitude: -71.394839,
}

const id = navigator.geolocation.watchPosition(
  watchSuccess,
  watchError,
  watchOptions
)

function watchSuccess(pos) {
  const coords = pos.coords
  console.log(coords)

  if (
    target.latitude === coords.latitude &&
    target.longitude === coords.longitude
  ) {
    console.log('You have reached your destination!')
    navigator.geolocation.clearWatch(id)
  }
}

function watchError(err) {
  console.log(`Error: ${err.code} - ${err.message}`)
}

const watchOptions = {
  enableHighAccuracy: true, // Use GPS if available
  timeout: 5000, // Time to wait to stop trying for location
  maximumAge: 0, // Do not use a cached position
}
