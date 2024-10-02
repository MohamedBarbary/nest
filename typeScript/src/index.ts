'use strict';
// #TYPESCRIPT
// let username= "codeway"; // type annotation
// let nameOfUser:string; // type inference
// const number = 3; // const must be initialize

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
const person = {
    gender:'male',
    age : 20,
    walk():string{
        return 'i am walking';
    }
}

const {gender,...restPerson} = person;
const {age} = person;
const ali = {...person,username:'ali',speed:"true"}
console.log(ali.walk(),ali.speed);
console.log(restPerson.age);

// #higher order function

const numbers : number[] = [1,2,3,4,5,6];

const squaredNumbers = numbers.map((number)=>number*number);
const evenNums = numbers.filter((number)=>number%2==0);
// const foundNum = numbers.find((number)=>number===3);
const hasNegativeNumber = numbers.some((number)=>number<0);
const allPostiveNumber = numbers.some((number)=>number>0);
const total = numbers.reduce((pre,current)=>pre+current,0);

////////////
// #This KeyWord
/////////////

function printThis (this:any){
    return this;
}

const moAli = {
     username:"moAli",
     age:33,
     printUser1(){
        return printThis.bind(this)().username;
     },
     printUser2(){
        return printThis.call(this).username;
     }
}

function printUser(this :any , welcomeMsg:string){
    return `hi,${this.username} ${welcomeMsg}`;
}

const ahmed ={
  username:'ahmed',
}

console.log(printUser.bind(ahmed)('welcome to nodejs'));


class Person {
    username : string;
   constructor(username:string){
      this.username=username;
    }
    greeting(){
        return this.username;
    }
}
const mohamed = new Person('mohamed');
