import React from "react";

const PraticeQuestion = () => {
  // Q.1 given a string, reverse each word in the sentence//
  var str = "how are you";
  var savedStr = str.split(" ").map(function (word) {
    return word.split("").reverse().join("");
  });
  console.log(savedStr.join(" "));
  // Q.2 How to Check if an object is an array or not?

  function checkArray(elem) {
    return Array.isArray(elem);
  }
  console.log(checkArray([])); //true
  console.log(checkArray({})); //false

  // push method
  var arr1 = ["1", "2", "3", "4"];
  arr1.push("5");
  console.log(arr1);
    // splice
    var splice1 = ["1", "2", "3", "5", "6"];
    splice1.splice("2", "3")
    console.log(splice1);
  return <div></div>;
};

export default PraticeQuestion;
