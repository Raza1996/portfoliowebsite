document.addEventListener("DOMContentLoaded", function() {
  if (!localStorage.getItem("messageDisplayed")) {
    var message = document.getElementById("message");
    message.style.display = "block";
    message.style.display = "block";
    localStorage.setItem("messageDisplayed", "true");
  }
});

function closeMessage() {
  var message = document.getElementById("message");
  message.style.display = "none";
  overlay.style.display = "none";
}

document.addEventListener("click", function() {
  closeMessage();
});

document.addEventListener("keydown", function() {
  closeMessage();
});