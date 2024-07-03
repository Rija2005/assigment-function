
//assignment;function

//question1
// function myDate(){
//     let d = new Date();
//     document.write(d);
// }
// myDate();

// //question 2

// let firstName = prompt ("Enter First Name.");
// let lastName = prompt ("Enter Last Name.");

// function greets(firstName, lastName){
//     document.write("<br>" , "Welcome" + "" + firstName +  ""  +lastName)

// }

// greets(firstName ,lastName)

// //questin3

// let Num1 = +prompt ("Enter first no:");
// let Num2 = +prompt ("Enter Second no:");
//  function sum ( Num1 ,Num2 ){
//     return Num1 + Num2;
//  }
// console.log(sum(Num1 , Num2));


// //question4 CALCULATOR
// let num1 = +prompt("Enter  number 1:");
// let num2 = +prompt ("Enter Number2:");
// let operator = prompt (" Enter Operator")
//  function myFunction( num1 , num2 ,operator){
//     if (operator== "+"){
//         document.write(num1+ " "+  operator +"  "+  num2 +  " =" + " "+  (num1+ num2) )

//     }
//     else if ( operator === "-"){
//         document.write( num1+ " "+ operator +"  "+  num2 +  " =" + " " + (num1- num2))
//     }

//     else if ( operator === "*"){
//         document.write (num1+ " "+  operator +"  "+  num2 +  " =" + " "+ (num1 * num2) )
//     }

//     else if ( operator === "%"){
//         document.write (num1+ " "+  operator +" "+  num2 +  " =" + " "  + (num1% num2))
//     }
//  }

//  myFunction( num1 , num2 ,operator)



//QUESTION 5 



function square(a) {
    return a * a;

}
console.log(square(6));


//QUESTION9 
// Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables


// function area( width , height){
//     return width * height
// }
// console.log( area ( 6, 8));

//OR

// function areaOfRectangle(width , height){
//     document.write(width * height)

// }
//  areaOfRectangle(width(45)  , height(23))



//QUESTION14

function calcCircumference(radius) {
    let r = 6
    return "The circumference is ", radius = 2 * 3.14 * r
}
console.log("The circumference is " + calcCircumference());


function calcArea(radius) {
    let r = 8
    return "The area of Circle is", radius = 3.14 * r * r
}
console.log("The area of Circle is" + calcArea());


//question7
let startNumber = + prompt("Enter a start number");
let endNumber = + prompt("Enter a end number");
function count(startNumber, endNumber) {
    if (startNumber > endNumber){
        for(let i = startNumber; i > endNumber; i--)
            document.write(i + "<br>")

    }
    else if (startNumber <= endNumber){
        for(let i = startNumber; i <= endNumber; i++)
            document.write(i + "<br>")

    }

    else if ( startNumber===endNumber){
       document.write("both are equal")
    }
}
count(startNumber,endNumber);