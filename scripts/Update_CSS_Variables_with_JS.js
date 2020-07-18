const variablesInputs = document.querySelectorAll('.variables__input');

function handleVariablesUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

variablesInputs.forEach(input => input.addEventListener('change', handleVariablesUpdate));
variablesInputs.forEach(input => input.addEventListener('mousemove', handleVariablesUpdate));



