const toggleButton = document.getElementById('toggleBtn');
const tipsPanel = document.getElementById('tipsPanel');

if (toggleButton && tipsPanel) {
  toggleButton.addEventListener('click', () => {
    tipsPanel.classList.toggle('hidden');
    toggleButton.textContent = tipsPanel.classList.contains('hidden')
      ? 'Mostrar reglas rápidas'
      : 'Ocultar reglas rápidas';
  });
}
