// Different type of import
//import { Product1} from "./classes";
//import Product3,{Product2 as p} from "./classes";
//import Product3 from "./classes";
const Product1 = require("./classes");
const p1 = new Product1();
p1.name = "Saad";
p1.pirce = 10;
p1.qty = 100;
const bill = p1.bill();

const p2 = new Product1();
p2.name = "Ahmad";
p2.pirce = 100;
p2.qty = 60;
p2.bill();
p2.discount();
p2.discount();

p2.total();
console.log(p2.total());
//console.log(bill);
