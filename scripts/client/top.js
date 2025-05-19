let prevScrollpos = window.pageYOffset;
let currentScrollPos = window.pageYOffset;

document.getElementById("top-button").addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

if (currentScrollPos === 0) {
  document.getElementById("top-button").classList.add("hidden");
} else {
  document.getElementById("top-button").classList.remove("hidden");
}

if (window.scrollY > 0) {
  document.getElementById("top-button").style.display = "block";
} else {
  document.getElementById("top-button").style.display = "none";
}

window.addEventListener("scroll", function() {
  if (window.scrollY > 0) {
    document.getElementById("top-button").style.display = "block";
  } else {
    document.getElementById("top-button").style.display = "none";
  }
});