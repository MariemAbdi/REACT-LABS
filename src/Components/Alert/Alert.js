import React from 'react';
import PropTypes from 'prop-types';
//import './Alert.css';

import { createUseStyles } from 'react-jss';

const colors = {
  success: '#6da06f',
  error: '#f56260',
};

//object styling
/*const style = {
    heading: {
      color: colors[type],
      margin: '0 0 10px 0',
    },
    wrapper: {
      border: `${colors[type]} solid 1px`,
      marginBottom: 15,
      padding: 15,
      position: 'relative',
    }
  } */

  //jss styling
  const useStyles = createUseStyles({
    wrapper: {
      border: ({ type }) => `${colors[type]} solid 1px`,
      marginBottom: 15,
      padding: 15,
      position: 'relative',
      '& > h2': {
        color: ({ type }) => colors[type],
        margin: [0, 0, 10, 0],
      }
    }
});


//showing an alert message
//creating an alert that will take children, type, and title as props
export default function Alert({ children, title, type }) {
  const classes = useStyles({ type })
  return (
    <div //className={`alert-wrapper ${type}`}
    //style={style.wrapper} object styling
    className={classes.wrapper}//jss styling
    >
      <h2 //style={style.heading} object styling
      >{title}</h2>
      {children}
    </div>
  )
}

Alert.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element), 
    PropTypes.element.isRequired
  ]),
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}