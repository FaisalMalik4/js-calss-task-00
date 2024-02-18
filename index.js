//1 Sum of all digits of a number. For example, 123 -> 1+2+3=6

// let userInput = prompt("enter any number");
// let array = [];
// let sum = 0;
// for(let index = 0; index<userInput.length; index++){
//     let digit = parseInt(userInput.charAt(index));
//     array.push(digit);
//     sum += array[index]
// }
// alert(sum);

//2 Sum of the range of 2 numbers. For example, num1=2, num2=5 ->2+3+4+5=14

// let num1 = +prompt("please enter fist number");
// let num2 = +prompt("please enter last number");
// let sum=0;
// for(let index = num1; index<=num2; index++){
//     sum += index;
// }
// console.log(sum)

//3 Calcualte the average of numbers given in an array.

// let array = [2,3,4,5,6,7,19];
// let sum = 0;
// for(let index = 0; index<array.length; index++){
//     let digit = array[index];
//     sum+=digit;
// }
// let average = sum/array.length;
// alert(average)

//4 Compare strings by count of characters. For example, car and bat are equal. car and care are not.

// let string1 = prompt("enter first string");
// let string2 = prompt("enter second string");
// if(string1.length === string2.length){
//     alert("The characters of "+string1+" and "+string2+" are equal")
// }
// else{
//     console.log("The characters of "+string1+" and "+string2+" are not equal")
// }

//5 Swap the string's first and last character. For example, name -> eamn

    let string = prompt("enter a string");
    let firstChar = string[0];
    let lastChar = string[string.length-1];
    alert(lastChar+string.slice(1,string.length-1)+firstChar)
