// if you don't know how many itractions are there
// let ip=100;
// let house=100;

// while(true) {
// ip=ip+ 1;
// console.log('Steps '+ip)
// if(ip ==10){
//     console.log('loops end '+ ip)
//     break 
// }
// }

// DO while
// do {
//     ip=ip+ 1;
// console.log('Steps '+ip)
// } while(ip <= house)
// let guess=0
// let number=40
// do{
//     guess =parseInt(prompt("Enter A Number"))
//     if(guess == number){
//         alert('you Won')
//         break;
//     }
// }while(guess !=0)

// function add(num1,num2){
//     return num1+num2;
// }

// let a=add(2,3)
// console.log('The users addded to the', a)

//ulimited Arguments accepts 
// aurguments only works in simple functions

// function addNumber(){
//     let ans=0
//     for(var i=0; i<arguments.length; i++){
//         ans= ans+arguments[i]
    
//     }
//     return ans

// }

// let result=addNumber(1,23,434,1231)

// console.log(result)

//spread operator
// function addNumberv2(...numbers) {
//     let ans=0
// for(var i=0; i<numbers.length; i++) {
//     ans= ans+numbers[i]
// }
// return ans
// }
// let result2=addNumberv2(1,23,434,1231,23123)
// console.log(result2)


//Arrow Functions

// const newFunction=()=>{
//     console.log('Hello World')
// }
// newFunction()
// const oldFunction=(a,b)=> a+b

// console.log(oldFunction(2,3))

// const newFunctionv2=(...nums)=>{
//     console.log(nums)
// }

// newFunctionv2(1,2,3)

//hoisting only support in normal functions in arror first define and than call function

// const newFunctionv3=()=>{
//     console.log('Hello World')
// }
// newFunctionv3()
// In arror function the this keywords refers to window object where as in  normal function it binds to the object where it's defined



// const obj={
//     a:10,
//     b:20,
//     newFunction:()=>{
//         console.log(this)
//     }
// }

// obj.newFunction()


// high order functions



// function add(a,b,cd){
//   let result=a+b;
//   cd(result) 
// return ()=> result; 
// }
// add(2,4,function(val){
//     console.log(val)
// })

// let function1=add(2,4,()=>{})
// console.log(function1())

// const students=["saad", "Osama","ali"]
// function print(n){
// console.log(n)
// }
// students.forEach((n)=>console.log(n))
// students.map((val)=>{console.log(val)})

// const arr1=[1,2,3,4,5,6,7,8]

// let calculatted =arr1.map((val)=>  val*2)

// console.log(calculatted)

// find

// let ans=arr1.findIndex((val)=> val=== 8)

// console.log(arr1[ans])

// let newArr=arr1.filter((val)=>val%2==0 )
// newArr=arr1.slice(2,6)
// newArr=arr1.splice(4,3)
// console.log(newArr)
// console.log(arr1)
alert("Hey there!")
console.log(document)

