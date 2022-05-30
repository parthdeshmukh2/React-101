import React from 'react'

const RandomComp = ({setToDo}) => {
  return (
    <div>
      <button onClick={() => setToDo([{id: 1, title: 'title'}])}>add just one item</button>
    </div>
  )
}

export default RandomComp
