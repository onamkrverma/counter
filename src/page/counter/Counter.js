import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
  const [number, setNumber] = useState(0)

  return (
    <div className='counter-container'>
      <div className="title-line-wrapper">
        <h1>Counter</h1>
        <div className="line-wrapper"></div>
        <span className='infinity-positive absolute-bottom'>+ꝏ</span>
        <span className='infinity-negative absolute-bottom'>-ꝏ</span>
        <span className='zero absolute-bottom'>0</span>
      </div>

      <div className="counter-wrapper">
        <div className="decrement-wrapper " >
          <button
            className='decrement-btn button-wrapper cur-point'
            type='button'
            title='decrement'
            onClick={() => setNumber(number - 1)}>
            &darr; -
          </button>
        </div>

        <div className="number-wrapper">
          {number}
        </div>
        <div className="increment-wrapper " >
          <button
            className='increment-btn button-wrapper cur-point'
            type='button'
            title='increment'
            onClick={() => setNumber(number + 1)}>
            &uarr; +
          </button>

        </div>
      </div>
      <div className="reset-wrapper">
        <button
          className="reset-btn button-wrapper cur-point"
          type='button'
          title='reset'
          onClick={() => setNumber(0)}>
          Reset
        </button>
      </div>


    </div>
  )
}

export default Counter