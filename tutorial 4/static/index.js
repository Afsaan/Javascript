
// type conversion
let number = 45
console.log(' datatype is ' + (typeof number));
let str_number = String(number)
console.log(' datatype is ' + (typeof str_number));


let arr = [1,2,3,4,5,6,7]
console.log(' datatype is ' + (typeof arr));
console.log(String(arr));
console.log(' datatype is ' + (typeof String(arr)));



let ishandsome = true;
console.log(' datatype is ' + (typeof ishandsome));
console.log(String(ishandsome))
console.log(' datatype is ' + (typeof String(ishandsome)));


let number_1 = 23
console.log(' datatype is ' + (typeof number_1.toString()));

let string_1 = '123'
console.log(' datatype is ' + (typeof string_1));

string_1 = Number(string_1)
console.log(' datatype is ' + (typeof string_1));


// parseInt and parseFlaot

//parseInt
var number_2= 32.3
console.log(' number is ' + number_2);
number_2 = parseInt(number_2)
console.log(' number is ' + number_2);

//parseFloat
var number_3 = 32.2
console.log(' number is ' + number_3);
number_3 = parseFloat(number_3)
console.log(' number is ' + number_3);


//to fixed
var number_4 = 32.0425
console.log(' number is ' + number_4);
console.log(number_4.toFixed(2))



//type coersion

let var1 = '234'
let var2 = 45
console.log(var1 + var2)


let var3 = Number(var1)
let var4 = 34
console.log(var3 + var4)
