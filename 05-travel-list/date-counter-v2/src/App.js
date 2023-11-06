import { useState } from "react"
import "./App.css"

export default function App() {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)
  const today = new Date("2027-06-21")
  today.setDate(today.getDate() + count)

  const handleReset = () => {
    setStep(1)
    setCount(0)
  }

  return (
    <div className="App">
      <div>
        <input
          type="range"
          name="range"
          id="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <label htmlFor="range">{step}</label>
      </div>
      <div>
        <button
          onClick={() => {
            setCount((c) => c - step)
          }}
        >
          -
        </button>
        <input
          type="text"
          name="count"
          id="count"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button
          onClick={() => {
            setCount((c) => c + step)
          }}
        >
          +
        </button>
      </div>
      <div>Today is {today.toDateString()}</div>
      {(step === 1 && count === 0) || (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  )
}
