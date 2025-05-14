const body = document.body;
const btn = document.getElementById('themeBtn');

// Load preference from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.className = savedTheme;
} else {
  body.className = 'light';
}

btn.addEventListener('click', () => {
  // Toggle theme
  const newTheme = body.classList.contains('light') ? 'dark' : 'light';
  body.className = newTheme;

  // Store preference
  localStorage.setItem('theme', newTheme);

  // Trigger animation
  btn.classList.add('animate');
  setTimeout(() => btn.classList.remove('animate'), 500);
});
