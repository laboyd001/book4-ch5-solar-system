console.log("Howdy")

const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")

// console.log(planetEl)

let p = ""
planets.forEach(item => {
   p += `<p>${item}</p>`
  planetEl.innerHTML = p
})

// console.log(p)

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/


function upperCase (planetArr) {
  return planetArr.map(function(word){
    return (word.charAt(0).toUpperCase()+ word.slice(1))
  })
}


const newPlanets = upperCase(planets)
console.log("uppercase planets:", newPlanets)
/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const ePlanets = planets.filter(function(planet){
  return planet.includes('e')
})

console.log("planets with E:", ePlanets)

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const words2 = words.reduce((accumulator, word) => {
  return accumulator + " " + word
})

console.log("sentence from an array:", words2)