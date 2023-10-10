import React, { useState } from "react";
const Filtere = () => {
  // map
  // let arr = [1, 2, 3, 4];

  // let newarr = arr.map((value) => {
  //   console.log(value);
  //   return value + 10;
  // });
  // output=[11,12,13,14]

  // reduce
  // console.log(newarr);

  // let arr2 = [2, 3, 4, 6, 8];

  // let newarr2 = arr2.reduce((h1, h2) => {
  //   return h1 + h2;
  // });

  // console.log(newarr2);

  // output = [23];

  // filter
  // let arr3 = [3, 6, 9, 12, 15, 22, 30];
  // let newarr3 = arr3.filter((a) => {
  //   return a < 10;
  // });
  // console.log(newarr3);
  //  output = 3,6,9
  //   const [nav, setNav] = useState(true);

  //   function shownav() {
  //       setNav(true);
  //       document.body.style.backgroundColor = "black";
  //   }
  //   function hidenav() {
  //       setNav(false);
  //       document.body.style.backgroundColor = "white";
  //   }

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  console.log(name, password);

  function odd(number) {
    // Replace with the number you want to check

    if (number % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
  console.log(odd(2));
  return (
    <div>
      {/* <div onClick={nav ? shownav : hidenav}>
        <button onClick={() => setNav(false)}>{nav ? "nav" : "shownav"}</button>
      </div>
      <div className="bg-danger"></div> */}

      <form action="">
        <input
          type="email"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Filtere;
