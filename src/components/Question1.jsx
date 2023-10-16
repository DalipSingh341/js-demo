import React, { useState } from "react";

const Question1 = () => {
  // function abc(n) {
  //   let first = n[0] * n[1];
  //   let value = n[0];
  //   let value2 = n[1];

  //   for (let i = 1; i < n.length - 1; i++) {
  //     let sum = n[i] * n[i + 1];
  //     if (sum > first) {
  //       first = sum;
  //       value = n[i];
  //       value2 = n[i + 1];
  //     }
  //   }
  //   console.log(first, value, value2);
  // }
  // abc([3, 4, 5, 6, -7, -10, 5]);

  const [name, setName] = useState(false);
  const handleSignin = () => {
    setName(true);
  };

  const handleSignout = () => {
    setName(false);
  };

  // let a = 3;
  // let a2 = a * a * a;
  // console.log(a,a,a,a2)

  // let number = [1,2,3,4,5];
  // let number
  // let sqaure = number * number;
  // let cube = number * square;

  // for (let number = 3; number < 5; number++);
  // {

  // // }
  // console.log(number, cube, sqaure);

  // const a = [3];
  // let a2 = a.map((value) => value ** 3);
  // console.log(a2);
  // output=27//

  // const a3 = [3, 4, 5];
  // let a4 = a3.map((value) => value ** 3);
  // console.log(a4);
  // output 27,64,125

  // function abc(n) {
  //  let cube = n * n * n;
  //   console.log(cube);
  // }
  // abc(3);
  // output27

  // for make 3 ki power 10
  function abc2(n) {
   let cube = n **10;
    console.log( `the 10 power of 3 is ${cube}`);
  }
  abc2(3);

  // output = 59049

  // function abc(start, end) {
  //   for (let i = start; i <= end; i++) {
  //    const cube = i * i * i;
  //    console.log(i + "*" + i + "*" + i + "=" + cube);
  //   }
  // }
  // abc(3, 6);

  function abc3(start, end) {
    for (let i = start; i <= end; i++) {
      const cube = i * i * i;
      console.log(i + "*" + i + "*" + i + "=" + cube);
    }
  }

  abc3(3, 6);
  // output is 3*3*3 =27 and so on 

  function abc4(start, end) {
    for (let i = start; i <= end; i++) {
      const cube = i **10;
      console.log(i + "*" + i + "*" + i + "=" + cube);
    }
  }

  abc4(3, 6);



  const [inputvalue1, setInputvalue1] = useState("Pallvi")
  const [inputvalue2, setInputvalue2] = useState("Muskan")
  const [inputvalue3, setInputvalue3] = useState("Keshav")

  // console.log(inputvalue1, inputvalue2, inputvalue3);
  return (
    <div>
      <div>
        {/* {name ? (
          <button type="button" onClick={handleSignout}>
            muskan
          </button>
        ) : (
          <button type="button" onClick={handleSignin}>
            pallvi
          </button>
        )} */}
      </div>
      <div>
        <button onClick={() => setName(!name)}>
          {name ? "muskan" : "pallvi"}
        </button>
      </div>
      <div>
        <div>
          <input type="text" placeholder={inputvalue1} onChange={(e)=>setInputvalue1(e.target.value)}/>
          {inputvalue1}
        </div>
        <div>
          <input type="text" placeholder={inputvalue2} onChange={(e)=>setInputvalue2(e.target.value)}/>
          {inputvalue2}
        </div>
        <div>
          <input type="text" placeholder={inputvalue3} onChange={(e)=>setInputvalue3(e.target.value)}/>
          {inputvalue3}
        </div>

      </div>
    </div>
  );
};

export default Question1;
