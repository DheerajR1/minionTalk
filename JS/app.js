var rawInputBtn = document.querySelector("#btn-userInput");
var inputText = document.querySelector("#txt-Input");
var outputText = document.querySelector("#outputArea");
var serverUrl = "https://api.funtranslations.com/translate/yoda.json";

function getTranslation(text) {
    console.log(serverUrl + "?" + "text=" + text);
    return serverUrl + "?" + "text=" + text;
}

function errorHandler(error) {
    console.error("error occured:", error);
    alert("error occured:", error);
}

function clickHandler() {
    var text = inputText.value;
    console.log(text);
    fetch(getTranslation(text))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        console.log({json});
        outputText.innerText = translatedText;
    })
    .catch(errorHandler) 
}

rawInputBtn.addEventListener("click", clickHandler);