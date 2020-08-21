var body_width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var body_height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var strMsg = "Browser inner window width: " + body_width + ", height: " + body_height + ".";

function appearMenu() {
  var dispState;

  dispState = document.getElementById("menu-tray").style.display;

  if (dispState == "block")
    document.getElementById("menu-tray").style.display = "none";
  else
    document.getElementById("menu-tray").style.display = "block";
}
