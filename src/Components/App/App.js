import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { getList, setItem } from '../../services/list';

function App() {
  //A stateful variable and setter function with useState to indicate whether to show a user an alert message
  const [alert, setAlert] = useState(false)
  //A useState hook to hold and set the input information 
  const [itemInput, setItemInput] = useState('')
  //Used useState hook to hold the data you fetch from the service 
  const [list, setList] = useState([])
  //The useRef Hook will preserve a variable for the lifetime of the component.
  //The only trick is to get the value you need to use the .current property.
  const mounted = useRef(true)

  //Update the list with setList if the component is mounted
  useEffect(() => {
    mounted.current = true
    if(list.length && !alert) {
      return;
    }
    getList()
      .then(items => {
        if(mounted.current) {
          setList(items)
        }
      })
    return () => mounted.current = false;
  }, [alert, list])


  //if alert is launched this makes it disappear after 1sec
  useEffect(() => {
    if(alert) {
      setTimeout(() => {
        if(mounted.current) {
          setAlert(false);
        }
      }, 1000)
    }
  }, [alert])


  //adds the input to the db list then resets the input to empty and calls the alert method
  const handleSubmit = (e) => {
    e.preventDefault();//to stop the form from refreshing the browser.
    setItem(itemInput)
      .then(() => {
        if(mounted.current) {
          setItemInput('');
          setAlert(true);
        }
      })
  }


  return(
    <div className="wrapper">
      <h1>My Grocery List</h1>
      <ul>
        {list.map(item => <li key={item.item}>{item.item}</li>)}
      </ul>
      {alert && <h2> Submit Successful</h2>}
      <form onSubmit={handleSubmit}>
        <label>
          <p>New Item</p>
          <input type="text" onChange={event => setItemInput(event.target.value)} value={itemInput} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;