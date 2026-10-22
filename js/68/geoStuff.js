const home = { "lat": 41.13172045025323, "lng": -74.05548775852893 };
const { Map } = await google.maps.importLibrary('maps');
const { PinElement } = await google.maps.importLibrary("marker");

const [{ InfoWindow }, { AdvancedMarkerElement }] = await Promise.all([
    google.maps.importLibrary('maps'),
    google.maps.importLibrary('marker'),
]);

// Create a new map from the div with id="map".
const map = new Map(document.getElementById('map'), {
    center: home,
    zoom: 3,
    renderingType: 'VECTOR',
    mapTypeId: 'satellite',
    mapId: 'DEMO_MAP_ID',
});
console.log(map);

const place = document.querySelector('#searchBox');
const searchFrm = document.querySelector('#searchForm');

searchFrm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const a = await fetch(`http://api.geonames.org/wikipediaSearchJSON?formatted=true&q=${place.value}&maxRows=10&username=samwbed&style=full`);
    console.log(a);
    const b = await a.json();
    console.log(b);
    b.geonames.forEach((place) => {
        const marker = new AdvancedMarkerElement({
            map,
            position: { lat: place.lat, lng: place.lng },
            title: place.title,
        });
    });
});
        // console.log(b.geonames[0].lat, b.geonames[0].lng);

