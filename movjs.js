//mobile menu
function myFunction() {
    var x = document.getElementById("main-nav");
    if (x.className === "mainnav") {
      x.className += " responsive";
    } else {
      x.className = "mainnav";
    }
  }