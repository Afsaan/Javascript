//Array

const arr_number = [1,2,3,4,5]
const arr_string = ['a' , 'afsan' , 'khan']
const arr_mixed = [1,2,'afsan' , 4]

console.log(arr_number)
console.log(arr_string)
console.log(arr_mixed)


// to get length of arrays
console.log(`length of array number is ${arr_mixed.length} , length of arr_string is ${arr_string.length} and length of arr_mixed ${arr_mixed.length}`)


// index of
const value = arr_number.indexOf(3)
console.log(value)


// mutating or modifying
const marks = [22,33,44,55,66]
console.log(marks)

//push - adds the element at the end of an array
marks.push(45)
console.log(marks)


//pop - removes the element from the end of an array
marks.pop()
console.log(marks)


// unshift - adds the element at the starting of an array
marks.unshift(786)
console.log(marks)

//shift - removes the element from the starting of an array
marks.shift()
console.log(marks)

//splice - to remove the element from an array
marks.splice(1,3) //this means that remove the 3 element from the inex 1
console.log(marks)

//reverse - it reverses the given array
marks.reverse()
console.log(marks)


//concat - join one array with another
let mark2 = [34,78,45]
// let final_marks = marks.concat(marks2) //uncomment this to see the error
//this will throw and array because marks one defined as const and it cannit be changes 

let mark1 = [44,66,33]
let final = mark1.concat(mark2)
console.log(final)



//objects

let myobj = {
    name : 'Afsan',
    gender : 34,
    ishandsome : true,
    marks : [45,67,23,44]
}

console.log(myobj)
console.log(myobj.name)
console.log(myobj.gender)


let myobj_1 = {
    'name' : 'Afsan',
    'gender' : 34,
    'ishandsome' : true,
    'marks' : [45,67,23,44]
}

console.log(myobj_1['name'])

console.log(typeof(myobj_1))
