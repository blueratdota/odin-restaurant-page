import Icon from './rat_tortillas.jpg'

function constructHome(){
    const container = document.querySelector('.container')

    const image = document.createElement('img')
    const header = document.createElement('h2')
    const shortText = document.createElement('p')

    image.src = Icon
    header.textContent = "Taste The Street"
    shortText.textContent = "Enjoy cheap and easy to eat food made by a true Street Chef!"

    container.appendChild(image)
    container.appendChild(header)
    container.appendChild(shortText)
}


function loadHome(){
    
    constructHome()


}

export default loadHome