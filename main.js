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
    // let index = 4;
    for (i = 0; i < messageToConvert.length; i++) {
        messageArray.push([i]);
        // for (j = 0; j < messageArray.length; j++) {
        //     i.charCodeAt([j]);
        // }
    }

    printToDom(messageArray, 'convertedMessage');
}

convertToSecret.addEventListener('click', (e) => {
    e.preventDefault();
    messageToSecretConverter();
});
// let messageArray = messageToConvert.split("");
