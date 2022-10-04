function clock() {
  // Hour = h
  // Minute = m
  // Second = s

  var fullDate = new Date();
  var h = fullDate.getHours();
  var m = fullDate.getMinutes();
  var s = fullDate.getSeconds();

  if (h == 10) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.getElementById("hour").innerHTML = h;
  document.getElementById("minute").innerHTML = ":" + m;
  document.getElementById("second").innerHTML = ":" + s;
}

setInterval(clock, 1000);
