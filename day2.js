let word = 'javascript';//example of string data type
let one =3;
let One = 3;
console.log(one==One);//True
let js ='javascript';
let py = 'python';
console.log(js == py); //false
let lighton = true;
let Lightoff = false;
console.log(lighton = Lightoff);
let nums = [1,2,3]
nums[0] = 10
console.log(nums) // example of non-primitive datatype
let Lums =[1,2,3]
let Nums = [1,2,3]
console.log(Lums == Nums)// false 
let sum = [1,2,3]
let Sum = sum
console.log( sum == Sum)
let userone ={
    name: 'Sumit', Roll: 'teacher',country:'India'
}
/*

   NUMBER
   */
let userTwo = userone
console.log(userone == userTwo)
let age = 35;
const gravity = 9.81;
let mass = 72 ;
const pi = 3.14 ;
const bolingpoint = 100 ;
const bodytemp = 37;
console.log(age,gravity,pi,bolingpoint,bodytemp);
// math object 
const PI= Math.PI;
console.log(PI);
console.log(Math.round(PI)); // 3 to round values to the nearest number
console.log(Math.round(9.81)); // 10 is the round value
console.log(Math.round(3.64)); // 4 is the round value

console.log(Math.round(3.44)); // 3 is round value
console.log(Math.floor(PI));
console.log(Math.ceil(PI));
console.log(Math.min(-5,25,44,30,50,100));
console.log(Math.max(100,200,233,400,500))
const randNum = Math.random(); //  creates random number between 0 to 0.999999
console.log(randNum);
const opp = Math.floor(Math.random()  *11);
console.log(opp);
console.log(Math.abs(-10)); // abs value 
console.log(Math.sqrt(100)); //Square root
console.log(Math.pow(3,2)); // power
console.log(Math.log(2)); //log
console.log(Math.log(10));
console.log(Math.sin(0));
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?')//line break
console.log('Days\tTopics \texcersize');
console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically
let Js = 'javascript';
console.log(js.length) // this function is use for check length
/*
Let us access different characters in 'JavaScript' string.
*/
let string = Js;
let papa = string[0];
console.log(papa);
let secomd = 'javascript';
console.log(secomd.toUpperCase());// this function is use for to lowercase to uppercase
let egg = 'JAVA'
console.log(egg.toLowerCase()); // this function is use for convert upppercase to lowercase
/*
substr(): It takes two arguments, the starting index and number of characters to slice.
*/
let mohit = 'javascript';
console.log(mohit.substring(4))
let string = ' 30 days of javascript '; //split(): The split method splits a string at a specified place.
console.log(string.split())
console.log (string.split(' '))
let firstname = 'priyanka'
console.log(firstname.split())
console.log(firstname.split(''))
//trim(): Removes trailing space in the beginning or the end of a string.
let string = '    30 days of javascript    '
console.log(string)
console.log(string.trim(' '))
console.log(string.trim())
//includes(): It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.
let string = '30 Days of javascript'
console.log(string.includes("30")) // True
/*
replace(): takes as a parameter the old substring and a new substring.
string.replace(oldsubstring, newsubstring)
*/
let string = '30 days of javascript'
console.log(string.replace('javascript' ,'python')) // 30 days of python
/*
charAt(): Takes index and it returns the value at that index
string.charAt(index)
*/
let string = '30 days of javascript'
console.log(string.charAt(0)) // 3
/*
charCodeAt(): Takes index and it returns char code (ASCII number) of the value at that index
string.charCodeAt(index)
*/
let string = '30 Days of javascript'
console.log(string.charCodeAt(3))
/*
indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1

*/
let string = '30 Days of javascript'
console.log(string.indexOf('script'))//15
/*
lastIndexOf(): Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1

*/
let string = 'I love JavaScript. If you do not love JavaScript what else can you love .'
console.log(string.lastIndexOf("I"))//72
/*
concat(): it takes many substrings and joins them.
*/
let string ='30'
console.log(string.concat("Days","of","javascript"))//30Daysofjavascript
/*
startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
//syntax
string.startsWith(substring)
*/
let string ='Love is the best to in this world'
console.log(string.startsWith('love'))//falae
/*endsWith: it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).
string.endsWith(substring)
*/
let string = 'Love is the most powerful feeling in the world'


console.log(string.endsWith('world'))         // true
console.log(string.endsWith('love'))          // false
console.log(string.endsWith('in the world')) // true
search: it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.
string.search(substring)
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('love'))          // 2
console.log(string.search(/javascript/gi))  // 7
/*match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.
*/
let patternOne = /love/     // with out any flag
let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensi

// syntax 
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.match('love'))

let pattern = /love/gi
console.log(string.match(pattern))   // ["love", "love", "love"]

