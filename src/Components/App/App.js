import React from 'react';
//import './App.css';
import { createUseStyles } from 'react-jss';

import Alert from '../Alert/Alert';
import CartSuccess from '../CartSuccess/CartSuccess';

//object styling
  //A style object
  /*const wrapper = {
    padding: 20
  };*/
  //----------------------------------------------
  //jss styling
  const useStyles = createUseStyles({
    wrapper: {
      padding: 20,
    }
  });

  
//Showing both the alert message and successfully added to the cart
function App() {
  const classes = useStyles()

  return (
    <div //className="wrapper" when using css file
     //style={wrapper} when using style objects
     className={classes.wrapper}//when using jss styling
     >
      <Alert title="Items Not Added" type="error">
        <div>Your items are out of stock.</div>
      </Alert>
      <CartSuccess />
    </div>
  )
}

export default App;