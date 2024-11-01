import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [state, setState] = useState(0);

  function handleChange() {
    setState((prevState) => prevState + 1);
  }

  return (
    <div>
      {/* Do not remove the main div */}
      <p>Button clicked {state} times</p>
      <button onClick={handleChange}>Click me</button>
    </div>
  );
};

export default App;
