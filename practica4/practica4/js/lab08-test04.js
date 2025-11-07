import {csv, cities, galleries, colorsAsString} from './data.js'

// convert comma-separated values into an array
let countries= csv.split(",");
console.log(countries)

// convert array into delimited string
let delimitedString=countries.join()
console.log(delimitedString)

// check if these are arrays
console.log(`countries es array? ${Array.isArray(countries)}  y delimitedString es array? ${Array.isArray(delimitedString)}`)

//  sort a simple array 
console.log(countries.sort())

// reverse the sort
console.log(countries.reverse())

// remove the first element
console.log(countries.shift())

// remove the last element
console.log(countries.pop())

// add new elements to the front of the array
countries.unshift('México', 'Brasil')
console.log(countries)

// search for element
console.log(countries.includes('Germany'))

// search for element index
console.log(countries.indexOf('Germany'))

// make a new array by extracting from another array
countries.splice(4,1, 'Argentina')
console.log(countries)

console.log('----------cities whose continent=="NA"-----------');
// use a loop to output all cities whose continent=="NA"
cities.forEach((city)=>{
    if (city.continent==="NA") console.log(`${city.city} from ${city.country}`)
})

console.log('----------gallery names whose country=="USA"-----------');
// use a loop to output gallery names whose country=="USA"
galleries.forEach((gallery)=>{
    if (gallery.location.country === "USA") console.log(gallery.name)
})


console.log('----------JSON colorsAsString to js object-----------');
// convert JSON colorsAsString to js object
const colors = JSON.parse(colorsAsString);
console.log(colors)

// use a loop to output color name if luminance < 75
console.log('----------color name if luminance < 75-----------');
colors.forEach((color)=>{
    if (color.luminance < 75) console.log(color.name)
})

// use two nested loops - outer: loop thru colors


console.log('---------------------');

/* use a loop output using document.write an unordered
   list of links to the galleries in the galleries array.
   Make the label of the link the name property, and the href
   the url property */

// este lo hice en el archivo "list-gallery.js" ya que como este es type="modul" en el html, no me deja usar document.write
