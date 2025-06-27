/*const navbarEl = document.querySelector(".navbar");


const bottomContainerE1 = document.querySelector(".bottom-container");

console.log(navbarEl.offsetHeight)

console.log(bottomContainerE1.offsetTop);

window.addEventListener("scroll", ()=> {
    if(window.scrollY > bottomContainerE1.offsetTop - navbarEl.offsetHeight - 50){
        navbarEl.classList.add("active")
    }else{
        navbarEl.classList.remove("active"); 
    }
});*/

// --- Dark Mode Toggle ---
const themeToggleBtn = document.getElementById('themeToggle');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');

// Function to set theme
function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark');
        sunIcon?.classList.remove('hidden');
        moonIcon?.classList.add('hidden');
    } else {
        document.body.classList.remove('dark');
        sunIcon?.classList.add('hidden');
        moonIcon?.classList.remove('hidden');
    }
    localStorage.setItem('theme', theme);
}

// Check for saved theme preference or default to light on load
const currentTheme = localStorage.getItem('theme') || 'light';
setTheme(currentTheme);

// Toggle theme on button click
themeToggleBtn?.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
    setTheme(newTheme);
});

// Note: This script only contains dark mode toggle logic.
// If you had other general JavaScript for this website, you would merge it here.
