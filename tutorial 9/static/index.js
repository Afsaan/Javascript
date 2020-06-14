//without function

let name = 'Afsan'
let name_1= 'rahul'


console.log(`happy birthday ${name}`)
console.log(`happy birthday ${name_1}`)



//with functions
function greet(name)
{
    console.log(`happy birthday ${name}`)

}

greet(name)
greet(name_1)



//using return in functions
function greetings(name)
{
    return `happy birthday ${name}`

}

output = greetings(name)
console.log(output)
output = greetings(name)
console.log(output)




