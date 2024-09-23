// Write your DOM code here

/* I was told to use arrow notation instead to make it work the simple way
This file was meant to test that. it failed. */

// The problem is that ALL classes are applied as the function is
// Immedietly invoked

const redButton = document.querySelector('.red')
const whiteButton = document.querySelector('.white')
const blueButton = document.querySelector('.blue')
const yellowButton = document.querySelector('.yellow')

const setColor = (colorClass) => {
    document.body.classList.toggle(colorClass)
}


redButton.addEventListener('click', setColor('red'))
whiteButton.addEventListener('click', setColor('white'))
blueButton.addEventListener('click', setColor('blue'))
yellowButton.addEventListener('click', setColor('yellow'))