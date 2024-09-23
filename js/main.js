// Write your DOM code here

const redButton = document.querySelector('.red')
const whiteButton = document.querySelector('.white')
const blueButton = document.querySelector('.blue')
const yellowButton = document.querySelector('.yellow')

// const setColor = (colorClass) => {
//     document.body.classList.toggle(colorClass)
// }

// function setColor(colorClass) {
//     document.body.classList.toggle(colorClass)
//     // console.log(`Changed to ${colorClass}`)
// }

/* I cannot get it to work unless I define each color toggle seperately */

const toggleRed = () => {
    // document.body.classList.toggle('red')
    document.body.style.backgroundColor = 'red'
}

const toggleWhite = () => {
    // document.body.classList.toggle('white')
    document.body.style.backgroundColor = 'white'
}

const toggleBlue = () => {
    // document.body.classList.toggle('blue')
    document.body.style.backgroundColor = 'blue'
}

const toggleYellow = () => {
    // document.body.classList.toggle('yellow')
    document.body.style.backgroundColor = 'yellow'
}



// redButton.addEventListener('click', setColor('red'))
// whiteButton.addEventListener('click', setColor('white'))
// blueButton.addEventListener('click', setColor('blue'))
// yellowButton.addEventListener('click', setColor('yellow'))

/* Bugs
1. Red refuses to work unless it is the first button clicked,
When you click another button, Red throws a fit and refuses to toggle

2.*/

redButton.addEventListener('click', toggleRed)
whiteButton.addEventListener('click', toggleWhite)
blueButton.addEventListener('click', toggleBlue)
yellowButton.addEventListener('click', toggleYellow)