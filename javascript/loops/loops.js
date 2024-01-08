// if you don't know how many itractions are there
let ip=100;
let house=100;

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

function addNumber(){
    let ans=0
    for(var i=0; i<arguments.length; i=i+1){
        ans= ans+arguments[i]
    
    }
    return ans

}

let result=addNumber(1,23,434,1231)

console.log(result)
