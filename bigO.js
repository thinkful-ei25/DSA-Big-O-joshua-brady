'use strict';

function getRunTime(fn, input){
  const {ticks, result} = fn(input);
  console.log(`With input of size ${input}, ${fn.name} ` +
  `clocked ${ticks} ticks to generate result of ${result}.`);
}

//this is constant

function isEven(value){
  let ticks = 0;
  if (value % 2 === 0){
    ticks ++;
    return { 
      result: true,
      ticks: ticks
    };

  }
  else{
    ticks++;
    return { 
      result: false,
      ticks: ticks
    };
  }
}

//n^2
// function areYouHere(arr1, arr2) {
//   let ticks =0;
//   for (let i=0; i<arr1.length; i++) {
//     ticks ++;
//     const el1 = arr1[i];
//     for (let j=0; j<arr2.length; j++) {
//       ticks++;
//       const el2 = arr2[j];
//       if (el1 === el2) {
//         return {
//           result: true,
//           ticks
//         };
//       }
//     }
//   }
//   return {
//     result: false,
//     ticks
//   };
// }

// getRunTime(areYouHere, [[2, 4, 12, 1, 13, 121, 13, 12], [1, 321, 12, 12, 3,1, 23, 332, 23]]);

// getRunTime(isEven, 236874867484);



//linear
// let arr = [2, 4, 12, 1, 13, 121, 13, 12];
// let arr2 = [2, 4, 12, 1, 13, 121, 13, 12, 1, 321, 12, 12, 3,1, 23, 332, 23];

// function doubleArrayValues(array) {
//   let ticks = 0;
//   for (let i=0; i<array.length; i++) {
//     ticks ++;
//     array[i] *= 2;
//   }
//   return {result: array,
//     ticks
//   };
// }

// getRunTime(doubleArrayValues, arr);

//this is linear
// function naiveSearch(array, item) {
//   for (let i=0; i<array.length; i++) {
//     if (array[i] === item) {
//       return i;
//     }
//   }
// }

//this is n^2
// function createPairs(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for(let j = i+1; j < arr.length; j++) {
//       console.log(arr[i] + ', ' +  arr[j] );
//     }
//   }
// }


// this is linear
// function generateFib(num) {
//   let result = [];
//   for (let i = 1; i <= num; i++) {

//     // we're adding the first item
//     // to the result list, append the
//     // number 0 to results
//     if (i === 1) {
//       result.push(0);
//     }
//     // ...and if it's the second item
//     // append 1
//     else if (i == 2) {
//       result.push(1);
//     }

//     // otherwise, sum the two previous result items, and append that value to results.
//     else {
//       result.push(result[i - 2] + result[i - 3]);
//     }
//   }
//   // once the for loop finishes
//   // we return `result`.
//   return result;
// }


//this is logn
// function efficientSearch(array, item) {
//   let minIndex = 0;
//   let maxIndex = array.length - 1;
//   let currentIndex;
//   let currentElement;

//   while (minIndex <= maxIndex) {
//     currentIndex = Math.floor((minIndex + maxIndex) / 2);
//     currentElement = array[currentIndex];

//     if (currentElement < item) {
//       minIndex = currentIndex + 1;
//     }
//     else if (currentElement > item) {
//       maxIndex = currentIndex - 1;
//     }
//     else {
//       return currentIndex;
//     }
//   }
//   return -1;
// }

//constant
// function findRandomElement(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }



//linear
// function isPrime(n) {
//   // if n is less than 2 or a decimal, it's not prime
//   if (n < 2 || n % 1 != 0) {
//     return false;
//   }
//   // otherwise, check if `n` is divisible by any integer
//   // between 2 and n.
//   for (let i = 2; i < n; ++i) {
//     if (n % i == 0) return false;
//   }
//   return true;
// }