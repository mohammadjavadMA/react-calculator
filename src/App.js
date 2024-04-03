import { useState } from "react";
import "./App.css";
import Numpad from "./Components/Numpad";

function App() {
  const [now_number, set_now_number] = useState(0);
  const [operation, set_operation] = useState(null);
  const set_oper = (oper) => {
    set_operation(oper)
  }
  const set_numb = (number) => {
    set_now_number(number);
  };
  return (
    <div className="App">
      <div className="monitor">
        <p>{now_number}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{operation && operation}</p>
      </div>
      <Numpad operation={operation} set_oper={set_oper} now_number={now_number} set_numb={set_numb} />
    </div>
  );
}

export default App;
