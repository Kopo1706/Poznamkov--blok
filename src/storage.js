export function nacitajPoznamky(){
    const data = localStorage.getItem("poznamky")
    return data ? JSON.parse(data) : []
}

export function ulozPoznamky(text){
    if(!text) return
    const poznamky = nacitajPoznamky()
    poznamky.push({text})
    localStorage.setItem("poznamky", JSON.stringify(poznamky))
}

export function ulozVsetkyPoznamky(poznamky){
    localStorage.setItem("poznamky", JSON.stringify(poznamky))
}