const socket = io();

const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const messageInput = document.getElementById("message");
const messageList = document.getElementById("messages");

form.addEventListener("submit", async event => {
    event.preventDefault();
    if (nameInput.value && messageInput.value) {
        socket.emit("msgFromClient", `<b>${nameInput.value.trim()}</b>: ${messageInput.value}`);
        nameInput.value = "";
        messageInput.value = "";
    }
})

socket.on("msgFromServer", serverMessage => {
    const liTag = `<li>${serverMessage}</li>`;
    messageList.innerHTML = liTag + messageList.innerHTML;
})