// Global variables
const messages = []; // Array to store chat messages
let username = '';

let loggedIn = false;

// Function to handle user login
function handleLogin(event) {
  event.preventDefault(); // Prevent form submission

  const usernameInput = document.getElementById('username');
  username = usernameInput.value;
  
  alert(`Welcome, ${username}!`);

  loggedIn = true;

  usernameInput.value = '';
  document.getElementById('username').textContent = username;
  
  
  document.getElementById('login-container').style.display = 'none'; // Hide login section  
  document.getElementById('chat-message-container').style.display = 'block'; // Show chat container
  document.getElementById('chat-messages').style.display = 'block'; // Show chat section
  
}

// Function to handle chat input
function handleChatInput(event) {
  event.preventDefault(); // Prevent form submission

  if(!loggedIn){
    alert("Please login before sending messages!");
    return;
  }


  const messageInput = document.getElementById('message-input');
  const message = messageInput.value;

  if (message.trim() !== '') {
    sendMessage(message); // Call the sendMessage function

    messageInput.value = ''; // Clear the input field
  }
}

// Function to send message
function sendMessage(message) {
  const timestamp = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  messages.push({ message, timestamp }); // Store the message and its timestamp

  appendMessage(message, timestamp, username); // Call the appendMessage function
}

// Function to append message to chat messages element
function appendMessage(message, timestamp, username) {
  const chatMessages = document.getElementById('chat-messages');
  const messageElement = document.createElement('div');
  messageElement.innerHTML = `<span class="timestamp float-end">${timestamp}</span><span class="m-2 text-uppercase fs-5 fw-bold">${username+':'}</span>${message}`;
  chatMessages.appendChild(messageElement);
}

// Function to clear chat messages
function clearChat() {
  const chatMessages = document.getElementById('chat-messages');
  chatMessages.innerHTML = '';
  messages.length = 0; // Clear the messages array
}

// Function to cache messages
function cacheMessages() {
  localStorage.setItem('cachedMessages', JSON.stringify(messages));
  
}

// Event listener for login form submission
document.getElementById('login-form').addEventListener('submit', handleLogin);

// Event listener for chat form submission
document.getElementById('chat-form').addEventListener('submit', handleChatInput);

// Event listener for clear button click
document.getElementById('clear-button').addEventListener('click', clearChat);


const video = document.getElementById('background-video');
video.addEventListener('ended', function(){
  this.currentTime = 0;
  this.play();
},false);






 