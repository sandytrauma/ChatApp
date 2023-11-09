//function for handling form submission
function handleSubmit(event){
    event.preventDefault();// prevent form submission from refreshing the page

    // enter username by user

    const username = document.getElementById('username').value;

    console.log(`Username:${username}`);

    const successMessage = document.getElementById('successMessage');

    successMessage.textContent = 'You have access to the chat';

    document.getElementById('chatForm').reset();
}