var todayContainer = document.querySelector(".today");

var d = new Date();

var weekday = new Array(7);
weekday[0] = "Sunday; uttamπ";
weekday[1] = "Monday; uttam πͺπ";
weekday[2] = "Tuesday; uttam π";
weekday[3] = "Wednesday; uttam πβοΈ";
weekday[4] = "Thursday; uttam π€";
weekday[5] = "Friday; uttam π»";
weekday[6] = "Saturday; uttam π΄";

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
