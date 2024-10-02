// #TYPESCRIPT
// let username= "codeway"; // type annotation
// let nameOfUser:string; // type inference
// const number = 3; // const must be initialize
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// // #interface
// interface IOriginalUser {
//     username : string,
//     age : number,
//     hobbies:string[]
// } 
// interface IUser {
//     username : string,
//     readonly age : number,
//     hobbies:string[]
//     address?:string // optional property
// } 
// interface INewUser extends IOriginalUser{
//       address:string
// }
// const userObject : IUser = {
//     username:"ali",
//     age:33,
//     hobbies:["games","gym"]
// }
// // #keyof 
// type userKeys = keyof IUser ; // ** "username | age | hobbies"
// function getProperty (obj:IUser,key:userKeys){
//     return obj[key];
// }
// // #Record 
// const person : Record <string , string> ={
//     username :"islam"
// }
// person.address="ahmed ali street";
// person["country"]="egypt";
// const numbers :number [] = [1,2,3,4] // arrays
// const values : boolean[]= [true,false,false];
// const list : [number, string , {username:string},boolean]
//   = [1,"hello",{username:"ali"},true];
// function logMessage(message:string) : void{
//     console.log(message);
// }                    
// //# spread operator and destructuring 
// const userProfile : IUser = {
//     username:"ali",
//     age:33,
//     hobbies:["games","gym"]
// }
// const newUser : INewUser= {...userProfile,address : "10 street"}
// //#Partial
// function updateUser(user : IUser, updates : Partial<IUser>){
//    return {...user,...updates};
// }
// updateUser(userProfile,{username:"codeway"});
// // #Type 
// // ** aliases 
// type pi =  number;
// //** union */
// type status = "online | offline";
// // destructuring array
// function printLanguages([first,second]:string[]){
//     return `first language is ${first} , second language is ${second}`
// }
// console.log(printLanguages(["js","python","java"]));
// // #resetParam
// function sum (text:string , ...numbers:number[]){
//     return numbers.reduce((sum,num)=>sum+num,0)
// }
// console.log(sum('hi',1,3,4,5));
// //#enm 
// enum statusCode {
//     success = 200,
//     notFound = 404,
//     internalError = 500,
// }
// function handleResponse(status:statusCode){
//     switch(status){
//         case statusCode.success:
//             console.log("success code");
//             break;
//       case statusCode.notFound:
//         console.log('notfound');
//         break; 
//     }
// }
// console.log(handleResponse(statusCode.notFound));
// //#Generics
// function logArg<T>(arg:T){
//     return arg;
// }
// function swap <T> (arg1 :T , arg2:T){
//     return [arg2,arg1];
// }
// //#index signature
// interface ICity{
//   [key: string]:string;
// }
// const cityDictionary : ICity = {
//     cairo : "Egypt",
//     parice:"France",
// }
//
//REVIEW_JAVASCRIPT
//
// ** var ==> (current execution context)
// ** let ==>(block-scope)
// ** const ==>(block-scope)
// #method in object 
var person = {
    gender: 'male',
    age: 20,
    walk: function () {
        return 'i am walking';
    }
};
var gender = person.gender, restPerson = __rest(person, ["gender"]);
var age = person.age;
var ali = __assign(__assign({}, person), { username: 'ali', speed: "true" });
console.log(ali.walk(), ali.speed);
console.log(restPerson.age);
// #higher order function
var numbers = [1, 2, 3, 4, 5, 6];
var squaredNumbers = numbers.map(function (number) { return number * number; });
var evenNums = numbers.filter(function (number) { return number % 2 == 0; });
// const foundNum = numbers.find((number)=>number===3);
var hasNegativeNumber = numbers.some(function (number) { return number < 0; });
var allPostiveNumber = numbers.some(function (number) { return number > 0; });
var total = numbers.reduce(function (pre, current) { return pre + current; }, 0);
////////////
//  This KeyWord
/////////////
function printThis() {
    return this;
}
var moAli = {
    username: "moAli",
    age: 33,
    printUser1: function () {
        return printThis.bind(this)().username;
    },
    printUser2: function () {
        return printThis.call(this).username;
    }
};
function printUser(welcomeMsg) {
    return "hi,".concat(this.username, " ").concat(welcomeMsg);
}
var ahmed = {
    username: 'ahmed',
};
console.log(printUser.bind(ahmed)('welcome to nodejs'));
