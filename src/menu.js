import Icon from './rat_tortillas.jpg'

function constructMenu(){
    const container = document.querySelector('.container')

    const image = document.createElement('img')
    const header = document.createElement('h2')
    const shortText = document.createElement('p')

    image.src = Icon
    header.textContent = "This is the menu"
    shortText.textContent = "Enjoy cheap and easy to eat food made by a true Street Chef!"

    container.appendChild(image)
    container.appendChild(header)
    container.appendChild(shortText)
}



function loadMenu(){
    constructMenu()
}

export default loadMenu