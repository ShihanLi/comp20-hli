var video = document.getElementById("butwehavethepower");
var lyrics = document.getElementById("lyrics");

video.addEventListener(
  "timeupdate",
  function() {
    if (video.currentTime < 4) {
      lyrics.innerHTML = "<h3>Test caption</h3>";
    }
  },
  false
);
