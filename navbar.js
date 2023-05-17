
// //Function to toggle mobile menu
const toggleButton = document.getElementById("toggle-button");
const mobileLinks = document.getElementById("mobile-links");
toggleButton.addEventListener("click", () => {
  const computedStyle = window.getComputedStyle(mobileLinks);
  if (computedStyle.display === "none") {
    mobileLinks.style.display = "block";
  } else if (computedStyle.display === "block") {
    mobileLinks.style.display = "none";
  }
});


//When the user scrolls down 90px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementById("navbar").style.height = "4rem";
    document.getElementById("logo-image").style.width = "4rem";
    document.getElementById("brand-title").style.setProperty("font-size", "2rem");
    // document.getElementById("navbar-logo-container").style.setProperty("margin-top", "0.5rem");
    document.getElementById("mobile-links").style.setProperty("top", "4rem");
  } else {
    document.getElementById("navbar").style.height = "7rem";
    document.getElementById("logo-image").style.width = "6rem";
    document.getElementById("brand-title").style.setProperty("font-size", "3rem");
    // document.getElementById("navbar-logo-container").style.setProperty("margin-top", "0rem");

    document.getElementById("mobile-links").style.setProperty("top", "7rem");

  }
} 
