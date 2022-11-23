var daysNode = document.getElementById("timer-days-value");
var hoursNode = document.getElementById("timer-hours-value");
var minutesNode = document.querySelector("#timer-minutes-value");
var secondsNode = document.querySelector("#timer-seconds-value");

var countDownIntervalCancelationToken;

var courseStartDateTime = new Date(2022, 11, 1, 20); //1 декабря 2022 20:00

function CountDown() {
  var currentDateTime = new Date();

  var diffDateTime = courseStartDateTime - currentDateTime;

  if (diffDateTime <= 0) {
    clearInterval(countDownIntervalCancelationToken); //остановка таймера
    [daysNode, hoursNode, minutesNode, secondsNode].forEach(
      (node) => (node.style.color = "red")
    );
    return;
  }

  var days = Math.floor(diffDateTime / (24 * 60 * 60 * 1000));
  var hours = Math.floor(
    (diffDateTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );
  var minutes = Math.floor((diffDateTime % (60 * 60 * 1000)) / (60 * 1000));
  var seconds = Math.floor((diffDateTime % (60 * 1000)) / 1000);

  daysNode.textContent = days;
  hoursNode.textContent = hours;
  minutesNode.textContent = minutes;
  secondsNode.textContent = seconds;
}

setTimeout(function () {
  console.log("Wow!!! you use site about 5 sec");
}, 5000); // задержка 5 сек

console.log("WELCOME USER");

countDownIntervalCancelationToken = setInterval(CountDown, 1000); //запускать каждую секунду
console.log(countDownIntervalCancelationToken);
