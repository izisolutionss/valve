var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");

icon.onclick = function () {
    if (mySong.paused) {
        mySong.play();
        icon.src = "img/play.gif"
    } else {
        mySong.pause();
        icon.src = "img/aa.png"
    }
}
