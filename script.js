document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggleBtn');
  const tipsPanel = document.getElementById('tipsPanel');

  if (toggleBtn && tipsPanel) {
    toggleBtn.addEventListener('click', () => {
      const isHidden = tipsPanel.classList.toggle('hidden');
      toggleBtn.textContent = isHidden ? 'Mostrar reglas rápidas' : 'Ocultar reglas rápidas';
    });
  }
});
