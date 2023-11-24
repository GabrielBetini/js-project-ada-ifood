document.getElementById('calendar').textContent = getCurrentDate();
function getCurrentDate() {
	const today = new Date();
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	return today.toLocaleDateString('pt-BR', options);
}
