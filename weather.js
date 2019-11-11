import { today, todayName, time, todayDate, month } from "./date.js";

const days = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday"];

let cityName = document.querySelector("#cityName");
let icon = document.querySelector("#icon");
let temp = document.querySelector("#temp");
let city = document.querySelector("#city");
let wind = document.querySelector("#wind");
let humidity = document.querySelector("#humidity");
let date = document.querySelector("#date");
let description = document.querySelector("#description");
let weekDays = document.querySelectorAll(".week");
let minis = document.querySelectorAll(".min");
let maxis = document.querySelectorAll(".max");
let button = document.querySelector("button");
let fahrenheit = false;
console.log(maxis);

// function to get the data in the top
export const drawWeather = d => {
  let celcius = Math.round(parseFloat(d.list[0].main.temp) - 273.15);
  let fahrenheit = Math.round(
    (parseFloat(d.list[0].main.temp) - 273.15) * 1.8 + 32
  );
  temp.innerHTML = celcius + "°C" + " | " + fahrenheit + "°F";
  city.innerHTML = d.city.name + ", " + d.city.country;
  wind.innerHTML = "wind " + d.list[0].wind.speed + " mph";
  humidity.innerHTML = "Humidity " + d.list[0].main.humidity + " %";
  description.innerHTML = d.list[0].weather[0].description;
  let iconFirst = d.list[0].weather[0].icon;
  icon.src = `http://openweathermap.org/img/wn/${iconFirst}@2x.png`;
  date.innerHTML = todayName + " " + time;
  minMax(d);
  console.log(d);
};

// function to get the data at the bottom (Table)
export const minMax = d => {
  // to get the 5 days from the 40 elements in the array depends on the time
  let max = d.list.filter(
    (x, i) => x.dt_txt.split(" ")[1] === "12:00:00" || i === 0
  );
  let min = d.list.filter(x => x.dt_txt.split(" ")[1] === "03:00:00");
  // to prevent repeat today twice
  if (max.length > 5) {
    max.shift();
  } else {
    null;
  }
  let currentDays = max.map(x => x.dt_txt.split(" ")[0].split("-"));
  currentDays.forEach((x, i) => (weekDays[i].innerText = x[2] + "/" + x[1]));

  // to get the min temperatures
  min.forEach((x, i) => {
    minis[i].innerHTML =
      Math.round(parseFloat(x.main.temp_min) - 273.15) + "°C";
  });

  // to get the min temperatures
  max.forEach((x, i) => {
    maxis[i].innerHTML =
      Math.round(parseFloat(x.main.temp_max) - 273.15) + "°C";
  });

  button.addEventListener("click", () => {
    if (fahrenheit === false) {
      max.forEach((x, i) => {
        maxis[i].innerHTML =
          Math.round(parseFloat(x.main.temp_max) - 273.15) * 1.8 + 32 + "°F";
      });
      min.forEach((x, i) => {
        minis[i].innerHTML = maxis[i].innerHTML =
          Math.round((parseFloat(x.main.temp_min) - 273.15) * 1.8 + 32) + "°F";
      });
      fahrenheit = true;
      button.innerHTML = "Celcius";
    } else {
      min.forEach((x, i) => {
        minis[i].innerHTML =
          Math.round(parseFloat(x.main.temp_min) - 273.15) + "°C";
      });
      max.forEach((x, i) => {
        maxis[i].innerHTML =
          Math.round(parseFloat(x.main.temp_max) - 273.15) + "°C";
      });
      fahrenheit = false;
      button.innerHTML = "Fahrenheit";
    }
  });

  // console.log(max);
  // console.log(min);
};
