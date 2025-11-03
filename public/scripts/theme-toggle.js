/**
 * Theme Toggle Script - Portfolio Javier Salgado
 * Manejo de tema oscuro/claro con persistencia en localStorage
 * Nota: La inicialización del tema está en un script inline en <head> para evitar flash
 */

// Función para alternar el tema
function toggleTheme() {
  const root = document.documentElement;
  const isDark = root.classList.contains('dark');
  
  if (isDark) {
    root.classList.remove('dark');
    root.style.colorScheme = 'light';
    localStorage.setItem('theme', 'light');
    // console.log('☀️ Cambiado a modo claro');
  } else {
    root.classList.add('dark');
    root.style.colorScheme = 'dark';
    localStorage.setItem('theme', 'dark');
    // console.log('🌙 Cambiado a modo oscuro');
  }
  
  // Animación sutil del botón
  const button = document.getElementById('themeToggle');
  if (button) {
    button.style.transform = 'scale(0.9)';
    setTimeout(() => button.style.transform = '', 100);
  }
}

// Configuración de eventos
function setupTheme() {
  // El evento de click ya está en el onclick del HTML, no necesitamos addEventListener
  // Esto evita duplicar el evento
  
  // Responder a cambios en preferencias del sistema (solo si no hay preferencia guardada)
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        document.documentElement.classList.add('dark');
        document.documentElement.style.colorScheme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.style.colorScheme = 'light';
      }
    }
  });
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupTheme);
} else {
  setupTheme();
}
