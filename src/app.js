import { ulozPoznamky, } from "./storage.js"
import { zobrazPoznamky } from "./render.js"

const form = document.querySelector("#note-form")
const textarea = document.querySelector("#noteText")
const noteList = document.querySelector("#noteList")

form.addEventListener("submit", function(e){
    e.preventDefault() 
    const text = textarea.value.trim()
    if(text === "")return
    ulozPoznamky(text)
    textarea.value = ""
    zobrazPoznamky()
})

zobrazPoznamky()
