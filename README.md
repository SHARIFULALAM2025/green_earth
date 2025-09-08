
#### 1) What is the difference between var, let, and const?
Answer:
        Var  keyword:
it is a javascript keyword .it is use to  declare variable.Before Es6 there was only var keyword use to store variable .it is all most used after Es6.
features of var keywords:
1.function scope:
when we define variable using var , they are function scoped. they are accessible anywhere
```
function demo(){
        var money=100;
        console.log(money)
}
console.log(money)// reference error ,it is not defined
```
2.global scope: when we declare a variable outside a function.it can be accessible anywhere

```
var numbers=500;
function myFun(){
        console.log(numbers);
}
console.log(numbers);

```
3.re declaring variable: by using var keyword .we can re declaring variables
```
var name =" shariful alam";
var name ="programming hero";
console.log(name) // no error
```
4.hosting: using var keyword  the variable declaration is hosting  to the top of the scope
```
console.log(num);
var num=100;
```
   let keyword:
1.global scope : using let keyword variable declare  outside of the function  it is called global scope .it can be accessible anywhere.
```
let x=20;
 console.log("outside of the function x", x)
function myFun(){
        console.log("inside of the function x", x)
}
myFun()
2.function scope: variable declare inside a function .it is not access out of the function.
function show(){
        let num=12;
        console.log("the num is",num); //the number is 12
}
show()
 console.log("the num is",num);//error
```
3.block scoped : variable declare inside a block scope. variable can not access out of this block
```
{
        let num=500;
        console.log("the number is ",num); the number is 500

}
console.log("the number is ",num);//error
```
can change value  for example
let numbers=400;
numbers=1000;
console.log("the number is" numbers)//the number is 1000;


const keyword:
a variable defined with const can't be re-declare and reassigned . the const declaration have block as well as function scope

declaration:

const y//correct way

const x;
x//incorrect way

reassigned :
const data=20;
 data=40;//error
```
 block scope:
 {
        const car="zip";
 }
 const car="Bus";
```
```
{
        const num=20;
        const num=40;
}//error
```

#### 2) What is the difference between map(), forEach(), and filter()?

map() method : the javascript map() form a new array creates a new array  with the result of calling a provided function on every element  in this type array
syntax: array.map(function(value,index,arr),thisValue)
main work: when something is done to each element based on a specific condition.
```
const data=[1,2,3,4,5,5,6];
data.map(x=>x*2);
console.log(data) // [2,4,6,8,10,10,12]

```
forEach() method: the javascript forEach() method calls the provided function once  for each element of the array .forEach() method does not execute the function for  array element without values.
syntax: array.forEach(function(value,index,arr),thisValue)
```
const name=["shariful","kamal","jamil"];
name.forEach(x=>console.log(x))
```
filter():the filter() method creates a new array  with the all elements that pass the test implemented by the provided function.this  method fills  all the element of  an  array from a start index to an end index with a static value.
syntax: array.filter(function(currentValue,index,arr),thisarg)
```
const arr=[1,2,3,4,5,6,6].filter(x=>x%2===0);
console.log(arr)
```
#### 3) What are arrow functions in ES6?
Es6 (ECMAScript 2015 ) introduced several new array method that enhance  javascript  array manipulation capabilities
```
//normal function
function mtFun(x,y){
        return x+y;
}
console.log(mtFun(20,39));
//array function
const data=(x,y)=>x+y;
it is very easy .and sort
```

#### 4) How does destructuring assignment work in ES6?

#### 5) Explain template literals in ES6. How are they different from string concatenation?



