import _ from 'lodash';
import { home } from './home';
import { menu } from './menu';
import { about } from './about';

home()


function tabSwitching() {
    console.log("working on  tab switching")

    let homeBtn = document.getElementById("homeBtn")
    //console.log(homeBtn)
    homeBtn.addEventListener("click", (e) => {
        console.log(e.target)
        let html = "";
        let content = document.getElementById("content");
        content.innerText = html;
        home()
    })


    let aboutBtn = document.getElementById("aboutBtn")
    //console.log(menuBtn)
    aboutBtn.addEventListener("click", (e) => {
        console.log(e.target)
        let html = ""
        let content = document.getElementById("content");
        content.innerText = html
        about()
    })


    let menuBtn = document.getElementById("menuBtn")
    //console.log(menuBtn)
    menuBtn.addEventListener("click", (e) => {
        console.log(e.target)
        let html = ""
        let content = document.getElementById("content");
        content.innerText = html
        menu()
    })

}

tabSwitching()