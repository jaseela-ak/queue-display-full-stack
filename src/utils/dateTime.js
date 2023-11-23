export function currentDate() {
  const date = new Date();
  const doubleDigit = (number) => String(number).padStart(2, "0");

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear().toString();

  return `${doubleDigit(day)}/${doubleDigit(month)}/${year}`;
}

export function formatTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var ampm = hours >= 12 ? "pm" : "am";

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var strTime = hours + ":" + minutes + ":" + seconds + " " + ampm;

  return strTime;
}
