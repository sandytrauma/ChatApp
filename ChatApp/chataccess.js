
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
  
