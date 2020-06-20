a= document;


console.log(a.getElementById('header'))

console.log(a.getElementById('header').className)

console.log(a.getElementById('header').textContent)
console.log(a.getElementById('header').style.color = 'green')

console.log(a.getElementById('header').innerText = 'changed')

console.log(a.getElementById('header').innerHTML = '<b>hello</b>')

// # is for id and . is for class
console.log(a.querySelector('#header'))
console.log(a.querySelector('.child'))
console.log(a.querySelector('h1'))


