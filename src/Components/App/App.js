import React, { createContext, useState } from 'react';
import './App.css';
import TextInformation from '../TextInformation/TextInformation';

//We create a context to hold the value from the <textarea> element
//We capture the data using the useState Hook
export const TextContext = createContext();


//showing a textarea having 10 rows and 100 columns
function App() {
  const [text, setText] = useState('');

  return(
    <TextContext.Provider value={text}>
      <div className="wrapper">
        <label htmlFor="text">
          Add Your Text Here:
          <br/>
          <textarea
            id="text"
            name="text"
            rows="10"
            cols="100"
            onChange={e => setText(e.target.value)}
          >
          </textarea>
        </label>
        <TextInformation />
      </div>
    </TextContext.Provider>
  )
}

export default App;