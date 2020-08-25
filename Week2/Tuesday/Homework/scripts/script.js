// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "5px 5px";
    document.getElementById("nav_img").style.width = "10%";
    document.getElementById("navbar").style.background = "rgba(51, 58, 65, 0.1)";
  } else {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("nav_img").style.width = "20%";
    document.getElementById("navbar").style.background = "rgba(51, 58, 65, 1.0)";
  }
}