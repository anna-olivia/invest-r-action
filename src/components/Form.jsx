import { useState } from "react";

const startWerte = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

const Form = (props) => {
  const [userInput, setUserInput] = useState(startWerte);

  const submitHandler = (e) => {
    e.preventDefault();
    props.onCalculate(userInput);
  };
  const resetHandler = () => {
    setUserInput(startWerte);
  };
  const changeHandler = (id, value) => {
    setUserInput((prevInput) => {
      return { ...prevInput, [id]: value };
    });
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings (€)</label>

          <input
            type="number"
            id="current-savings"
            onChange={(e) => changeHandler("current-savings", e.target.value)}
            value={userInput["current-savings"]}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings (€)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(e) =>
              changeHandler("yearly-contribution", e.target.value)
            }
            value={userInput["yearly-contribution"]}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={(e) => changeHandler("expected-return", e.target.value)}
            value={userInput["expected-return"]}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(e) => changeHandler("duration", e.target.value)}
            value={userInput["duration"]}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
