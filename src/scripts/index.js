import '../styles/index.scss';
import 'leaflet/dist/leaflet.css';

import axios from 'axios';
import L from 'leaflet';

var map = L.map('map', {
    center: [51.192425, 3.218543],
    zoom: 13
});


var myIcon = L.icon({
    iconUrl: 'public/marker.png',
    iconSize: [32, 37],
    iconAnchor: [16, 37],
    popupAnchor: [-3, -76]
});

L.marker([51.192425, 3.218543], {icon: myIcon}).addTo(map);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

axios.get('https://datatank.stad.gent/4/infrastructuur/hondenvoorzieningen.geojson')
  .then(function (response) {
    // handle success
    renderHondenToiletten(response.data);
  });


const renderHondenToiletten = (data) => {
    data.coordinates.forEach(coordinate => {
        L.marker([coordinate[1], coordinate[0]], {icon: myIcon}).addTo(map);
    });
}





