const modal = document.querySelector('.modal');
const modalInput = document.getElementById('modal-input');
const inputUUID = document.getElementById('UUID');
const btnUpdate = document.querySelector('update');
const btnCancel = document.getElementById('modal-cancel-btn');
const btnSave = document.getElementById('modal-save-btn');

function updateTask(UUID) {
	//Abre o modal
	modal.style.display = 'block';

	//Pega o nome da tarefa e aloca no input do modal
	modalInput.value = document.getElementById(UUID).getElementsByTagName('div')[0].innerHTML;
	inputUUID.value = UUID;
	console.log(modalInput);
}

btnSave.addEventListener('click', () => {
	console.log(inputUUID);
	document.getElementById(inputUUID.value).getElementsByTagName('div')[0].innerHTML =
		modalInput.value;
	modal.style.display = 'none';
});

btnCancel.addEventListener('click', () => {
	modal.style.display = 'none';
});
