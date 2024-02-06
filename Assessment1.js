 //AGE ELIGIBILITY CHECKER
 function isWholeNumber (conduit){
return Number.isInteger(conduit)
 }
function votersEligibility(){
let votersAge = 23.5
   if(isWholeNumber(votersAge) === false){
      return (`Enter your age in whole Number`)
    }
    else if(votersAge >= 18){
       return (`You are eligible to Vote`)  }
    else if (votersAge<=18){
       return (`You are not eligible to vote`)}
    else{
       return (`Please enter a valid character in number and try again`)}
}
  console.log(votersEligibility())
 

 //EVEN & ODD NUMBER IDENTIFIER
 function evenOddNumberChecker (){
   let numberIdentifier = Number(`ser`)

   if(numberIdentifier % 2 === 1){
      return (`This is an odd number`)}
   else if(numberIdentifier % 2 === 0) {
      return (`this is an even number`)}
   else{
      return (`Enter a valid number`)}

 }
console.log(evenOddNumberChecker())


 //*VOWEL OR CONSONANT CLASSIFIER 
function vowelConstantClassifier(){
   const VOWEL = (`AEIOU`)
   const CONSONANT = (`BCDFGHJKLMNPQRSTVWXYZ`)
   let alphabet = (`f`).toUpperCase()
   VOWEL.includes(alphabet)
   CONSONANT.includes(alphabet)
  
   if(VOWEL.includes(alphabet)){
      return (`This is a vowel`)
   }
  else if(CONSONANT.includes(alphabet)){
   return (`This is a Consonant`)
   }
  else{
   return (`Please input a valid letter`)
   }
}
console.log(vowelConstantClassifier())

 //RETURN THE LARGEST NUMBER
function returnLargerNumber (){  
   let number1 = 56
   let number2 = 43

   if (number1>number2){
      return (`${number1} is the larger number`)}
   else if (number2>number1){
      return (`${number2} is the larger number`)}
   else if (number2===number1){
      return (`Both numbers are equal`)}
   else{
      return (`Enter a valid number`)}

}
console.log(returnLargerNumber())

 
//SIMPLE CALCULATOR
const addOp = `+`
const subOp = `-`
const divOp = `%`
const multiOp = `*`
let x =50
let y = 2



//SWITCH STATEMENT
// Day of the Week Printer: Print the name of the day for a given number (1-7).
function dayChecker(){
   let dayPrinter = 6
switch  (true){
    case (dayPrinter ===1): 
                return (`Today is Sunday`)
                break
    case (dayPrinter ===2): 
                return (`Today is Monday`)
                break
    case (dayPrinter ===3): 
                return (`Today is Teusday`)
                break
    case (dayPrinter ===4): 
                 return (`Today is Wednesday`)
                break
    case (dayPrinter ===5): 
                return (`Today is Thursday`)
                   break
    case (dayPrinter ===6): 
                return (`Today is Friday`)
                   break
    case (dayPrinter ===7): 
                 return (`Today is Saturday`)
                break
    default:
                 return (`Not a day of the week`)
}
}
console.log(dayChecker())


// Grade Evaluator: Assign a letter grade (A, B, C, D, or F) based on a numerical grade.

function gradeEvaluator () {
   let studentScore =  Number(`78`)
switch  (true){
    case studentScore >=  90:
                return (`you score an A`)
                break
    case studentScore >= 75 && studentScore < 90:
                  return (`You scored a B`)
                  break
    case studentScore >= 60 && studentScore < 75:
                return (`You scored a C`)
                break
    case studentScore >= 50 && studentScore < 60:
                 return (`You scored a D`)
                break
    case studentScore >= 40 && studentScore < 50:
                return(`You scored an E`)
                break
    case studentScore <=39:
                return (`You scored an F, think about your life`)
                break
    default:
                return (`please enter a valid score`)
}
}
console.log(gradeEvaluator())


