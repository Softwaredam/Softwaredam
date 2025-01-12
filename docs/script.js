window.addEventListener("scroll", function () {
  const logo = document.getElementById("logo");
  const logo_text = document.getElementById("logo-text");
    if (window.scrollY > 50) {
      logo.style.width = "10em";
      logo.style.paddingTop = "10px";
      logo_text.style.fontSize = "1em";
    } else {
      logo.style.width = "15em";
      logo.style.paddingTop = "10em";
      logo_text.style.fontSize = "0em";
    }
});