const gallery = document.querySelectorAll("img");
for(let index= 0; index < gallery.length; index++) {
  const element = gallery[index];
  element.addEventListener("click", expand);
}
function expand(event) {
  const smallImage = event.currentTarget;
  const bigImage = document.querySelector(".big");
  smallImage.classList.add('big');
  bigImage.classList.remove('big');
}

