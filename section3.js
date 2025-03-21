let arr = [1, 2, 3]; 
console.log(arr.length); //3

//section 3
//14. Write a JavaScript function that takes a string and returns the number of vowels in it.
function countVowels(str) {
    return str.toLowerCase().split('').filter(char => 'aeiou'.includes(char)).length;
} 
console.log(countVowels('hello')); //2
console.log(countVowels('why')); //0

//15. Given an array let numbers = [3, 8, 1, 6, 10];, write a function to return the highest 
//number in the array.
//Array is used to store collection of values
function highestNumber(arr) {
    return Math.max(...arr);
}
console.log(highestNumber([3, 8, 1, 6, 10])); //10

//16. Write a function to check if a given word is a palindrome (a word that reads the 
    //same forward and backward).
    //it converts a value of one type to another
    //A palindrome is a word, sentence, verse, or even number that reads the same backward or forward

// string represents the parameter 
//means to join all elements within the array whose elements are in reverse order based on the split ing of the string.

function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome('madam')); //true

// 17. Write a function that takes a number as input and returns true if the number is 
//even, otherwise returns false. 
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(2)); //true
console.log(isEven(3)); //false


