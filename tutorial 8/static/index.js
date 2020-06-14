//for loop

console.log('for loop output')
for (i=0;i<10;i=i+1)
{
    console.log(i)
}


console.log('while output')
//while
let j = 0
while(j<10)
{
    console.log(j)
    j = j+1
}



//do while
console.log('do while output')

let p = 1
do {
    console.log(p)
    p = p+1
}while ( p < 10)



// break
for (i=0;i<10;i=i+1)
{
    console.log(i)
    if (i==3){
        break}  
}
console.log('break was executed')



//continue
for (i=0;i<10;i=i+1)
{
    console.log(i)
    if (i==3){
        continue}  
}
console.log('continue was executed')



console.log('array output was executed')
//looping through an array
let arr = [2,3,4,5,6,7,8]
arr.forEach(function(element)
{
    console.log(element)
});
console.log('done')


arr.forEach(function(element , index , array)
{
    console.log(element , index , array)
});



//or

for (i=0;i<arr.length;i++)
{
    console.log(arr[i])
}


//iteraing through an object
let obj = {
    name: 'Afsan',
    surname : 'khan'
}

for (key in obj)
{
    console.log('key in object is' + ' ' + key)
    console.log(obj[key])
}