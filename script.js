function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") return;

    let li = document.createElement("li");
    li.innerHTML = `
        <span onclick="this.parentElement.classList.toggle('completed')">${taskText}</span>
        <button class="delete-btn" onclick="this.parentElement.remove()">X</button>
    `;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
