var daysNode = document.getElementById("timer-days-value");
var hoursNode = document.getElementById("timer-hours-value");
var minutesNode = document.querySelector("#timer-minutes-value");
var secondsNode = document.querySelector("#timer-seconds-value");

var countDownIntervalCancelationToken;

//1 декабря 2022 20:00
var courseStartDateTime = moment("01.12.2022 20:00:00", "DD.MM.YYYY HH:mm:ss");

function CountDown() {
  var currentDateTime = moment();

  var diffDateTime = courseStartDateTime - currentDateTime;

  if (diffDateTime <= 0) {
    clearInterval(countDownIntervalCancelationToken); //остановка таймера
    [daysNode, hoursNode, minutesNode, secondsNode].forEach(
      (node) => (node.style.color = "red")
    );
    return;
  }

  const days = courseStartDateTime.diff(currentDateTime, "days");
  const hours = courseStartDateTime.diff(
    currentDateTime.add(days, "days"),
    "hours"
  );
  const minutes = courseStartDateTime.diff(
    currentDateTime.add(hours, "hours"),
    "minutes"
  );
  const seconds = courseStartDateTime.diff(
    currentDateTime.add(minutes, "minutes"),
    "seconds"
  );
  // var days = Math.floor(diffDateTime / (24 * 60 * 60 * 1000));
  // var hours = Math.floor(
  //   (diffDateTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  // );
  // var minutes = Math.floor((diffDateTime % (60 * 60 * 1000)) / (60 * 1000));
  // var seconds = Math.floor((diffDateTime % (60 * 1000)) / 1000);

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
