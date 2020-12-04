import React, { useState, useEffect } from "react";
import Example from "./Example";

const Example2 = () => {
  const [count, setCount] = useState(0);

  //similar to compoenetDidMount and componentDidUpdate:
  useEffect(() => {
    //Update the documment title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Example2;
