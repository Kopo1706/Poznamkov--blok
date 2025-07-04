import { nacitajPoznamky, ulozVsetkyPoznamky } from "./storage.js";


export function zobrazPoznamky(filterText = ""){
    noteList.innerHTML = ""

    const poznamky = nacitajPoznamky()
    const filtrovanie = poznamky.filter(p => p.text.toLowerCase().includes(filterText.toLocaleLowerCase()))
    filtrovanie.forEach((poznamka) => {
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
            const index = poznamky.findIndex(p => p.text === poznamka.text)
            if (index !== -1) {
                poznamky.splice(index, 1)
                ulozVsetkyPoznamky(poznamky)
                zobrazPoznamky(filterText)
            }

           
           
    
        })

        let btnUprav = document.createElement("button")
           btnUprav.textContent = "Upraviť"
           btnUprav.style.marginLeft = "0.5em"
           li.appendChild(btnUprav)

        btnUprav.addEventListener("click", function(){
            let novyText = prompt(`Zadaj nový text poznámky: ${poznamka.text}`)
            if(!novyText)return

            const index = poznamky.findIndex(p=> p.text === poznamka.text)
            if(index !== -1){
                poznamky[index].text = novyText
                ulozVsetkyPoznamky(poznamky)
                zobrazPoznamky(filterText)
            }
           })
        
    });
}



