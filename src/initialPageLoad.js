import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";


function createMain(){
    const main = document.createElement('main')
    main.textContent = 'this is main element'
    main.classList.add("main");
    // main.setAttribute("id", "main");
    return main;
}

function addBtnFunction(){
    const homeBtn = document.querySelector('#home')
    const menuBtn = document.querySelector('#menu')
    const aboutBtn = document.querySelector('#about')

    homeBtn.addEventListener('click',function(){
        console.log('home');
        loadHome()
    })
    menuBtn.addEventListener('click',function(){
        console.log('menu');
        loadMenu()
    })
    aboutBtn.addEventListener('click',function(){
        console.log('about');
        loadAbout()
    })
}




function initialPageLoad (){
    addBtnFunction()

    const title = document.createElement('h1')
    title.setAttribute("id","title")

    const content = document.querySelector('#content')
    content.appendChild(title)
    content.appendChild(createMain())

}

export default initialPageLoad