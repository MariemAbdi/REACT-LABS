import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TextContext } from '../App/App';

//A component that calculates and shows the word count of a string
export default function WordCount({ show }) {
  const text = useContext(TextContext);

  if(!show) {
    return null;
  }

  return(
    <div>
      Word Count: {text.split(' ').length}
    </div>
  )
}

WordCount.proTypes = {
  show: PropTypes.bool.isRequired
}