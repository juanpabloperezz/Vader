// Deklaration av variabler
let lon;
let lat;
let Temp = document.querySelector(".temp");
let summary = document.querySelector(".väder");
let plats = document.querySelector(".plats");
let icon = document.querySelector(".icon");
const kelvin = 273;

window.addEventListener("load", () => {
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition((position) => {
	console.log(position);
	lon = position.coords.longitude;
	lat = position.coords.latitude;

	// API Id
	const api = "6d055e39ee237af35ca066f35474e9df";

	// URL av API
	const base =`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` + `lon=${lon}&appid=6d055e39ee237af35ca066f35474e9df`;

	// Anroppar API
	fetch(base)
		.then((response) => {
		return response.json();
		})
		.then((data) => {
		console.log(data);
		Temp.textContent =
		Math.floor(data.main.temp - kelvin) + "°C";
		summary.textContent = data.weather[0].description;
		plats.textContent = data.name + "," + data.sys.country;
		let icon1 = data.weather[0].icon;
		icon.innerHTML = `<img src="icons/${icon1}.svg" style= 'height:10rem'/>`;
		});
	});
}
});
