"use strict";
let username = "codeway"; // type annotation
let nameOfUser; // type inference
const number = 3; // const must be initialize
const userObject = {
    username: "ali",
    age: 33,
    hobbies: ["games", "gym"]
};
const numbers = [1, 2, 3, 4]; // arrays
const values = [true, false, false];
const list = [1, "hello", { username: "ali" }, true];
function logMessage(message) {
    console.log(message);
}
// spread operator and destructuring 
const userProfile = {
    username: "ali",
    age: 33,
    hobbies: ["games", "gym"]
};
const newUser = Object.assign(Object.assign({}, userProfile), { address: "10 street" });
console.log(newUser);
console.log(userProfile);
