//object destructuring

// const person = {
//   name: "Eric",
//   age: 36,
//   location: {
//     city: "Portland",
//     temp: "55"
//   }
// };

// const { name = "Anon", age } = person;

// console.log(`${name} is ${age}`);

// const { city, temp: temperature } = person.location;

// console.log(`It's ${temperature} in ${city}.`);

// const book = {
//   title: "Ego is the enemy",
//   auther: "Ryan Holiday",
//   publisher: {}
// };

// const { name: publisherName = "Self-Published" } = book.publisher;
// console.log(publisherName);

//array destructuring

const address = ["1299 South Juniper Street", "Portland", "Oregon", "945539"];
const [, city, state = "New York"] = address;

console.log(`You are in ${city} ${state}`);

const item = ["coffee (hot)", "2.00", "2.50", "2.75"];
const [hot, , price] = item;

console.log(`A medium ${hot} costs ${price}`);
