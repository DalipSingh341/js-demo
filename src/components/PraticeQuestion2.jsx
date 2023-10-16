import React from "react";

const PraticeQuestion2 = () => {
  // 1. Write a JavaScript function to find the sum of all the elements in an array.

  var a = [1, 2, 3, 4, 5];
  let a2 = a.reduce((h1, h2) => {
    return h1 + h2;
  });
  console.log(a2);
  //    output=15 //
  //2. Write a function to reverse a string.

  var b = ["car", "bike", "aeroplane", "ship"];
  let b2 = b.reverse();
  console.log(b2);

  // 3. Write a function that checks if a number is even.
  function odd(number) {
    if (number % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
  console.log(odd(2));
    // output=even //
    
  // 5. Write a function to calculate the factorial of a number.
  // let factorial = [1, 2, 5, 9, 12];
  //  let factorial2 = factorial.map((value) => {
  //       return value!;
  //  })
  //   console.log(factorial2)
  return <div></div>;
};

export default PraticeQuestion2;
