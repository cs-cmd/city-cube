import "./NumberInput.css";

export default function NumberInput({ count, changeNumberFunction }) {
  function handleNumberEntry(value) {
    const valueAsNumber = parseInt(value);

    if (isNaN(valueAsNumber) || valueAsNumber < 0) {
      return;
    }

    changeNumberFunction(valueAsNumber);
  }

  return (
    <div className="counter">
      <button
        className="counter-button"
        onClick={() => changeNumberFunction(count - 1)}
      >
        -
      </button>
      <div className="after-container">
        <input
          type="number"
          className="counter-number"
          value={count}
          onInput={(e) => handleNumberEntry(e.target.value)}
        />
      </div>
      <button
        className="counter-button"
        onClick={() => changeNumberFunction(count + 1)}
      >
        +
      </button>
    </div>
  );
}
