import React, { useState } from 'react'
import { useStore } from '../store/store'

export default function AddStateInput() {
  const setStateChoices = useStore((state) => state.setStateChoices)
  const stateChoices = useStore((state) => state.stateChoices)
  const [inputText, setInputText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!stateChoices.includes(inputText)) {
      setStateChoices([...stateChoices, inputText])
    }
    setInputText('')
  }

  const handleChange = (e) => {
    setInputText(e.target.value)
  }
  
  //implement fuse.js for abbreviation / state name matching

  return (
    <form className='state-form' onSubmit={handleSubmit}>
      <input
        className='state-input'
        type='text'
        placeholder='Add state by abbreviation'
        value={inputText}
        onChange={handleChange}
      />
      <button className='state-button'>
        <svg viewBox='0 0 100 100' aria-hidden='true' role='img'>
          <path d='M44.82 3.066h10.36v13.32H68.5v10.36H55.18v13.32H44.82v-13.32H31.5v-10.36h13.32z'></path>
          <path d='M24.045 29.207L1.383 41.641c-1.847 1.012-1.847 2.655 0 3.668l45.275 24.845c1.846 1.013 4.838 1.013 6.684 0L98.617 45.31c1.847-1.013 1.847-2.656 0-3.668L75.99 29.225l-.013.048l-4.588 4.76l17.207 9.442L50 64.655l-38.594-21.18l17.13-9.4zM4.727 52.857l-3.344 1.834c-1.847 1.013-1.847 2.656 0 3.668l45.275 24.846c1.846 1.013 4.838 1.013 6.684 0L98.617 58.36c1.846-1.013 1.845-2.655-.002-3.668l-3.342-1.834l-6.683 3.666l.004.002L50 77.705l-38.596-21.18l.004-.002z'></path>
        </svg>
      </button>
    </form>
  )
}