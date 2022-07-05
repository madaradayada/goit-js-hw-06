//mod 3.14 function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

// const keys = Object.keys(object);

//   for (const key of keys) {

//       propCount += 1;
    
//   }
  

//   return propCount;
//   // Change code above this line
// }
// console.log(countProps({}))
// console.log(countProps({ name: "Mango", age: 2 }))
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
const values = Object.values(apartment);