//log to console
// console.log('hello')
// console.log(123)
// console.log(true)
// var greeting ='hello'
// console.log(greeting)
// console.log([1,2,3,4])
// var name='Awais Shah'
// console.log(name)
// name='khan'
// console.log(name)
// var greeting;
// console.log(greeting)
// greeting='ahmad'
// console.log(greeting)
// letters , numbers,_,$ usebale
//can't start with a number

// multi word vars
// var firstName ='Jhon'

// [const person={
//     name :'saad',
//     age :16
// }
// person.name='khan'
// person.age="777"
// console.log(person);

// let val;
// val =String(555)
// val=String(4+4)
// peremetive

//String

// const name= 'jhon';
// console.log(typeof name)
// // Number
// const age=45;
// console.log(typeof age)
//  //Boolean
//  const hasKids= true;
// console.log(typeof hasKids)
// //Null
// const car=null;
// console.log(typeof car)
// // Undifined
// let test;
// console.log(typeof test)
// //symbol
// const sym=Symbol();
// //Reffrence Types- Objects
// // Array
// const hobbies= ['Movies','music'];
// console.log(typeof hobbies)
// const address ={
//     city:'boston',
//     state:'MA'
// };
// console.log(typeof address)
// const today=new Date();
// console.log(today)
// console.log(typeof today)
// convention
// let val;
// //Numbers to String
// val=String(55555)
// val=String(44)
// console.log(val)
// //console.log(typeof val)
// console.log(val.length)
// //Bool to String
// val = String(true)
// console.log(val)
// console.log(typeof val)
// console.log(val.length)
// //Date to String
// val= String(new Date())
// console.log(val)
// console.log(val.length)
// val=String([1,2,3,4,5]);
// console.log(val)
// console.log(typeof val)
// console.log(val.length)
// toString()

// val=(5).toString();
// val=(true).toString();
// // Strings to Numbers
// val=Number('5');
// val=Number(true)
// val=Number(false)
// val=Number(null)
// val=Number('Hello')
// val=Number([1,2,3,4,5])

//output
// console.log(val)
// console.log(typeof val)
// //console.log(val.length)
// console.log(val.toFixed(2))

// const va11 = String(5);
// const val2 = 6;
// const sum = Number(va11 + val2);
// console.log(sum);
// console.log(typeof sum)

// const num1=100;
// const num2=60;

// let val;

// //Simple Math Operations

// val = num1 + num2;
// val = num1 - num2;
// val = num1 * num2;
// val = num1 % num2;
// val = num1 / num2;

// //Math Object

// val =Math.PI;
// val =Math.E;
// val = Math.round(2.4)
// val = Math.ceil(2.4)
// val = Math.floor(2.4);
// val = Math.sqrt(4)
// val = Math.abs(-7)
// val = Math.pow(8,3)
// val = Math.min(1,2,3,-4,5,6,7,8)
// val = Math.max(1,2,3,4,5,6,7,8)
// val = Math.random();
// val =Math.floor(Math.random() * 20 +1);

//console.log(val)

//********************/

// --------String method concetitnation-----------
// const firstName = 'William';
// const secondName = 'shah';
// const age =99
// const str='Hello, there my name is saad'
// const tags='web design, web development ,software testing'
// let val ;
// // Concatination
// val= firstName + ' ' +secondName;

// val = 'Saad '
// val += 'khan'
// val =' Hello, my name'

// val='hello, my name is '+firstName+' and I am '+age+ ' old';
// //Escaping
// val= 'That\'s awesom, I can\'t wait';

// //length
// val=firstName.length;
// //concat
// val=firstName.concat('',secondName);

// //Change case
// val=firstName.toUpperCase();
// val = secondName.toLocaleLowerCase();
// val = firstName[2];

// //indexOf()
// val = firstName.indexOf('W');
// val = firstName.lastIndexOf('W')

// //charAt()
// val = secondName.charAt('2')
// //Get last char
// val =secondName.charAt(secondName.length -1);
// //substring
// val = secondName.substring(0,2)
// //slice
// val = secondName.slice(0,3)
// val = secondName.slice(-3);

// //split()
// val =str.split('');
// val = tags.split(',')
// //Replace
// val = str.replace('Hello','hy')
// //includes()
// val = str.includes('Hello')

