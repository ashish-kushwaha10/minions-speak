const translateBtn = document.querySelector("#btn-translate")
const input = document.querySelector("#input")
const output = document.querySelector("#output-div")


let ServerUrl = "https://api.funtranslations.com/translate/minion.json"

function getUrl(inputValue) {
    console.log(`${ServerUrl}?text=${inputValue}`)
    return `${ServerUrl}?text=${inputValue}`
}
async function clickHandler() {

    
        let inputText = input.value;
        fetch(getUrl(inputText))
            .then(response => response.json())
            .then(jsonRes => {
                var translatedText = jsonRes.contents.translated;
                console.log(translatedText)
                output.innerText = translatedText;
            })
            .catch(()=>{alert("something went wrong. try after some time")})
    
   

}


translateBtn.addEventListener('click', clickHandler)