function displayTime() {
  var currTime = new Date();
  var hrs = currTime.getHours();
  var mins = currTime.getMinutes();
  var secs = currTime.getSeconds();
  // 12 hour clock
  var meridiem = 'AM';
  if (hrs > 12) {
    hrs = hrs - 12;
    meridiem = 'PM';
  }
  if (hrs === 0) {
    hrs = 12;
  }
  if (hrs < 10) {
    hrs = '0' + hrs;
  }
  if (mins < 10) {
    mins = '0' + mins;
  }
  if (secs < 10) {
    secs = '0' + secs;
  }
  var clock = document.getElementById('clock');
  clock.innerText = hrs + ':' + mins + ':' + secs + ' ' + meridiem;
  setInterval(displayTime, 1000);
}
displayTime();
