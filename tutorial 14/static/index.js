//to add the key value pair in the local storage
localStorage.setItem('Name' ,'Afsan')
localStorage.setItem('Name2' ,'rahul')
console.log(localStorage)


// to get the value with key
let name = localStorage.getItem('Name')
console.log(name)


// to clear the local storage
// localStorage.clear()


// to remove a particular key value pair
localStorage.removeItem('Name')



// to store array in value
let name_list= ['Afsan' , 'Rahul' , 'Anshul']
localStorage.setItem('list of name' , name_list)

localStorage.setItem('list_of_name_2' , JSON.stringify(name_list))



// to retrieve the array
let names = localStorage.getItem('list_of_name_2')
console.log(names)
console.log(typeof names)


let array_names = JSON.parse(localStorage.getItem('list_of_name_2'))
console.log(array_names);
console.log(typeof array_names)


//session stotage is same as local storage. the only difference is when you close the browser the session storage get deleted whereas local storage remians
