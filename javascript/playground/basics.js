const list = [1,2,3,4,5,6,7]
const list2 =[8,9,10,...list,11,12]

const fullList=list.concat(list2)
console.log(list2)

const obj1 ={
    name: 'Abdus Samad',
    age: '23',
    marks: 30
}
const obj2={
    ...obj1,
    name1: '3.2',
    semester:6
}
console.log(obj2 )
