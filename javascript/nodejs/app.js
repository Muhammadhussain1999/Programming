//es5
const fs = require("fs");
//es6
// fs.readFile("data.txt", "utf8", (err, data) => {
//   console.log(data);
// });
// fs.writeFile("data.txt", "hello World", (err, data) => {
//   if (err) return;
//   console.log("file is saved");
// });
const obj = {
  name: "saad khan",
  id: 2,
  class: "second",
  class() {
    return this.id;
  },
};
fs.writeFile("data.txt", JSON.stringify(obj), (err, data) => {
  console.log("file is saved");
});
fs.readFile("data.txt", "utf8", (err, data) => {
  const o = JSON.parse(data);
  console.log(o);
});
