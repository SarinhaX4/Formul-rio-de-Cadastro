document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const responseMessage = document.getElementById('responseMessage');
    
    let formIsValid = true;

    if (!name) {
        document.getElementById('name').style.borderColor = 'red';
        formIsValid = false;
    } else {
        document.getElementById('name').style.borderColor = '';
    }

    if (!email) {
        document.getElementById('email').style.borderColor = 'red';
        formIsValid = false;
    } else {
        document.getElementById('email').style.borderColor = '';
    }

    if (!message) {
        document.getElementById('message').style.borderColor = 'red';
        formIsValid = false;
    } else {
        document.getElementById('message').style.borderColor = '';
    }

    if (formIsValid) {
        responseMessage.textContent = 'Obrigado pela sua mensagem, ' + name + '!';
        responseMessage.style.color = 'green';
    } else {
        responseMessage.textContent = 'Por favor, preencha todos os campos.';
        responseMessage.style.color = 'red';
    }
});
