
const range = document.getElementById('customRange1');
const rangeValue = document.getElementById('rangeValue');
const successAlert = document.getElementById('successAlert');
const submitButton = document.getElementById('submitButton');

range.addEventListener('input', () => {
    rangeValue.textContent = range.value;
});

submitButton.addEventListener('click', (event) => {
    event.preventDefault(); // Previne o comportamento padrão do link
    successAlert.style.display = 'block'; // Mostra o alerta de sucesso
});

