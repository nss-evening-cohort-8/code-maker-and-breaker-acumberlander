// printToDom function

const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
}

// Buttons
const convertToMessage = document.getElementById("convertToMessage");


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

// EventListener that will run the secretToMessageConverter function
convertToMessage.addEventListener('click', (e) => {
    e.preventDefault();
    secretToMessageConverter();
});