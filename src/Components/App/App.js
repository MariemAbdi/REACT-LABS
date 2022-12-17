import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBird, incrementBird } from '../../store/birds/birds'
import './App.css'

function App() {
  //Use the useState Hook to save the input value
  const [birdName, setBird] = useState('')
  //Used to show the birds with an alphabetical order
  const birds = [...useSelector(state => state.birds)].sort((a, b) => {
    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
  })
  //Dispatch sends a particular action to the Redux store
  //When Redux receives an action you have dispatched, it will pass the action to the reducers 
  //then they will update the data
  const dispatch = useDispatch()

  //triggering the dispatch (onsubmit)
  const handleSubmit = event => {
    event.preventDefault();//prevent the page form submission or refresh
    dispatch(addBird(birdName))//dispatch the addBird action with the birdName as an argument
    setBird('');//clear the input
  }

  return (
    <div className="wrapper">
      <h1>Bird List</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>
            Add Bird
          </p>
          <input type="text" onChange={e => setBird(e.target.value)} value={birdName}/>
        </label>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <ul>
        {birds.map(bird => (
          <li key={bird.name}>
            <h3>{bird.name}</h3>
            <div>
              Views: {bird.views}
              <button onClick={() => dispatch(incrementBird(bird.name))}><span role="img" aria-label="add">➕</span></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App