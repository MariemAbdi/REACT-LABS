import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

//Card Component
//The children prop can either be a JSX element or an array of JSX elements.
export default function Card({ children, details, title }) {
  return(
    <div className="card">
      <div className="card-details">
        <h2>{title}</h2>
        {details}
      </div>
      {children}
    </div>
  )
}

//The card's filling
Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element), 
    PropTypes.element.isRequired
  ]),
  details: PropTypes.element,
  title: PropTypes.string.isRequired,
}

//per default the details prop will be null
Card.defaultProps = {
  details: null,
}