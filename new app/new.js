

// Get DOM elements

const usernameInput = document.getElementById('username-input');

const messageInput = document.getElementById('message-input');

const sendButton = document.getElementById('send-button');

const resetbutton = document.getElementById('reset-button')

const chatMessages = document.getElementById('chat-messages');




//Array to store messages
let messages =[];

console.log(messages)


//load cached message on page load
window.addEventListener('load',loadCachedMessages);

//Event listener for send button click
sendButton.addEventListener('click', sendMessage);

//Event listener for enter key press in message input
messageInput.addEventListener('keypress', function (e){
    if (e.key==='Enter'){
        sendMessage();
    }
});

//Function to send a message
function sendMessage(){
    const username = usernameInput.value;
    const message = messageInput.value;
    if (username.trim()!=='' && message.trim()!==''){
        //Add message to array
        messages.push({username,message});

        //Create message element and append to chat container
        const messageElement = document.createElement('p');
        
        messageElement.classList.add('message');
        messageElement.textContent = `${username}:${message}`;
        chatMessages.appendChild(messageElement);

        document.getElementById("myDIV").appendChild(messageElement);

        //Clear input field
        usernameInput.value = '';
        messageInput.value = '';

        //message cache
        cacheMessage({username,message});
    } 
    
}

function cacheMessage(message){
    //Initialize an empty array
    const cachedMessages = JSON.parse(localStorage.getItem('chatMessages'))||[];

    //Add the new message to the array
    cachedMessages.push(message);

    //Store the updated array in local storage
    localStorage.setItem('chatMessages',JSON.stringify(cachedMessages));
}

function loadCachedMessages(){
    //Get cached message from local storage
    const cachedMessages = JSON.parse(localStorage.getItem('chatMessages'));

    if(cachedMessages && cachedMessages.length>0){

        cachedMessages.forEach((message)=>{
            const messageElement = document.createElement('p');
            messageElement.textContent = `${message.username}:${message.message}`;
            chatMessages.appendChild(messageElement);
            document.getElementById("myDIV").appendChild(messageElement);
            messageElement.style.color ='#021f3e';
            messageElement.style.fontFamily ='Nunito';
            messageElement.style.fontWeight ='800';
            messageElement.style.fontSize ='1.1rem';         
           
        });

        
    }
}

resetbutton.addEventListener('click',resetChat);
function resetChat(){
    chatMessages.innerHTML='';

    messages =[];

    localStorage.removeItem('chatMessages');

    alert('Chat has been reset!');
   
}


// Function to handle user login
function login(username) {
    // Check if the username is valid
    if (username.trim() !== '') {
      // Display welcome message and allow user to start the chat
      appendMessage(`Welcome, ${username}! You can now start chatting.`);
      enableChatInput();
    } else {
      // Display an error message if the username is empty or invalid
      appendMessage('Please enter a valid username.', 'My AI');
    }
  }
  
  // Function to enable chat input
  function enableChatInput() {
    const inputElement = document.querySelector('#message-input');
    const submitButton = document.querySelector('#add-button');
  
    inputElement.removeAttribute('disabled');
    submitButton.removeAttribute('disabled');
  }
  
  // Event listener for form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const inputElement = document.querySelector('#message-input');
    const message = inputElement.value;
    appendMessage(message, 'You');
  
    inputElement.value = '';
  });
  









