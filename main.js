import { drawWeather, minMax } from "./weather.js";

let form = document.querySelector("form");

const url =
  "https://api.openweathermap.org/data/2.5/forecast?q=Damascus&appid=e26fe5cf2cfeb710540845a34edd70ea";
const key = "e26fe5cf2cfeb710540845a34edd70ea";

window.onload = () => fetchData(url);

form.addEventListener("submit", e => {
  let urlByUser = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName.value}&appid=${key}`;
  e.preventDefault();
  fetchData(urlByUser);
  document.querySelector("button").innerHTML = "Fahrenheit";
  // fetchData(urlByUser);
});

const fetchData = url => {
  fetch(url)
    .then(checkStatus)
    .then(parseJSON)
    .then(drawWeather)
    .catch(error => console.log(error));
};

const checkStatus = response => {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
};

const parseJSON = response => {
  return response.json();
};
