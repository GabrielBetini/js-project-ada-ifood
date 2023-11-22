document.getElementById('calendar').textContent = getCurrentDate();

function getCurrentDate() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString('pt-BR', options);
}
const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx'.replace(/[x]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

function AddATask() {
    const contentTask = taskInput.value.trim();

    if (contentTask !== '') {
        const taslId = create_UUID();

        const listItem = document.createElement('li');
        listItem.className = 'todoTask';
        listItem.innerHTML = `
            <div>${contentTask}</div>
            <div class="editTask">
                <button class="update ${listItem.id = taslId}"><img src="./assets/update.svg" alt=""></button> 
                <button class="btn-erase ${listItem.id = taslId}"><img src="./assets/delete.svg" alt=""></button>
                <button class="btn-done ${listItem.id = taslId}"><img src="./assets/done.svg" alt=""></button>
            </div>
        `;

        taskList.appendChild(listItem);
        taskInput.value = '';
    } else {
        alert("Tarefa vazia");
    }
}
addTaskBtn.addEventListener('click', AddATask);



