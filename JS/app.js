var rawInputBtn = document.querySelector("#btn-userInput");
var inputText = document.querySelector("#txt-Input");
var outputText = document.querySelector("#outputArea");
var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTranslation(text) {
    return serverUrl + "?" + "text=" + Text;
}

function errorHandler(error) {
    console.error("error occured:", error);
    alert("error occured:", error);
}

function clickHandler() {
    var text = inputText.value;
    fetch(getTranslation(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputText.innerText = translatedText;
    })
    .catch(errorHandler) 
}

rawInputBtn.addEventListener("click", clickHandler);