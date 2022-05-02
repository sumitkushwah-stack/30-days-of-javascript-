//Window alert() method
alert('welcome 3 days of javascript')
//Window prompt() method
let vool = prompt('enter the num','number goes here')
console.log(vool)
//Window confirm() method
const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // result will be true or false based on what you click on the dialog box
//Creating a time object
const now = new Date()
console.log(now) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)
//Getting full year  from a time object.
const now = new Date()
console.log(now.getFullYear()) // 2020
//Getting month
const now = new Date()
console.log(now.getMonth()) // 0, because the month is January,  month(0-11)
//Getting date
const now = new Date()
console.log(now.getDate()) // 4, because the day of the month is 4th,  day(1-31)
//Getting day
const now = new Date()
console.log(now.getDay()) // 6, because the day is Saturday which is the 7th day
//  Sunday is 0, Monday is 1 and Saturday is 6
// Getting the weekday as a number (0-6)
//Getting hours
const now = new Date()
console.log(now.getHours()) // 0, because the time is 00:56:41
//Getting minutes
const now = new Date()
console.log(now.getMinutes()) // 56, because the time is 00:56:41
//Getting seconds
const now = new Date()
console.log(now.getSeconds()) // 41, because the time is 00:56:41
//Getting time
const now = new Date() //
console.log(now.getTime()) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41
