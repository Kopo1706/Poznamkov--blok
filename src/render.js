import { nacitajPoznamky, ulozVsetkyPoznamky } from "./storage.js";


export function zobrazPoznamky(){
    noteList.innerHTML = ""

    const poznamky = nacitajPoznamky()
    poznamky.forEach((poznamka, index,) => {
        const li = document.createElement("li")
        li.textContent = poznamka.text
        noteList.appendChild(li)

        let btnZmaz = document.createElement("button")
        btnZmaz.textContent = "zmazať"
        btnZmaz.style.marginLeft = "0.5em"
        li.appendChild(btnZmaz)

        btnZmaz.addEventListener("click", function(){
            let odpoved = confirm("Určite chcete vymazať tento záznam?")
            if(!odpoved)return

           odstranPoznamku(index)
           zobrazPoznamky()
    
        })

        let btnUprav = document.createElement("button")
           btnUprav.textContent = "Upraviť"
           btnUprav.style.marginLeft = "0.5em"
           li.appendChild(btnUprav)

        btnUprav.addEventListener("click", function(){
            let novyText = prompt(`Zadaj nový text poznámky: ${poznamka.text}`)
            if(!novyText)return

            poznamky[index].text = novyText
            ulozVsetkyPoznamky(poznamky)
            zobrazPoznamky()
           })
        
    });
}

export function odstranPoznamku(index){
    const poznamky = nacitajPoznamky()
    poznamky.splice(index, 1)
    ulozVsetkyPoznamky(poznamky)
}

