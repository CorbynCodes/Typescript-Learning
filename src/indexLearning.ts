// Obigatory types
let myName: string = "Bob";
let numberOfWheel: number = 4;
let isStudent: boolean = false;

type food = string;
let myFavoriteFood: food = "Pizza";

// Defining Custom Types also making them optional
type Address = {
  street: string;
  city: string;
  country: string;
};
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address: Address;
};

let person1: Person = {
  // you can call the speical Type to the object you want to create
  name: "Joe",
  age: 66,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Springfield",
    country: "USA",
  },
};

function displayInfo(person: Person) {
  console.log(`${person.name} lives at ${person.address?.street} `);
}

displayInfo(person1);

// typeing arrays
let ages: number[] = [100, 101];
let people: Person[] = [person1];
Array<Person>; // can also work

// Unions Types
type User = {
  username: string;
  role: "guest" | "admin" | "moderator";
};
type userRole = "guest" | "admin" | "moderator";
let userRole: userRole = "guest";

// Type narrowing
function displayUserRole(user: string | number) {
  if (user === "guest") {
    console.log("Guest User");
  } else if (user === "admin") {
    console.log("Admin User");
  } else if (user === "moderator") {
    console.log("Moderator User");
  }
}
