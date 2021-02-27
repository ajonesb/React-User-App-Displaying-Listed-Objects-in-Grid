var loaderSetter;

function loaderFunction() {
  loaderSetter = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("primary-app__container").style.display = "block";
}