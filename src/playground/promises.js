const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("this is my resolved data");
  }, 1500);
});

console.log("before");

promise
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });

console.log("after");
