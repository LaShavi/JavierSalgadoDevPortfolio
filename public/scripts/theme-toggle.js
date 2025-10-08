// theme-toggle.js
// Manejo de tema oscuro/claro y toggle para el portafolio de Javier Salgado

(function() {
  try {
    const stored = localStorage.getItem('theme');
    const html = document.documentElement;
    const shouldBeDark = stored ? stored === 'dark' : true;
    if (shouldBeDark) {
      html.classList.add('dark');
      html.style.colorScheme = 'dark';
    } else {
      html.classList.remove('dark');
      html.style.colorScheme = 'light';
    }
    if (!stored) {
      localStorage.setItem('theme', 'dark');
    }
  } catch (e) {
    console.error('Error inicializando tema:', e);
  }
})();

function toggleTheme() {
  try {
    const root = document.documentElement;
    const wasDark = root.classList.contains('dark');
    const nowDark = !wasDark;
    if (nowDark) {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
    localStorage.setItem('theme', nowDark ? 'dark' : 'light');
    const button = document.getElementById('themeToggle');
    if (button) {
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = 'scale(1)';
      }, 100);
    }
    const sun = document.querySelector('img[alt="Sol"]');
    const moon = document.querySelector('img[alt="Luna"]');
    if (sun && moon) {
      if (root.classList.contains('dark')) {
        sun.classList.add('hidden');
        moon.classList.remove('hidden');
      } else {
        sun.classList.remove('hidden');
        moon.classList.add('hidden');
      }
    }
  } catch (e) {
    console.error('Error al cambiar tema:', e);
  }
}

function setupTheme() {
  const button = document.getElementById('themeToggle');
  if (button) {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      toggleTheme();
    });
  }
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        const root = document.documentElement;
        if (e.matches) {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      }
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupTheme);
} else {
  setupTheme();
}
