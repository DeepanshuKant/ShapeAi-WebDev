console.log("Testing first");

const arr = [1, 22, 3, 4];
console.log(arr[2]);

const [one, two, three, four, five] = arr;
console.log(two);
console.log(five);

function getscore() {
  return [90, 100];
}

let [x, y, z] = getscore();
console.log(x);
console.log(y);
console.log(z);

const obj = {
  name: "Deepanshu Kant",
  email: "dkdeepanshukant@gmail.com",
  age: 21,
};

console.log(obj.name);

let { name, email, age, dum } = obj;
console.log(age);
console.log(dum);

let person = {
  firstname: "Deepanshu",
  lastname: "Kant",
  age1: 21,
};

let { age1, firstname, lastname, middlename = "" } = person;
console.log(age1);
console.log(firstname);
console.log(lastname);
console.log(middlename);

let add = (x, y) => {
  console.log(x);
  return x + y;
};
console.log(add(2, 2));

const counter = {
  count: 0,
  next: function () {
    return ++this.count;
  },
};

console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
