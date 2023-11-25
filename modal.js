<<<<<<< HEAD
const btnUpdate = document.querySelector('.update');
const modal = document.querySelector('.modal');
const modalInput = document.getElementById('modal-input');
const inputUUID = document.getElementById('UUID');
const btnCancel = document.getElementById('modal-cancel-btn');
const btnSave = document.getElementById('modal-save-btn');

function updateTask(taskId) {
    modal.style.display = 'block';

    modalInput.value = document.getElementById(taskId).getElementsByTagName('div')[0].innerHTML;
    inputUUID.value = taskId;
}

btnSave.addEventListener('click', () => {
    document.getElementById(inputUUID.value).getElementsByTagName('div')[0].innerHTML =
        modalInput.value;
    modal.style.display = 'none';
});

btnCancel.addEventListener('click', () => {
    modal.style.display = 'none';
});

document.addEventListener('click', function (event) {
    const target = event.target;

    const btnUpdate = target.closest('.update');
    if (btnUpdate) {
        const taskId = btnUpdate.getAttribute('data-task-id');
        updateTask(taskId);
    }
=======
const modal = document.querySelector('.modal');
const modalInput = document.getElementById('modal-input');
const inputUUID = document.getElementById('UUID');
const btnUpdate = document.querySelector('update');
const btnCancel = document.getElementById('modal-cancel-btn');
const btnSave = document.getElementById('modal-save-btn');

function updateTask(elemento) {
	modal.style.display = 'block';

	const UUID = elemento.getAttribute('data-task-id');
	modalInput.value = document.getElementById(UUID).getElementsByTagName('div')[0].innerHTML;
	inputUUID.value = UUID;
}

btnSave.addEventListener('click', () => {
	document.getElementById(inputUUID.value).getElementsByTagName('div')[0].innerHTML =
		modalInput.value;
	modal.style.display = 'none';
});

btnCancel.addEventListener('click', () => {
	modal.style.display = 'none';
>>>>>>> 34c1d65b5c1c64d021be3870df15f9f72078bae1
});
