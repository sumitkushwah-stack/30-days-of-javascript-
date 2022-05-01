//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 days of javascript'
//Print the string on the browser console using console.log()
console.log(challenge);
//Print the length of the string on the browser console using console.log()
console.log(challenge.length)
//Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase())
//Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase())
//Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(4,6))
//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let string = '30 Days Of JavaScript'
console.log(string.slice(3,7))
//Check if the string contains a word Script using includes() method
console.log(string.includes('JavaScript'))
//Split the string into an array using split() method
console.log(string.split())
//Split the string 30 Days Of JavaScript at the space using split() method
console.log(string.split(' '))
//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let room = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(room.split(' ')) 
//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
let Apple = '30 Days Of JavaScript'
console.log(Apple.replace('JavaScript','python'))
//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(Apple.charAt(15))//s
//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(Apple.charCodeAt('j'))//51
//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(Apple.indexOf('a'))//a
//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript
console.log(Apple.lastIndexOf('a'))//14
//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction
let joy = 'You cannot end a sentence with because because because is a conjunction'
console.log(joy.indexOf('because'))//31
//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction
console.log(joy.lastIndexOf('because'))//47
console.log(joy.search('because'))
//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScri
let love = '      30 Days Of JavaScript .'
console.log(love)
console.log(love.trim())
//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(love.startsWith(' '))
//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(love.endsWith('.'))
//Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(love.match('a'))
//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
console.log(love.concat("off","uuu"))
//Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(love.repeat(2))


