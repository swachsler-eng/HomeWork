const home = { "lat": 41.13172045025323, "lng": -74.05548775852893 };
const { Map } = await google.maps.importLibrary('maps');
const { PinElement } = await google.maps.importLibrary("marker");
const place = document.querySelector('#searchBox');
const searchFrm = document.querySelector('#searchForm');
const infoList = document.querySelector('#resultsList');
const clearButton = document.querySelector('#clearButton');


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



if (localVarFunc('lastSearch')) {
    const lastSearch = localVarFunc('lastSearch');
    populateList(lastSearch);
}

searchFrm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const a = await fetch(`http://api.geonames.org/wikipediaSearchJSON?formatted=true&q=${place.value}&maxRows=10&username=samwbed&style=full`);
    console.log(a);
    const { geonames } = await a.json();
    console.log(geonames);
    populateList(geonames);
    localVarFunc('lastSearch', geonames);
});

clearButton.addEventListener('click', () => {
    infoList.innerHTML = ''
   localStorage.removeItem('lastSearch');
});
    


function populateList(list) {
    list.forEach((p) => {
        const marker = new AdvancedMarkerElement({
            map,
            position: { lat: p.lat, lng: p.lng },
            title: p.title,
        });
        const li=document.createElement('li');
        li.innerHTML = `<a href="${p.wikipediaUrl}" target="_blank">${p.title}</a>
        <p>${p.summary}</p>`;
        infoList.appendChild(li);
    });
} 

function localVarFunc(varName, array) {
    if (array === undefined) {
       return JSON.parse(localStorage.getItem(varName));
    } else {
        if (localStorage.getItem(varName)){
            const a = JSON.parse(localStorage.getItem(varName));
            localStorage.setItem(varName, JSON.stringify(a.concat(array)));
        } else {
             localStorage.setItem(varName, JSON.stringify(array));
        }
       
    }
}

// console.log(b.geonames[0].lat, b.geonames[0].lng);

