var btnTranslate = document.querySelector("#btn-translate");

var txtinput = document.querySelector("#text-input");

var outputDiv =  document.querySelector("#output");

var serverURL ="https://api.funtranslations.com/translate/minion.json"

function constructUrl(text){
    return serverURL + "?" +"text=" + text;
}

function errorHandler(error){
    console.log("error occured", error);
    alert("something wrong with the server! Try again after some time.")
}


function clickHandler(){
    var inputText = txtinput.value;
    fetch(constructUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)


}
btnTranslate.addEventListener("click",clickHandler);

