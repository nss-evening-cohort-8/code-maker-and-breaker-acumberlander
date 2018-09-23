// printToDom function
const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
}

// Buttons
const convertToSecret = document.getElementById("convertToSecret");

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

// EventListener that will run the messageToSecretConverter function
convertToSecret.addEventListener('click', (e) => {
    e.preventDefault();
    messageToSecretConverter();
});

