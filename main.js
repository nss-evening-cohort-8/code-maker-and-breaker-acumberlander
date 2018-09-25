// printToDom function
const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
}

// Buttons
const convertToSecret = document.getElementById("convertToSecret");
const convertToMessage = document.getElementById("convertToMessage");

// function that converts message to secret
const messageToSecretConverter = () => {
    let messageToConvert = document.getElementById("messageToConvert").value;
    let messageArray = messageToConvert.split("");
    let secretMessageArray = [];
    for (i = 0; i < messageToConvert.length; i++) {
        let secretCode = messageArray[i].charCodeAt();
        secretMessageArray.push(secretCode);
    }
    printToDom(secretMessageArray, 'convertedMessage');
}

// function that converts secret to message
const secretToMessageConverter = () => {
    let secretToConvert = document.getElementById("secretToConvert").value;
    let secretArray = secretToConvert.split(",");
    let message = '';
    for (i = 0; i < secretToConvert.length; i++) {
        message += String.fromCharCode(secretArray[i]);
    }
    printToDom(message, 'convertedSecret');
}

// EventListener that will run the messageToSecretConverter function
convertToSecret.addEventListener('click', (e) => {
    e.preventDefault();
    messageToSecretConverter();
});

// EventListener that will run the secretToMessageConverter function
convertToMessage.addEventListener('click', (e) => {
    e.preventDefault();
    secretToMessageConverter();
});

