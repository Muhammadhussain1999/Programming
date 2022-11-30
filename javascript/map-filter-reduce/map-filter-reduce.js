const arr = [
  {
    id: 1,
    name: "The Russian",
    type: "fiction",
    available: true,
    price: 2020,
  },
  {
    id: 2,
    name: "Just as I Am",
    type: "non-fiction",
    available: false,
    price: 2020,
  },
  {
    id: 3,
    name: "The Vanishing Half",
    type: "fiction",
    available: true,
    price: 200,
  },
  {
    id: 4,
    name: "The Midnight Library",
    type: "fiction",
    available: true,
    price: 200,
  },
  {
    id: 5,
    name: "Untamed",
    type: "non-fiction",
    available: true,
    price: 200,
  },
  {
    id: 6,
    name: "Viscount Who Loved Me",
    type: "fiction",
    available: true,
    price: 200,
  },
];

let double = [];
for (let i = 0; i < arr.length; i++) {
  double.push(arr[i] * 2);
}
console.log(double);
const arr1 = [1, 2, 4, 5, 6, 7];
function double(x) 
 x * 2;

let output = arr1.map(double);
console.log(output);
//const output = arr[0];

// const output = arr.reduce(function (acc, curr) {
//   if (acc[curr.id]) {
//     acc[curr.id] = acc[curr.id]++;
//   } else {
//     acc[curr.id] = 1;
//   }
//   return acc;
// }, {});
//const output = arr.filter((filter) => filter.price);
// const output = arr.reduce((acc, curr) => {
//   return acc + curr.price;
// }, 0);
// console.log(output);

let person = { firstName: "jhon", localname: "elia" };
// console.log(person.firstName[0]);
let unique = (x) => {
  if (person.firstName == x) {
    console.log(` ${person.firstName != x} cant print the first `);
  } else {
    console.log((person.firstName = x));
    console.log(person);
  }
};

unique("jhon");
