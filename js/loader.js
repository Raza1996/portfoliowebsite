window.addEventListener("load", () => {
  // Remove the loader class to hide the loading screen
  document.querySelector(".loader").classList.remove("loader-active");

  // Once the loading screen disappears, trigger the iframe animation
  setTimeout(() => {
      // Replace "yourIframeID" with the ID of your iframe element
      document.getElementById("yourIframeID").contentWindow.postMessage("startAnimation", "*");
  }, calculateLoadingScreenDuration()); // Calculate loading screen duration
});

function calculateLoadingScreenDuration() {
  // Calculate the time it takes for the loading screen to disappear
  var loaderStyle = getComputedStyle(document.querySelector(".loader"));
  var animationDuration = parseFloat(loaderStyle.animationDuration) || 0; // Get the animation duration
  var animationDelay = parseFloat(loaderStyle.animationDelay) || 0; // Get the animation delay
  return (animationDuration + animationDelay) * 1000; // Convert to milliseconds
}