import React, { useEffect, useRef, useState } from 'react'
import "./App.css"
const DIGITS = 5;
const App = () => {
  const [inputArr, setinputArr] = useState(new Array(DIGITS).fill(""))
  const refArr = useRef([]);
  const handleInputChange = (value, index) => {
    if (isNaN(value)) {
      return;
    }
    const nValu = value.trim()
    console.log("handlemanager call", nValu);
    const nArray = [...inputArr];
    nArray[index] = nValu.slice(-1)
    setinputArr(nArray);
    nValu && refArr.current[index + 1]?.focus()
  }
  const handleonKEyDown = (e, index) => {
    console.log("E:", e);

    if (!e.target.value && e.key == 'Backspace') {
      refArr.current[index - 1]?.focus()
    }
  }

  useEffect(() => {
    refArr.current[0]?.focus()
  }, [])

  return (
    <div className='app'>
      {inputArr.map((input, index) => {
        return (
          <input
            ref={input => (refArr.current[index] = input)}
            type='text'
            className='otp-input'
            key={index}
            value={inputArr[index]}
            onChange={(e) => handleInputChange(e.target.value, index)}
            onKeyDown={(e) => handleonKEyDown(e, index)}
          />
        )
      })}
    </div>
  )
}

export default App