// printToDom function

const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
}

// Buttons
const convertToSecret = document.getElementById("convertToSecret");
const convertToMessage = document.getElementById("convertToMessage");

//input fields
// const messageToConvert = document.getElementById("messageToConvert").value;
const secretToConvert = document.getElementById("secretToConvert").value;


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

convertToSecret.addEventListener('click', (e) => {
    e.preventDefault();
    messageToSecretConverter();
});
// let messageArray = messageToConvert.split("");
