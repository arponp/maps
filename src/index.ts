/// <reference types="@types/google.maps" />

const mapDiv = document.getElementById('map')!;

new google.maps.Map(mapDiv, {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});
