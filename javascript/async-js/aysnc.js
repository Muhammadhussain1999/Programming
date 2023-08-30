const one = () => {
  console.log("one");
};
const two = () => {
  setTimeout(() => {
    console.log("two");
  }, 3000);
};

const three = () => {
  console.log("three");
};
one();
two();
three();
