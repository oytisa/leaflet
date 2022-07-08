alert('hello WondoGIS alert!')
console.log('Web Mapping!')
var map = L.map('map').setView([ 7.10024, 38.62785], 17);

// globals
let data = [
	{
		'title':'Lecturers Lounge',
		'lat': 7.1014687,
		'lon': 38.6275358
	},
	{
		'title':'Soil Lab',
		'lat': 7.1000272,
		'lon': 38.6268749
	},
	{
		'title':'Bangalo Lodge',
		'lat': 7.1012967,
		'lon': 38.6275916
	},
	{
		'title':'House of Society',
		'lat': 7.1028059,
		'lon': 38.6294778
	},
	{
		'title':'Guest House',
		'lat': 7.1014687,
		'lon': 38.6275358
	}
]

let myMarkers = L.featureGroup();

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// loop through data
data.forEach(function(item){
	// add marker to map
	let marker = L.marker([item.lat,item.lon]).addTo(map)
        .bindPopup(item.title)
        .openPopup();
    myMarkers.addLayer(marker);
})
myMarkers.addTo(map)

//zoom to the extent of the markers
map.fitBounds(myMarkers.getBounds());


	

      