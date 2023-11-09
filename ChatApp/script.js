// Get DOM elements


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
    const message = messageInput.value;
    if (message.trim()!==''){
        //Add message to array
        messages.push(message);

        //Create message element and append to chat container
        const messageElement = document.createElement('p');
        
        messageElement.classList.add('message');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);

        document.getElementById("myDIV").appendChild(messageElement);

        //Clear input field
        messageInput.value = '';

        //message cache
        cacheMessage(message);
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

    if(cachedMessages){

        cachedMessages.forEach(message=>{
            const messageElement = document.createElement('p');
            messageElement.textContent = message;
            chatMessages.appendChild(messageElement);
            document.getElementById("myDIV").appendChild(messageElement);
            messageElement.style.color ='#000000';
        });

        
    }
}

function resetChat(){
    chatMessages.innerHTML='';

    localStorage.removeItem('chatMessages');

    resetbutton.addEventListener('click',resetChat);

    alert('Chat has been reset!');
   
}










