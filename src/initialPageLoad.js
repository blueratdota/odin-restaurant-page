import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

function createTemplate(){
    const body = document.querySelector('body')

    const header = document.createElement('header')
    const nav = document.createElement('nav')
    const div = document.createElement('div')
    div.setAttribute("id","content")

    const home = document.createElement('button')
    home.textContent = "Home"
    home.setAttribute("id","home")
    home.classList.add("active")

    const menu = document.createElement('button')
    menu.textContent = "Menu"
    menu.setAttribute("id","menu")

    const about = document.createElement('button')
    about.textContent = "About"
    about.setAttribute("id","about")

    nav.appendChild(home)
    nav.appendChild(menu)
    nav.appendChild(about)
    
    header.appendChild(nav)
    body.appendChild(header)
    body.appendChild(div)

}





function createContainer(){
    const container = document.createElement('div')
    container.classList.add("container");
    return container;
}

function clearContainer(){
    const content = document.querySelector('#content')
    const container = document.querySelector('.container')
    content.removeChild(container)
    content.appendChild(createContainer())
}

function addBtnFunction(){
    const homeBtn = document.querySelector('#home')
    const menuBtn = document.querySelector('#menu')
    const aboutBtn = document.querySelector('#about')



    homeBtn.addEventListener('click',function(e){
        clearContainer()
        loadHome()


    })
    menuBtn.addEventListener('click',function(e){
        clearContainer()
        loadMenu()


    })
    aboutBtn.addEventListener('click',function(e){
        clearContainer()
        loadAbout()


    })
}

function setButtonActive(e){ //for future use
    const buttons = document.querySelectorAll('button')
    buttons.forEach(button=>{
        if(button !== e){
            button.classList.remove('active')
        }
        else{
            button.classList.add('active')
        }
    })
}




function initialPageLoad (){
    createTemplate()
    addBtnFunction()

    const content = document.querySelector('#content')
    content.appendChild(createContainer())
    loadHome() //start at home page

}

export default initialPageLoad