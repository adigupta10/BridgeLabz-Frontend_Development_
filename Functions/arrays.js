// //second way to create an onject
// const car=new Object();
// car.name="lamborghini";
// car.modal="urus";
// car.price=32000000;

// //construct funcion
// function bike(name,price){
//     this.name=name;
//     this.price=price;
//     this.greet=function()   // anonymous function which have no name
//     {
//         return `hola my name is ${this.name} and the price is ${this.price}`;
//     }
// }

// const car1=new bike("pulsar",200000);
// console.log(car1.greet());

// //using json
// const person='{"name":"aditya","age":21}';
// const jsonObj=JSON.parse(person);
// console.log(jsonObj.name)
// console.log(jsonObj.age)

// const stringObj=JSON.stringify(jsonObj)
// console.log(stringObj)
// console.log( typeof stringObj)



// //anonymous function
// setTimeout(function(){
//     console.log("hola",);
// },2000)


// //arrow functions
// const add=(a,b)=>{
//     return a+b;
// }

// //immediate invoked function expression (IIFE)
// (function(){
//     console.log("print ho jaega without calling a function");
// })();

// // HOF-high order function for providing chaining->one function call another function we can pass this function as an argument in another function
// // function greetUser(a,name){   //high order function //1
   
   
// //     console.log("first ")

// //     return a(name);
// // }

// // //callback function
// // function greetFn(name){ //2
// //     return "hola"+name;
// // }
// // console.log(greetUser(greet,"john"))



// // function a(){
// //     console.log("first")
// // }


// // function b (){
// //     console.log("second")
// // }
// // a();
// // b();





// function a(fun){
//     console.log("first")

//     fun();
// }
// function b (ham){
//     console.log("second")
//     ham();    
// }
// function c(fun){
//     console.log("third")
//     fun()
// }

// function d(){
//     console.log("fourth")
// }

// a(function (){
//     b(function(){
//         c(d)
//     })
// })

// // or you can write 
// a(()=>{
//     b(()=>{
//         c(d)
//     })
// })

// // a(b(c)) this is wrong




// // only two function call
// function x(y){
//     console.log("first")
//     y();
// }
// function y(){
//     console.log("second")
// }

// x(y)


//promises

// function a(){
//     return new Promises((resolve)=>{
//         console.log("first")
//         resolve()
//     })
// }

const sub=(a,b)=>{
    console.log(a+b)
};
sub(4,5)