// // console.log(val)
// const name = 'jhon';
// const age= 30;
// const job ='web Developmeer'
// const city='Miami'
// const address='Peshawar'
// let html;
// //Without template string (es5)
// html='<ul><li>Name: '+ name + '</li><li>Age: ' + age +'</li><li>Job: ' + job + '</li><li>City: ' + city +'</li></ul>'
// html='<ul>'+
// '<li>Name: '+ name + '</li>'
// '<li>Age: ' + age +'</li>'
// '<li>Job: ' + job +'</li>'
// '</ul>';
// function hello(){
//     return 'hello';
// }
// html=`
// <ul>
// <li>Name: ${name}</li>
// <li>Age:  ${age}</li>
// <li>Job:  ${job}</li>
// <li>city: ${city}</li>
// <li>Adress: ${address}</li>
// <li>Expression: ${2+2}</li>
// <li>Function: ${hello()}</li>
// <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
// `;

// document.body.innerHTML=html

//Create Arrays
// const number=[1,2,3,4,5,6]
// const number2=new Array(100,22,45,13,76,54)
// const fruit=['Apple','Banana','Orange','Pear']
// const mixed =[22,'Hello',true,undefined,null,{a:1,b:1},new Date()];

// let val;

// //Get array length
// val=number.length

//Check if array

//val=Array.isArray(number);
//Get signal value
//val=number[0]
//val=number[2]
//Insert into array
//number[2]=100;
//val =number.push(77)
//Find index of value
//val = number.indexOf(6)

//MUATING ARRAYS

//Add on the end
//number.push(250)
//Add on the front
//number.unshift(120)
//Take off from the end
//number.pop()
//Take of from front
//number.shift()
//Splice
//number.splice()

//CONCATINATE array

// val = number.concat(number2)
// //Sort array
// val= fruit.sort()
// val=number2.sort()

// // Use the 'Compare function
// val = number2.sort(function(x,y){
//     return x-y;
// });
//Reverse sort
//val=number2.sort((a,b) => b-a);
//Find
// function under50(num){
//     return num <50;
// }
// val=number2.find(under50)
// val = number.filter(function(value){
//     return value >=5;
// });
// val= number2.map(function(val) {
//     return {value:val*val}
// })

// console.log(number)
// console.log(val)

// const person ={
//     firstName:'Awais',
//     lastName:'Shah',
//     age:50,

//    Address:{
//         city:'Peshawar',

//         State:'Pakistan',

//     },
//     hobbies:['music','sports'],

//      getBirthYear: function()
//      {
//          return 1999 -this.age

//     }

// }
// let val;
// val=person;
// //Get specific value
// val=person.firstName;
// val=person['firstName'];
// val=person.age;
// val=person.dateOfbirth;
// val = person.hobbies[1];
// val=person.Address.city;
// val=person.getBirthYear();
// const people=[
//     {name:'saad',age:30},
//     {name:'Awais',age:49},
//     {name:'Ali',age:49}
// ];
// for(let i=0;i<people.length; i++){
//     console.log(people[i].name);
// }
// console.log(val)
// let val;

// const today=new Date()
// let birthday=new Date('9-10-1981 11:25:00');
// birthday =new Date('september 10 1981')

// val=birthday.getMonth();
// val=today.getDate();
// val=today.getDay();
// val=today.getFullYear();
// val=today.getHours();
// val=today.getMinutes();
// val=today.getMilliseconds();
// val=today.getTime();
// val=birthday.setMonth(2);

// val=birthday.setDate(20)
// val=birthday.setFullYear(2022)
// val=birthday.setHours(16)
// val=birthday.setMinutes(16)
// console.log(birthday)
//console.log(today)

// if(something){
//     do something
// }else{
//     do something else
// }
const id = 100;
//EQUAL TO
// if(id == 101){
//     console.log('CORRECT');
// }   else {
//     console.log('INCORRECT');
// }
// //NOT EQUAL TO
// if(id != 101){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECtbbv');
// }
// // Equal value and type
// if(id ===100){
//     console.log('correct ')
// }else
// {
//     console.log('Incorrect')
// }
// if(id !== 101){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECtbbv');
// }
// if(typeof id!== 'undefined'){
//     console.log(`The ID is ${id}`)
// }else{
//     console.log('NO id')
// }
// //Greater OR lESS THAN
// if(id >100){
//     console.log('Correct')
// }else {
//     console.log('Correct')
// }

// const color='blue';

// if(color === 'red'){
//     console.log('Color is red');
// }else if(color === 'blue'){
//     console.log(`Color is ${color}`)
// }else {
//     console.log('Color is not blue')
// }
//LOGICAL OPERATORS
// const name='Awais'
// const age = 20;
//  //AND &&
// if(age > 0 && age < 20 ){
//     console.log(`${name} is a child` );
// }else if (age >= 13 && age <= 19 ){
//     console.log(`${name} is a teenager`);
// } else {
//     console.log(`${name} is a adult`)

