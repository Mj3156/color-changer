const hexNumbers =["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]

const myDiv = document.getElementById("my-div")
const myBtn = document.getElementById("btn")
const bodyEl = document.body


const randomHexColor = () => {
    let myNewColor = "#"
    for (let i = 0; i < 6; i++){
        myNewColor += hexNumbers[Math.floor(Math.random() * hexNumbers.length)]
    }
    console.log(myNewColor)
    myDiv.textContent += myNewColor
    return myNewColor
}

// random color for body on load
bodyEl.style.background = randomHexColor()

myBtn.addEventListener("click", () => {
    myDiv .textContent = "Background-color : "
    bodyEl.style.background = randomHexColor()
})