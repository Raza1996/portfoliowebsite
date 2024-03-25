document.addEventListener("DOMContentLoaded", function() {
  if (!localStorage.getItem("messageDisplayed")) {
    var message = document.getElementById("message");
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    message.style.display = "block";
    localStorage.setItem("messageDisplayed", "true");
  }
});

function closeMessage() {
  var message = document.getElementById("message");
  message.classList.add("closed"); // Apply the 'closed' class to trigger the closing animation
  setTimeout(function() {
    overlay.style.display = "none";
    message.style.display = "none";
  }, 500); // Adjust the delay to match the duration of your closing animation
}

document.addEventListener("click", function() {
  closeMessage();
});

document.addEventListener("keydown", function() {
  closeMessage();
});