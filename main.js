// printToDom function

const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
}

// Buttons
const convertToSecret = document.getElementById("convertToSecret");
const convertToMessage = document.getElementById("convertToMessage");

//input fields -- NOT THEIR VALUE
const secretToConvert = document.getElementById("secretToConvert");
const messageToConvert = document.getElementById("messageToConvert");

