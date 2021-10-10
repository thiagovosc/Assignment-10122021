//5) faça uma série de strings dos nomes dizendo se eles podem ou não ir para a matrix (> 18 anos)
function makeStrings(arr) {
  arr.map((person) => {
    if (person.age > 18) {
      console.log(`${person.name} can go to The Matrix`);
    } else {
      console.log(`${person.name} is under age!!`);
    }
  });
}

let persons = [
  { name: "Angelina Jolie", age: 80 },
  { name: "Eric Jones", age: 2 },
  { name: "Paris Hilton", age: 5 },
  { name: "Kayne West", age: 16 },
  { name: "Bob Ziroll", age: 100 },
];

// ["Angelina Jolie can go to The Matrix", // "Eric Jones is under age!!", //"Paris Hilton is under age!!", //"Kayne West is under age!!", //"Bob Ziroll can go The Matrix"]

makeStrings(persons);
