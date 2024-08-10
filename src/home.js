import cafeImage from './cafe.jpg'

export function home() {

    let content = document.getElementById("content")
    console.log(content)
    
    let hOne = document.createElement("h1")
    hOne.innerText = "Welcome, Resturant Home Page"
    
    content.appendChild(hOne)
    
    let img = document.createElement("img");
    img.setAttribute("id", "cafePNG")

    let myCafe = new Image();
    console.log(myCafe)
    myCafe.src = cafeImage
    console.log(cafeImage)
    //img.src = "/src/cafe.jpg";
    content.appendChild(myCafe)

    document.getElementById("cafePNG").style.width = "200px";
    document.getElementById("cafePNG").style.width = "400px";
    
    let paraOne = document.createElement("p")
    paraOne.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae optio unde possimus pariatur earum ipsum molestias quo doloribus? Molestiae ad tempora tempore blanditiis placeat quos a, obcaecati qui quis voluptates."
    content.appendChild(paraOne)
    
    let paraTwo = document.createElement("p")
    paraTwo.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae optio unde possimus pariatur earum ipsum molestias quo doloribus? Molestiae ad tempora tempore blanditiis placeat quos a, obcaecati qui quis voluptates."
    content.appendChild(paraTwo)
    
    let headTwo = document.createElement("h2")
    headTwo.innerText = "Buy Food Here";
    content.appendChild(headTwo)
    
    let paraThree = document.createElement("p")
    paraThree.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae optio unde possimus pariatur earum ipsum molestias quo doloribus? Molestiae ad tempora tempore blanditiis placeat quos a, obcaecati qui quis voluptates."
    content.appendChild(paraThree)
    
}
    