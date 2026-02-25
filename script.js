let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark')
    navbar.classList.toggle('active');
}
const themeSwitch = document.getElementById('theme-switch');

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-theme');
  themeSwitch.checked = true;
}

// Toggle theme
themeSwitch.addEventListener('change', () => {
  if (themeSwitch.checked) {
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark');
  }
});
const body = document.body;
const toggleBtn = document.getElementById("themeToggle"); // your button or icon

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");
});
