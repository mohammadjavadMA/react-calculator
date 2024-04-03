const Numpad = ({ set_numb, now_number, set_oper, operation }) => {
  const calculate = (event) => {
    if (!operation) {
      set_numb(Number(now_number + event.target.innerHTML));
    } else if (operation === "+") {
      set_numb(Number(now_number + Number(event.target.innerHTML)));
      // set_oper(null);
    } else if (operation === "-") {
      set_numb(Number(now_number - Number(event.target.innerHTML)));
      // set_oper(null);
    } else if (operation === "x") {
      set_numb(Number(now_number * Number(event.target.innerHTML)));
      // set_oper(null);
    } else {
      set_numb(Number(now_number / Number(event.target.innerHTML)));
      // set_oper(null)
    }
    set_oper(null)
  };
  return (
    <div className="numpad">
      <div
        className="number"
        onClick={(event) => {
          calculate(event)
        }}
      >
        1
      </div>
      <div
        className="number"
        onClick={(event) => {
          calculate(event)
        }}
      >
        2
      </div>
      <div
        className="number"
        onClick={(event) => {
          calculate(event)
        }}
      >
        3
      </div>
      <div
        className="number"
        onClick={(event) => {
          set_oper(event.target.innerHTML);
        }}
      >
        +
      </div>
      <div
        className="number"
        onClick={(event) => {
          calculate(event)
        }}
      >
        4
      </div>
      <div
        className="number"
        onClick={(event) => {
          calculate(event)
        }}
      >
        5
      </div>
      <div
        className="number"
        onClick={(event) => {
          calculate(event)
        }}
      >
        6
      </div>
      <div
        className="number"
        onClick={(event) => {
          set_oper(event.target.innerHTML);
        }}
      >
        -
      </div>
      <div className="number" onClick={(event) => {
        calculate(event)
      }}>
        7
      </div>
      <div
        className="number"
        onClick={(event) => {
          calculate(event)
        }}
      >
        8
      </div>
      <div
        className="number"
        onClick={(event) => {
          calculate(event)
        }}
      >
        9
      </div>
      <div
        className="number"
        onClick={(event) => {
          set_oper(event.target.innerHTML);
        }}
      >
        x
      </div>
      <div
        className="number"
        onClick={() => {
          set_numb(0);
        }}
      >
        C
      </div>
      <div className="number">0</div>
      <div className="number">=</div>
      <div
        className="number"
        onClick={(event) => {
          set_oper(event.target.innerHTML);
        }}
      >
        /
      </div>
    </div>
  );
};
export default Numpad;
