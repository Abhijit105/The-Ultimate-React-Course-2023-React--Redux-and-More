import { useState } from 'react'

export default function App() {
  const [billedInput, setBilledInput] = useState(0)
  const [userTip1, setUserTip1] = useState(0)
  const [userTip2, setUserTip2] = useState(0)

  let totalBill

  const handleReset = function () {
    setBilledInput(0)
    setUserTip1(0)
    setUserTip2(0)
    totalBill = 0
  }

  return (
    <div>
      <BilledInput onBilledInput={setBilledInput} billedInput={billedInput} />
      <SelectPercentage onUserTip={setUserTip1} userTip={userTip1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage onUserTip={setUserTip2} userTip={userTip2}>
        How did your friend like the service?
      </SelectPercentage>
      <Output
        billedInput={billedInput}
        userTip1={userTip1}
        userTip2={userTip2}
        totalBill={totalBill}
      />
      <Reset onReset={handleReset} />
    </div>
  )
}

function BilledInput({ onBilledInput, billedInput }) {
  return (
    <div>
      How much was the bill?
      <input
        value={billedInput}
        id='bill-input'
        name='bill-input'
        onChange={e => {
          onBilledInput(Number(e.target.value))
        }}
      />
    </div>
  )
}

function SelectPercentage({ children, onUserTip, userTip }) {
  return (
    <div>
      {children}
      <select
        name='select-percentage'
        id='select-percentage'
        value={userTip}
        onChange={e => {
          onUserTip(Number(e.target.value))
        }}
      >
        <option value='0'>Dissatisfied (0%)</option>
        <option value='5'>It was okay (5%)</option>
        <option value='10'>It was good (10%)</option>
        <option value='20'>It was amazing! (20%)</option>
      </select>
    </div>
  )
}

function Output({ billedInput, userTip1, userTip2, totalBill }) {
  const avgTip = (userTip1 + userTip2) / 200
  const tip = avgTip * billedInput
  totalBill = billedInput + tip

  return (
    totalBill === 0 || (
      <h2>
        You pay ${totalBill} (${billedInput} + ${tip} tip)
      </h2>
    )
  )
}

function Reset({ onReset }) {
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  )
}
