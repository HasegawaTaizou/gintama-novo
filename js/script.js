function changeState(element) {
  let display = document.getElementById(element).style.display;
  if (display == "block") {
    document.getElementById(element).style.display = "none";
  } else {
    document.getElementById(element).style.display = "block";
    element.style.transition = "all 2s";
    element.setAttribute = "all 0.5s";
  }
}
