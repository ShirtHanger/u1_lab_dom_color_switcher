// Write your DOM code here

/* I was told to use arrow notation instead to make it work the simple way
This file was meant to test that. it failed. */

// The problem is that ALL classes are applied as the function is
// Immedietly invoked

// UPDATE: IT WORKS NOW!

const redButton = document.querySelector('.red')
const whiteButton = document.querySelector('.white')
const blueButton = document.querySelector('.blue')
const yellowButton = document.querySelector('.yellow')

const setColor = (colorClass) => () => { // Ashley said this would fix it, no clue how...
    document.body.classList.toggle(colorClass)
    // This makes it an anonymous function, meaning it must be specifically
    // Called to execute, not execute immedietly
    // Think of it as a container, will not execute
    // Unless you call it
}


redButton.addEventListener('click', setColor('red'))
whiteButton.addEventListener('click', setColor('white'))
blueButton.addEventListener('click', setColor('blue'))
yellowButton.addEventListener('click', setColor('yellow'))