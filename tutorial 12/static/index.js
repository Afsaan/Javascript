
///////////////////////////////// Adding element ////////////////////////////////

// make element in html page through javascript

let element = document.createElement('li')
console.log(element)

// add a class name to li element
element.className = 'childul'
console.log(element)

// add id to a element
element.id = 'create_id_child'
console.log(element)

element.setAttribute('title' , 'My Title')

element.innerHTML = 'this is added through javascript'


// adding this above changes to the main page
let ul = document.querySelector('ul.this')
console.log(ul)

ul.appendChild(element)




///////////////////////////////// Replacing Element //////////////////////////////
let element_2 = document.createElement('h3')
console.log(element_2)

element_2.innerText = 'this is a heading displaced through javascript'

element.replaceWith(element_2)



//////////////////////////////// Removing Element ////////////////////////////////
let element_3 = document.getElementById('myul')
element_3.removeChild(document.getElementById('child_2'))