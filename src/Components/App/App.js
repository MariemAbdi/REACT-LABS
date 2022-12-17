import React, { lazy, Suspense, useReducer, useState } from 'react';
import './App.css';

const RiverInformation = lazy(() => import(/* webpackChunkName: "RiverInformation" */ '../RiverInformation/RiverInformation'));

//You use the lazy function to dynamically import the component and set it to a variable. 
//Suspense is a built-in component you use to display a fallback message while the code is loading.
function App() {
  const [river, setRiver] = useState('nile');
  const [show, toggle] = useReducer(state => !state, true);
  return (
    <div className="wrapper">
      <h1>World's Longest Rivers</h1>
      <div><button onClick={toggle}>Toggle Details</button></div>
      <button onClick={() => setRiver('nile')}>Nile</button>
      <button onClick={() => setRiver('amazon')}>Amazon</button>
      <button onClick={() => setRiver('yangtze')}>Yangtze</button>
      <button onClick={() => setRiver('mississippi')}>Mississippi</button>
      <Suspense fallback={<div>Loading Component</div>}>
        {show && <RiverInformation name={river} />}
      </Suspense>
    </div>
  );
}

export default App;