//Rock-Paper-Scissors Game: Determine the winner based on player choices. 

function compPick(){
const arrayOfItems = [`Rock`, `Paper`, `Scissors`]
let randomNum = Math.floor(Math.random()*arrayOfItems.length)

for(i=0; i<arrayOfItems.length; i++){
let compPick =arrayOfItems[randomNum]
return (compPick)
break}
}
compPick()


function gameProper(playerChoice){
   playerChoice =`Rock`
   switch(true){
      case playerChoice === `Rock` && compPick() === `Scissors`:
            return (`Bob wins`)
            break
   
         case playerChoice === `Rock` && compPick() === `Paper`:
           return (`Computer wins`)
           break
   
         case playerChoice === `Scissors` && compPick() === `Rock`:
            return (`Computer wins`)
            break
   
         case playerChoice === `Scissors` && compPick() === `Paper`:
            return (`Bob wins`)
         break
   
         case playerChoice === `Paper` && compPick() === `Rock`:
            return (`Bob wins`)
            break
   
         case playerChoice === `Paper` && compPick() === `Scissors`:
            return (`Computer wins`)
            break
   
         case playerChoice === compPick():
         console.log(`It's a tie`)
         break
   }

}
console.log(gameProper())

//Month Name Displayer: Print the name of a month for a given number (1-12).
function monthPrinter(){
   let monthPrinter = Number(`11`)

switch  (true){
    case (monthPrinter ===1):
                return (`It's January`)
                break
    case (monthPrinter ===2):
                return (`It's February`)
                break
    case (monthPrinter ===3):
                return (`It's March  `)
                break
    case (monthPrinter ===4):
                 return (`It's April  `)
                break
    case (monthPrinter ===5):
                return (` It's May `)
                   break
    case (monthPrinter ===6):
                return (`It's June`)
                   break
    case (monthPrinter ===7):
                 return (`It's July`)
                break
    case (monthPrinter ===8):
                  return (`It's August`)
                 break
    case (monthPrinter ===9):
                 return (`It's September`)
                break
    case (monthPrinter ===10):
                 return (`It's October`)
                break
    case (monthPrinter ===11):
                 console.log(`It's November`)
                break
    case (monthPrinter ===12):
                 return (`It's December`)
                break
    default:
                return (`Not a day of the Month`)
}
}
monthPrinter()

//. Simple Menu: Create a menu with a few options and execute different actions based on the user's choice.

function actionDisplay(){
   let choice = prompt(`type one item you will like to get from the following; milk, goldenmorn, beans, fufu`)

switch(true){
    case choice === (`milk`):
         choice = 2600
         let print = (`the price is ${choice}N`)
         choice = 20
         print += (` and we only have ${choice} packs left`)
         return print
      break
    
    case choice === (`goldenmorn`):
      choice = 2350
      return (`the price is ${choice}N can you afford it?`)
      break
    
    case choice === (`beans`):
      choice = 300
      return (`the price is ${choice}N can you afford it?`)
      break
    
    case choice === (`fufu`):
      choice = 50
      return (`the price is ${choice}N you should afford this one ode`)
      break
    
}

}
console.log(actionDisplay())


//FOR LOOPS
//Number Summation: Calculate the sum of all numbers from 1 to a given number.

function summationTable(){
   const allNumber = [1, 2, 3, 4 ]

for (let i = 1; i<=allNumber.length; i++){
    console.log(`Summation table of ${i}`)
   for (let y = 0; y<allNumber.length; y++){
      console.log(`${i} + ${y} = ${i+y}`)
   
   }  
}
}
summationTable()

//Countdown Timer: Print a countdown from a given number to 1.
function printCountDown(){
let eNumbers = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    for (let i = 0; i < eNumbers.length; i++) {
       console.log(eNumbers[i])
    }
   }
   printCountDown()
