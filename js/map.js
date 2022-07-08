alert('hello WondoGIS alert!')
console.log('Web Mapping!')
var map = L.map('map').setView([ 7.10024, 38.62785], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([ 7.10024, 38.62785]).addTo(map)
		.bindPopup('The Technology Sandbox<br> Where Oytisa is sitting this very moment')
		.openPopup();	

      