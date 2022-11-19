const translateBtn = document.querySelector("#btn-translate")
const input = document.querySelector("#input")
const output = document.querySelector("#output-div")


let ServerUrl = "https://api.funtranslations.com/translate/minion.json"

function getUrl(inputValue) {
    console.log(`${ServerUrl}?text=${inputValue}`)
    return `${ServerUrl}?text=${inputValue}`
}
async function clickHandler() {

    try {
        let inputText = input.value;
        let response = await fetch(getUrl(inputText))
        let translatedValue = await response.json()
        console.log(translatedValue)
    }
    catch (err) {
        console.log("Error--->", err)
    }

}


translateBtn.addEventListener('click', clickHandler)