//Multiplication Table Generator: Print a multiplication table for a given number.
function multiplicationTable(){
   for(let x=1; x<=4; x++){
      console.log(`Multiplication of ${x}`)
      for(let y=1; y<=4; y++){
         console.log(`${x} X ${y} = ${x*y}`)}
   }
      
}
multiplicationTable()

//Array Element Printer: Print each element of an array.
function printArrayElement(){
 const pharms = [`Bob`, `Tochi`, `Kemka`, `Zak`];
 for(let i=0; i<pharms.length; i++){ 
    console.log(pharms[i])
   }
}
(printArrayElement())

//. String Repeater: Repeat a string a specified number of times.
function repeatStrings(){
   const pharms = [`Bob`, `Shekemi`, `Gael`, `Timeyin` ]
   let repeatBlock =[]
   for(let i=0; i<pharms.length; i++){
      repeatBlock.push(pharms[i], pharms[i])
   }
   return repeatBlock
}
console.log(repeatStrings())

//FUNCTION
//Greeter Function: Take a person's name as input and greet them with a personalized message.


function greetingCard (userName) {
   return `Hello ${userName}   Welcome to our app`
}
console.log(greetingCard(`Bob`))

//Area Calculator: Calculate the area of a rectangle, triangle, or circle.
function areaOfAShape (shape) {
   if(shape === `triangle`){
    let base = prompt(`enter base of the triangle`)
    let height = prompt(`enter height of the triangle`)
   return (0.5*base) * height
   }

   else if(shape === `rectangle`){
      let length = prompt(`enter length of the rectangle`)
      let width = prompt(`enter width of the rectangle`)
   return length * width 
   }

   else if(shape === `circle`){
      let radius = prompt(`enter radius of the circle`)
     const PIE = 3.14159
   return PIE * radius**2
   }

}
// console.log(areaOfAShape(prompt(`what shape do you want to check area for?`)))

//Palindrome Checker: Determine if a given word or phrase is a palindrome(reads the same backward as forward).

function palindromeChecker (word){
   return word.split(``).reverse().join(``) === word
}
console.log(palindromeChecker(`amala`))

//Number Reverser: Reverse the digits of a given number.
function reverseNumber (numbers){
   return Number(numbers.split(``).reverse().join(``))
   
}
console.log(reverseNumber(`19907`))

// Number Sorter: Sort an array of numbers in ascending or descending order.
let arrayNums = [18,  2, 4, 5, 6, 8, 1, 45, 20, 56]
   arrayNums.sort(function(a, b){
      return (a-b)
   })
console.log(arrayNums)

//FUNTION PARAMETERS
//Number Adder: Take two numbers as parameters and return their sum.
function sumation(a, b){
   return a+b
}
console.log(sumation(1, 2))

//Word Length Checker: Take a word as input and return its length.
function wordLength(word){
   return word.length
}
console.log(wordLength(`OsteoBob`)
)

//Age Difference Calculator: Calculate the age difference between two people given their birth years.
function ageDiffCalc (age1, age2){
let diff = age1 - age2
if(diff<0){
diff = -diff
return (`they are ${diff} years apart`)}
else{
   return (`they are ${diff} years apart`)
}
}
console.log(ageDiffCalc(2024, 1994))

//Temperature Converter: Convert between Celsius and Fahrenheit.
function tempConverter(fromUnit, toUnit){

   if(fromUnit === `c` && toUnit === `f`){
      let tempValue = prompt(`enter temperature value`)
   return `the temperature in this environment is ${(
      tempValue *9/5) + 32} degree fahrenheit`}

   else if(fromUnit === `f` && toUnit === `c`){
      let tempValue = prompt(`enter temperature value`)
      return `the temperature in this environment is ${(
         tempValue - 32) *(5/9)} degree celsius`
   }

   else{
      return`pls enter a valid temperature`
   }
   }
console.log(tempConverter(`c`, `f`))

