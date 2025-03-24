function ReplaceImage(id, img) {
  var container = document.getElementById(id);
  container.innerHTML = '<img src="' + img + '">';
}
