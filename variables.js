const days = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday"];
let form = document.querySelector("form");
let cityName = document.querySelector("#cityName");
let icon = document.querySelector("#icon");
let temp = document.querySelector("#temp");
let city = document.querySelector("#city");
let wind = document.querySelector("#wind");
let humidity = document.querySelector("#humidity");
let date = document.querySelector("#date");
let description = document.querySelector("#description");
let weekDays = document.querySelectorAll(".week");
console.log(weekDays[0].innerHTML);

export * from "./variables";
