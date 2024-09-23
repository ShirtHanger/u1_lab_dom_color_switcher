// Write your DOM code here

const redButton = document.querySelector('.red')
const whiteButton = document.querySelector('.white')
const blueButton = document.querySelector('.blue')
const yellowButton = document.querySelector('.yellow')

const setColor = (colorClass) => {
    document.body.classList.toggle(colorClass)
}

/* function setColor(colorClass) {
    document.body.classList.toggle(colorClass)
    // console.log(`Changed to ${colorClass}`)
} */



redButton.addEventListener('click', setColor('red'))
whiteButton.addEventListener('click', setColor('white'))
blueButton.addEventListener('click', setColor('blue'))
yellowButton.addEventListener('click', setColor('yellow'))