// }
// // OR ||
// if(age < 16 || age > 65){
//     console.log(`${name} can not run in race`);
// }else {
//     console.log(`${name} is registered for the race`);

// }
// //TERNARY OPERATOR
// console.log(id === 100 ? 'CORRECT' : 'INCRRECT');

// //WITHOUT BRACES
// if( id===100)
//     console.log('CORRECT');
// else
//     console.log('NOTCORRECT');
// let color;
// switch (color) {
//   case "red":
//     console.log("Color is red");
//     break;
//   case "blue":
//     console.log("Color is blue");
//     break;
//   case "green":
//     console.log("Color is green");
//     break;
//   default:
//     console.log("No Color");
//     break;
// }
// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
// }
// console.log(`Today is ${day}`);

//FUNCTION DECLARATIONS
//function greet(firstName = "jhon", lastName = "doe") {
  // if(typeof firstName === 'undefined'){firstName = 'Awais'}
  // if(typeof lastName === 'undefined'){lastName = 'Shah'}
  //console.log('Hello')
//   return "Hello " + firstName + " " + lastName;
// }
// //console.log(greet());

// // FUNCTION EXPRESSION
// const square = function (x = 3) {
//   return x + x;
// };
//console.log(square(33));

// IMMEDIATLEY INVOKABLE FUNCTION EXPRESSION -IIFEs
// (function(){
//   console.log('IFEs Ran....')

// })('Brad');
// (function(name){
//   console.log('Hello'+' '+name)

// })('Brad');

//PROPERTIES METHODS
// const todo ={
//   add:function(){
//     console.log('Add todo...')
//   },
//   edit : function(id){
//     console.log(`Edit to do ${id}`);
//   }
// }
// todo.delete = function(){
//   console.log('Delete todo...');
// }

// todo.add();
// todo.edit(22);
// todo.delete();

// FOR LOOP
// for(let i = 0; i < 10; i++){
//   //console.log('Number '+i);
//   if(i === 2){
//     console.log(' 2 is my favorite number');
//     continue;
//   }
//   if(i === 5){
//     console.log('Stop  the loop')
//     break;
//   }
//   console.log('Number '+ i)
// }

//WHILE LOOP
// let i =0;
// while(i< 10){
//   console.log('Number '+ i)
//   i++

// }
// DO WHILE

// let i = 110;
// do {
//   console.log('Number '+i);
//   i++;
// }
// while(i <10);

//LOOP THROUGH ARRAY
// const car = ["Ford", "Chevy", "Honda", "Toyota"];
// // for(let i= 0; i<car.length; i++){
// //   console.log(car[i]);
// // }

//forEach
// car.forEach(function (car , index,array) {
//   console.log(`${index}:${car}`);
//   console.log(array);
// });

// // MAP
// const user = [
//   {id:1, name: 'saad'},
//   {id:2, name: 'Awais'},
//   {id:3, name: 'Uzair'},
// ]
// const ids = user.map(function(user){
//   return user.ids
// });
// console.log(ids);

//FOR AND LOOP
// const user= {
//   firstName : 'Jhon',
//   lastName : 'Doe',
//   age :40,
//   birthday:function(){
//     return 100 - this.age

//   }
// }
// for(let x in user){
//   console.log(`${x} : ${user[x]}`);
// }
// console.log(user.birthday())

//WINDOW METHODS / OBJECT / PROPERTIES
//Alert
//alert('Hello World')

//Prompt
// const input=prompt();
// alert(input);

// //Confirm
// if(confirm('Are You sure')){
//   console.log('Yes')
// }else{
//   console.log('NO')
// }
// let val;

// //Outer height and width
// val= window.outerHeight;
// val= window.outerWidth;


// //Inner height and width

// val = window.innerHeight;
// val = window .innerWidth;


// //Scroll points
// val = window.scrollY;
// val = window.scrollX;

// val = window.location;
// val = window.location.hostname;
// val = window.location.href
// val = window.location.search;

// //val= window.location.reload();
// //Redirected
// //window.location.href = 'https://google.com'
// //Reload
// //window.location.reload();

// // History Object  

// //window.history.go();
// val = window.navigator;
// console.log(val)

//Globle Scope
var a = 1;
let b = 2;
const c = 3;

// function test(){
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function Scope ', a , b ,c)
// }
// test();

// if(true){
//   //Block Scope
//   var a = 6;
//   let b = 7;
//   const c = 8;
//   console.log(' IF Scope', a , b ,c)
// }


for( var a=0; a < 10; a++){
  console.log(`${[a]}`)
}
console.log(' Globle scope',a, b, c)