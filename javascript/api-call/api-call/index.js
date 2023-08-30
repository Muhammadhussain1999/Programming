// const gitHubApi = "https://api.github.com/users/akshaymarch7";
// const user = fetch(gitHubApi);

// console.log(user);
// orderId(function (orderId) {});

// oderId({});

// user.then(function (data) {
//   console.log(data);
// });

// const cart = ["shoes", "pants", "kurta"];
// createOder(cart, function (orderId) {
//   proceedToPayment(orderId, function (paymenrInfp) {
//     showOrdersummary(paymentInfp, function () {
//       updateWalletBalance();
//     });
//   });
// });

// createOrder(cart)
//   .then(function (orderId) {
//     proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     showOrderSummary(paymentInfo);
//   })
//   .then(function (paymentInfo) {
//     updateWalletBalance(paymentInfo);
//   });

let cart;
const promise = createOrder(cart);

promise.then(function (orderId) {
  console.log(orderId);
});
function createOrder() {
  const pr = new Promise(function (resolve, reject) {
    // createOrder
    // validateCart
    if (!validateCart(cart)) {
      const err = new Error("cart is not valid");
      reject(err);
    }
    // logic for creating order
    const orderId = "12345";
    if (orderId) {
      resolve(orderId);
    }
  });
  return pr;
}

function validateCart(cart) {
  return cart;
}
