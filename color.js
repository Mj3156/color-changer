const color =["red" , "green" , "blue" ,"rgba(78,122,222,1)","#f3e4a2"]

const myDiv = document.getElementById("my-div")
const myBtn = document.getElementById("btn")

myBtn.addEventListener("click", () => {
    myDiv .textContent = "Background-color : "
    document.body.style.backgroundColor = randomColor()
})
let ranColor =""
function randomColor() {
    ranColor = color[Math.floor(Math.random() * color.length)]
    myDiv.textContent += ranColor
    console.log(ranColor)
    return ranColor
    
}


// const turnDark= ()=> {
//     if (document.body.style.backgroundColor === "") {
//         document.body.style.backgroundColor ="#333"
//         document.body.style.color = "rgb(189, 239, 236)" //white
//         myBtn.style.color = "rgb(189, 239, 236)"
//     } else {
//         document.body.style.backgroundColor ="red"
//         document.body.style.color = "#fff"     
//     }
// }

// random color for body on load