//Currency Converter: Convert between two different currencies.
function currencyConverter (fromCurrency, toCurrency){

   if(fromCurrency === `#` && toCurrency=== `$` ){
      let value = prompt(`enter amount`)
      return value/1400
   }

   else if(fromCurrency === `$` && toCurrency=== `#`){
      let value = prompt(`enter amount`)
      return value*1400
   }

   else if(fromCurrency === `#` && toCurrency=== `pounds` ){
      let value = prompt(`enter amount`)
      return value/1950
   }

  else if(fromCurrency === `pounds` && toCurrency===`#` ){
      let value = prompt(`enter amount`)
      return value*1950
   }

   else if(fromCurrency === `euro` && toCurrency=== `#` ){
      let value = prompt(`enter amount`)
      return value*1750
   }

   else if(fromCurrency === `#` && toCurrency=== `euro` ){
      let value = prompt(`enter amount`)
      return value/1750
   }

}
// console.log(currencyConverter(prompt(`currency from?`), prompt(`currency to`)))



//ARROW FUNTIONS
//You may not necessarily create a new array with this, you may decide to push these modified elements into an alread existing array
const originalArray = [1, 10, 2, 5, 7 ,8]
let doubledArray = []
originalArray.map(element => doubledArray.push(element, element))
console.log(doubledArray)

// String Concatenation: Combine two strings into a single string.

const stringArray = [`Abah`, `Emmanuel`,  `Onuh`, `Bob` ]
const concatArray = stringArray.reduce((acc, curr)=> acc + ` `+ curr )

//the accumulator/the initializer here is the first string which is Abah, we are asking it to add it to the current and return the value, remember, reduce wil return only one value which is the accumulator and all the other current values

console.log(concatArray)

// Even Number Filter: Filter an array of numbers to keep only the even ones.
const evenNums = originalArray.filter(element => element%2 ===0)

console.log(evenNums)


//Word Splitter: Split a sentence into an array of words.
let arrayOfSenetence = [`Javascript is troubling me but i won't give up`]

let splitter = arrayOfSenetence.map(element => element.split(` `))

console.log(splitter)



//OBJECT LITERALS
//Person Object: Create an object representing a person with properties likename, age, and  occupation.

const personObject = {
    firstName: `Emmanuel`,
    surName: `Abah`,
    occupation: `Pharmacist`,
    [`food they like`]: `Semo`
   }
console.log(personObject)
// Book Object: Create an object representing a book with properties like title,author, and genre.
const bookObject = {
   bookTitle: `Things fall apart`,
   author: `Chinue Achebe`,
   genre: `Epic`,
  }
console.log(bookObject)
// Animal Object: Create an object representing an animal with properties likespecies, name, and age.
const animalObject =  {
  species: `Rothweiler`,
  surName: `Zeues`,
  age: 8,
 }
console.log(animalObject)
//  Product Object: Create an object representing a product with properties like name, price, and description.
const productObject =  {
   name: `Ceftriaxone`,
   price: 2500,
   description: `A broad spectrum antibiotic for the treament of succeptible bacterial infection`,
  }
console.log(productObject)
//Address Object: Create an object representing an address with properties like street, city, state, and zip code.
const addressObject =  {
   street: `Anambra crescent`,
   state: `F.C.T`,
   zipcode: 900107,
  }
console.log(addressObject)


//ARRAYS
//Number Sorter: Sort an array of numbers in ascending or descending order
let arrayToSort = [1, 3, 50, 4, 4, 6, 80, 10,]
arrayToSort.sort((a, b) =>a-b )
console.log(arrayToSort)

//Word Finder: Check if a given word exists within an array of words.
const wordFindersArray = [
   `Messi`,
   `Ronaldinho`,
   `Pele`,
   `Maradona`,
   `Okocha`,
   `Kanu`,
   `Lewandoski`,
   `Iniesta`,
   `Pep`,
   `Mbape`,
   `Ronaldo`,
   `Halaand`,
]
//this is an array of words with different player names, we will be checking for some footballers if they exist in our list of items in this array.
console.log(wordFindersArray.includes(`Bob`))

