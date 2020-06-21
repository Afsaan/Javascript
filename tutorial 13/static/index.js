// addding event listner to heading_1
let heading_1 = document.getElementById('header_1')
heading_1.addEventListener('click', function () {
  console.log('i was clicked')
})


// adding event lister to heading_2
let heading_2 = document.getElementById('header_2')
heading_2.addEventListener('click', function () {
  location.href = '//www.google.com'
})


//how to take event object in a fucntion
let heading_3 = document.getElementById('header_3')
heading_3.addEventListener('click', function (e) {
  console.log(e)
})


// event listner on forms
let form_button = document.getElementById('btn')
form_button.addEventListener('click' , fun1);

function fun1(e)
{
  console.log('i was pressed')
}