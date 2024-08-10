

export function menu(){
    let content = document.getElementById("content");
    let headOne = document.createElement("h1");
    headOne.innerText = "Menu Page"

    content.appendChild(headOne)

    let img = document.createElement("img")
    img.setAttribute("id", "imgDiv")
    console.log(img)

    img.src = "/src/menu.jpeg"
    content.appendChild(img)

    document.getElementById("imgDiv").style.height = "300px"
    document.getElementById("imgDiv").style.width = "400px"

    let headTwo = document.createElement("h2")
    headTwo.innerText = "Above is the menu to choose from"
    content.appendChild(headTwo)

    let paraOne = document.createElement("p")
    paraOne.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae optio unde possimus pariatur earum ipsum molestias quo doloribus? Molestiae ad tempora tempore blanditiis placeat quos a, obcaecati qui quis voluptates."
    content.appendChild(paraOne)

    let paraTwo = document.createElement("p")
    paraTwo.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae optio unde possimus pariatur earum ipsum molestias quo doloribus? Molestiae ad tempora tempore blanditiis placeat quos a, obcaecati qui quis voluptates."
    content.appendChild(paraTwo)
}