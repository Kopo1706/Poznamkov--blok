import { nacitajPoznamky, ulozVsetkyPoznamky } from "./storage.js";


export function zobrazPoznamky(){
    noteList.innerHTML = ""

    const poznamky = nacitajPoznamky()
    poznamky.forEach((poznamka, index,) => {
        const li = document.createElement("li")
        li.textContent = poznamka.text
        noteList.appendChild(li)

        let button = document.createElement("button")
        button.textContent = "zmazať"
        li.appendChild(button)

        button.addEventListener("click", function(){
            let odpoved = confirm("Isto chcete vymazať tento záznam?")
            if(!odpoved)return

           odstranPoznamku(index)
           zobrazPoznamky()
    
        })
        
    });
}

export function odstranPoznamku(index){
    const poznamky = nacitajPoznamky()
    poznamky.splice(index, 1)
    ulozVsetkyPoznamky(poznamky)
}