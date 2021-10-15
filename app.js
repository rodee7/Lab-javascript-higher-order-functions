// Function #1: Array Slice
function arraySlice(start, end)
{
    const foods = [pizza, burger, fingerChips, donuts, springRoll]
    const modifiedFood = foods.splice(start, end)
    return modifiedFood
}

// Function #2: Array Splice
function arraySplice()
{
    const foods = [pizza, burger, fingerShips, donuts, springRoll]
    foods.splice(2,0,"noodles", "icecream")
    return foods
}

// Function #3: Filter
const numberArray = [12,324,213,4,2,3,45,4234]
function isEven(numberArray )
{
    const evenNumbers = numberArray.filter(number => number%2 == 0)
    return evenNumbers
}

// Function for finding if number is prime
const numberArray1 = [12,324,213,4,2,3,45,4234];
numberArray1.filter(isPrime)
function isPrime(num1) {
    if (num1 <= 1) 
    {
      console.log('Not Prime')
      return false;
    }
    if (num1 == 2) 
    {
    console.log('Prime')
    return true;
    }
    for (let i = 2; i <= num1 / 2; i++) {
      if (num1 % i == 0) {
        console.log('Not Prime')
        return false;
      }
    }
    console.log('Prime')
    return true;
  }

// Function #4: Reject
// Function for finding non prime numbers

const numberArray2 = [12,324,213,4,2,3,45,4234];
numberArray2.filter(nonPrime)
function nonPrime(num2) {
    if (num2 <= 1) 
    {
    return true;
    }
    if (num2 == 2) 
    {
    return false;
    }
    for (let i = 2; i <= num2 / 2; i++) {
      if (num2 % i == 0) {
      return true;
      }
    }
    return false;
  }

//   Function #5: Lambda
const numberArray3 = [12,324,213,4,2,3,45,4234]
numberArray3.filter(numberArray3 => {
 
     if(numberArray3 % 2 == 0)
     return numberArray3
   
})

// Function #6: Map
function findSquareOfNumbers()
{
    const myArray = [11, 34, 20, 5, 53, 16];
    myArray.map(num => {
        return num * num
    })
}

// Only using Map
const myArray1 = [11, 34, 20, 5, 53, 16, 4];
myArray1.map(num => {
    console.log(num * num)
})

// Function #7: Reduce
// function multiply()
// {
   const myArray = [2, 3, 5, 10]
   let product = myArray.reduce((num1, num2)=>num1 * num2)
// }

