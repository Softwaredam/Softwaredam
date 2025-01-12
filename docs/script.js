window.addEventListener("scroll", function () {
    const logo = document.getElementById("logo");
    if (window.scrollY > 50) {
      logo.style.width = "10em";
      logo.style.paddingTop = "10px";
    } else {
      logo.style.width = "15em";
      logo.style.paddingTop = "10em";
    }
});