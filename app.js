// Global string variable using const
const nickname = "Maleah"; // This is a constant string variable

// Object variable using const
const personProfile = {
  firstName: "Kaitlyn",
  middleName: "Maleah",
  goesByMiddleName: true,
  nameBackground: "Goes by middle name, so it's sometimes confusing haha",
};

// Logging both to the console
console.log("Nickname:", nickname);
console.log("Person Profile:", personProfile);

// Math operations
let a = 3;
let x = (100 + 50) * a;
console.log("Math Operation 1:", x); // Logs 150 * 3 = 450

//Block Variables
{
  let a = 3;
  let x = (150 + 50) * a;
  console.log("Math Operation 2:", x); // Logs 200 * 3 = 600
}

// Display result in HTML
document.getElementById("demo").innerHTML = x;
