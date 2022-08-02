var todayContainer = document.querySelector(".today");

var d = new Date();

var weekday = new Array(7);
weekday[0] = "Sunday; uttam🖖";
weekday[1] = "Monday; uttam 💪😀";
weekday[2] = "Tuesday; uttam 😜";
weekday[3] = "Wednesday; uttam 😌☕️";
weekday[4] = "Thursday; uttam 🤗";
weekday[5] = "Friday; uttam 🍻";
weekday[6] = "Saturday; uttam 😴";

var n = weekday[d.getDay()];

var randomWordArray = Array(
  "Oh my, it's ",
  "Whoop, it's ",
  "Happy ",
  "Seems it's ",
  "Awesome, it's ",
  "Have a nice ",
  "Happy fabulous ",
  "Enjoy your "
);

var randomWord =
  randomWordArray[Math.floor(Math.random() * randomWordArray.length)];

todayContainer.innerHTML = randomWord + n;
