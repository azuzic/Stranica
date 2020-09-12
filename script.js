function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {
    document.cookie = name+'=; Max-Age=-99999999;';
}

// Pause and play the video, and change the button text
function myFunction() {
  // Get the video
  var video = document.getElementById("myVideo");
  // Get the button
  var btn = document.getElementById("myBtn");
  if (video.paused) {
    video.play();
    btn.innerHTML = "PAUSE VIDEO";
    setCookie('video',"0",7);
  } else {
    video.pause();
    btn.innerHTML = "PLAY VIDEO";
    setCookie('video',"1",7);
  }
}
$(document).ready(function() {
  // Get the video
  var video = document.getElementById("myVideo");
  // Get the button
  var btn = document.getElementById("myBtn");
  // Get the coockie
  var darkMode = getCookie('video');
  if (darkMode == "1") {
    video.pause();
    btn.innerHTML = "PLAY VIDEO";
  } else {
    video.play();
    btn.innerHTML = "PAUSE VIDEO";
  }
});
