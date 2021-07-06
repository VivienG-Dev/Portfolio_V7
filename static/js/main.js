// Toggle menu
const toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("open");
});

// Dark Mode
function myFunction() {
  // Get the checkbox
  const btnDarkMode = document.getElementById("darkmode");

  // If the checkbox is checked, display the output text
  if (btnDarkMode) {
    // Toggle the .dark-theme class on each click
    document.documentElement.classList.toggle("dark-theme");
    document.body.classList.toggle("dark-theme");
    document.getElementById("nav-darkmode").classList.toggle("nav-item--moon");
  }

  // Let's say the theme is equal to light
  let theme = "light";
  let checked = "false";
  // If the body contains the .dark-theme class...
  if (
    document.body.classList.contains("dark-theme") &
    document.documentElement.classList.contains("dark-theme")
  ) {
    // ...then let's make the theme dark
    theme = "dark";
    checked = "true";
  }
  // Then save the choice in localStorage
  localStorage.setItem("theme", theme);
  localStorage.setItem("checked", checked);
}

// Select the theme preference from localStorage
const currentTheme = localStorage.getItem("theme");
const currentChecked = localStorage.getItem("checked");

// If the current theme in localStorage is "dark"...
if ((currentTheme == "dark") & (currentChecked == "true")) {
  // ...then use the .dark-theme class
  document.documentElement.classList.toggle("dark-theme");
  document.body.classList.toggle("dark-theme");
  document.getElementById("nav-darkmode").classList.toggle("nav-item--moon");
}

window.onscroll = function() {
  let scrollTop = window.scrollY;
  const toTheTop = document.querySelector('.top-site-link');
  // console.log(scrollTop)
  
  if(scrollTop > 400) {
    toTheTop.style.display = "block";
  } else {
    toTheTop.style.display = "none";
  }
}