document.addEventListener("DOMContentLoaded", () => {

  const submit = document.getElementById("submit");
  const evilDogVideoButton = document.getElementById("evil_dog_button");
  const evilDogVideo = document.getElementById("dog_video");
  const evilDogVideoContainer = document.querySelector(".video-youtube")
  let toggle = "hidden";

  submit.addEventListener("click", () => alert("Info's on it's way ⚡⚡"));   // Dec code for emoji: &#9889; Hex code for emoji: &#x26A1

  // Stop the iframe video from continuing to play when it's hidden.
  function stopVideo(element) {
    let iframe = element.querySelector("iframe");
    // let video = element.querySelector("video");     Note: Use this for a video element.

    if (iframe !== null) {
        let iframeSrc = iframe.src;
        iframe.src = iframeSrc;   // These 2 steps cause the media to reload, so it stops playing, music, video, etc (in this case, it's the iframe).
    }
    // if ( video !== null ) {    Note: Use this for a video element.
    //     video.pause();
    // }
  };

  // Toggle between showing/hiding the iframe.
  evilDogVideoButton.addEventListener("click", function() {
    if (toggle==="hidden") {
      evilDogVideo.style.display = "inline";
      toggle = "show";
    }
    else if (toggle==="show") {
      stopVideo(evilDogVideoContainer);
      evilDogVideo.style.display = "none";
      toggle = "hidden";
    }
  });

})
