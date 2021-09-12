console.log("merged class 2");

let ranks = [1, 2, 3];
const newArr = ranks.map((e, index) => {
  return e + 1;
});

console.log(newArr);

console.log(
  ranks.map((e, index) => {
    return index * 100;
  })
);

let newFilte = ranks.filter((e, index) => {
  console.log(e);
  if (e % 2 == 0) {
    return e;
  }
});

console.log(newFilte);

//Promise in Javascript-----------------------------

let concert = true;
let attendConcert = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (concert) {
      resolve("Bob is attending the concert");
    } else {
      reject("Bob is not attending the concert");
    }
  }, 2000);
});

console.log(attendConcert);
// attendConcert.then((data) => {
//   console.log(data);
// });

// attendConcert.catch((error) => {
//   console.log(error);
// });

// attendConcert
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

async function afunc() {
  try {
    let result = await attendConcert;
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

afunc();

// console.log("afunch is = ", afunc());

console.log("Hi! I won't wait for anyone");
console.log("Hi! I am dying I dont want to wait");
