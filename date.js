const days = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday"];

let today = new Date();
let todayName = days[today.getDay()];
let time = today.getHours() + ":" + today.getMinutes();
let todayDate = today.getDate();
let month = today.getMonth() + 1;

export { today, todayName, time, todayDate, month };
