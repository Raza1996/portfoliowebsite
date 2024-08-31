var icon = document.getElementById("darkmode");
icon.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "src/moon.png"
  } else {
    icon.src = "src/sun.png"
  }
}