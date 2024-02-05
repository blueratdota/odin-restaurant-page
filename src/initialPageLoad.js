export default function initialPageLoad (){

    const content = document.querySelector('#content')

    const header1 = document.createElement('h1')
    const img1 = document.createElement('img')
    const para1 = document.createElement('p')

    header1.textContent = 'This is the homepage'
    img1.src = "../src/fried_rice.jpg"
    para1.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores suscipit commodi unde officia reiciendis, maiores natus ipsam quos dolorem pariatur?'

    content.appendChild(header1)
    content.appendChild(img1)
    content.appendChild(para1)

}