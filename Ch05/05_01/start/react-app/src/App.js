import "./App.css";
import { useState } from "react";

function useInput(initialValue) {
  const [valuee, setValue] = useState(initialValue);
  // console.log(valuee)
  // console.log(initialValue)
  return [
    {
      valuee,
      onChange: e => setValue(e.target.value)
    },
    () => setValue(initialValue)
  ];
}

function App() {

  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useState("#000000");

  const handleColorChange = (e) => {
    resetColor(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(titleProps)
    console.log(colorProps)
    alert(`${titleProps.valuee}, ${colorProps}`);
    resetTitle();
    resetColor('#000000');
  };
  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text" 
        placeholder="Color title..." />
      <input value={colorProps} type="color" onChange={handleColorChange}  />
      <button>Add</button>
    </form>
  );
  
}

export default App;
