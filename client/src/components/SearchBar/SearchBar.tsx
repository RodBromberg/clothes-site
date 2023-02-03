import React, { useState } from 'react'

export const SearchBar = () => {
    const [text,setText] = useState('')
  return (
    <input 
    type='text' 
    value={text} 
    onChange={e => setText(e.target.value) }
    placeholder='search items'
    />
  )
}
