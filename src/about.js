//import aboutImage from './about.jpg'


export function about(){
    let content = document.getElementById("content");
    let headOne = document.createElement("h1");
    headOne.innerText = "About Page"

    content.appendChild(headOne)

    let img = document.createElement("img")
    img.setAttribute("id", "imgAbout")
    console.log(img)

    //let myAbout = new Image();
    //myAbout.src = aboutImage
    img.src = "/src/about.jpg"
    content.appendChild(img)

    document.getElementById("imgAbout").style.width = "200px";
    document.getElementById("imgAbout").style.height = "400px";


    let paraOne = document.createElement("p")
    paraOne.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae optio unde possimus pariatur earum ipsum molestias quo doloribus? Molestiae ad tempora tempore blanditiis placeat quos a, obcaecati qui quis voluptates."
    content.appendChild(paraOne)

    let paraTwo = document.createElement("p")
    console.log(paraTwo)
    paraTwo.innerText = "Test Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae optio unde possimus pariatur earum ipsum molestias quo doloribus? Molestiae ad tempora tempore blanditiis placeat quos a, obcaecati qui quis voluptates"
    
    
    content.appendChild(paraTwo)

}

