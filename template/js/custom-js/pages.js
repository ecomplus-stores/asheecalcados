// Add your custom JavaScript for storefront pages here.

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.opacity = "1";
  } else {
    document.getElementById("header").style.opacity = ".5";
  }
}
