class Product1 {
  name;
  pirce;
  qty;
  balance;
  bill = () => {
    this.balance = this.qty * this.pirce;
  };
  discount = () => {
    this.balance = this.pirce * this.qty * 0.1;
  };
  total = () => {
    return this.balance;
  };
}
class Product2 {
  name;
  pirce;
  qty;
  bill = () => {
    return this.qty * this.pirce;
  };
  discount = () => {
    return this.pirce * this.qty * 0.1;
  };
}
class Product3 {
  name;
  pirce;
  qty;
  bill = () => {
    return this.qty * this.pirce;
  };
  discount = () => {
    return this.pirce * this.qty * 0.1;
  };
}
//Defualt export
//   export default Product3
// //Name export
// export { Product1,Product2}
module.exports = Product1;