// Largest Number Finder: Find the largest number in an array.
//we can loop over this array or we can use the reduce method

//Loop?
const number = [2, 4, 6, 2, 8, 10, 1, 3, 5, 7, 9]
let LargestNum = 0
number.forEach(element => {if(element>LargestNum)
LargestNum = element})
console.log(LargestNum)

//Reduce method
let largextNum = number.reduce((acc, curr) =>
   {
      if(curr>acc)
      acc = curr
     return acc
   }
   )
console.log(largextNum)

//Duplicate Remover: Remove duplicate elements from an array.

number.forEach(function(e, i, a){
 bob = a.indexOf(e)}
)
console.log(bob)









//Reverse Array 
//this is an array of different items, our aim will be to reverse the original/natural order/position of these elemets inside this array 

const reverseArray = [
   `Messi`,
   59,
   {  studenTname: `Bob`,
      school: `ojobo`,
      level: `part 5`,
     age: 14,
     iD: 4356
   },
   `Maradona`,

  function (){

    console.log(`I am ${reverseArray[9].studenTname} of ${reverseArray[9].level} with ID number ${reverseArray[9].iD}, ask me about ${reverseArray[9].school}  my favorite footballer is ${reverseArray[11]}`)
   },
   
   500,
   `Lewandoski`,
   `Iniesta`,
   `Pep`,
   500,
   `Ronaldo`,
   `Halaand`,
]
console.log(reverseArray.reverse())


//TO FIND LARGEST NUMBER IN AN ARRAY


//WHILE LOOPS
//Guessing Game: Keep prompting the user for a guess until they guess the correct number.
 function guessGame (){
   let check = false
   let compNumb;
   let userGuess;
   attempt = 0
   while(check === false){
       compNumb = Math.floor(Math.random()*4)
       userGuess = Number(prompt(`user guess`))
       
       if (compNumb !== userGuess)
         alert(`computer chose ${compNumb} try again Bobo`)
       else if(compNumb === userGuess){
           check = true
           alert(`You won! after ${attempt} tries`)
       }
       else if(attempt === 2 && check===false){
           alert(`time up bro! you failed after ${attempt} attempts`)
           break
       }
       attempt++
       
   }
 }
guessGame()

 //Password Validator: Keep prompting the user for a password until it meets certain criteria (length, complexity).

 //A password Setter Function: This function helps you set a defined desired condition for choosing a password

function passwordSet (userPass){
   if(userPass.length < 8){
       alert(`must be at least 8 character`)
       return false
   }

   if (!/[A-Z]/.test(userPass)){
       alert(`must include a Block letter`)
       return false
   }

   if(!/[a-z]/.test(userPass)){
       alert(`must include a small letter`)
       return false
   }

   if(!/\d/.test(userPass)){
       alert(`must include a digit`)
       return false
   }

   if(!/[!@#$%^&*><(){}?,."?:]/.test(userPass)){
       alert(`must include a special character`)
       return false
   }

   else{
       return true
   } 
}

//A password Signup Check Function: This function uses the password set function above to regulate the input password by the new user so as to enforce them to input the set condition.
function signUpCheck (){
    let check = false //condition to keep my loop running (boolean)
    let userName = 8//Data to be collected by this function
    let pswrd = `88Monkeys@`; //data to be validated before collecting

    while(check === false){
        pswrd 
        check = passwordSet(pswrd) //for my loop to stop, i need to alter the condition with a (boolean set) remember, my passwordSet function is a boolean data 

        if(check === false){
            alert(`wrong password`)
        }

        if (check === true){
            alert (`aceepted`)
        }
    }

}
console.log(signUpCheck())

//Number Counter: Count from 1 to a given number.
let t = 0
while(t<=10){
   alert(t)
   t++
}