// main.js — The World of Butterflies

// dark mode
const toggleBtn = document.getElementById('toggleDark');
const darkIcon = document.getElementById('darkIcon');

function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.documentElement.classList.add('dark');
    darkIcon.textContent = '☀';
  } else {
    document.documentElement.classList.remove('dark');
    darkIcon.textContent = '☾';
  }
}

initTheme();

toggleBtn.addEventListener('click', function() {
  const isDark = document.documentElement.classList.toggle('dark');
  if (isDark) {
    localStorage.setItem('theme', 'dark');
    darkIcon.textContent = '☀';
  } else {
    localStorage.setItem('theme', 'light');
    darkIcon.textContent = '☾';
  }
});


// back to top
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

backToTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// navbar shadow au scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  if (window.scrollY > 10) {
    navbar.style.boxShadow = '0 2px 16px rgba(0,0,0,0.08)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});
