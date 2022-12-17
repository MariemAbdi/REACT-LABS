import React from 'react';
import PropTypes from 'prop-types';
import './AnimalDetails.css';

//returning an emoji depending on the diet type
function convertFood(food) {
  switch(food) {
    case 'insects':
      return '🐜';
    case 'meat':
      return '🍖';
    case 'plants':
    default:
      return '🌱';
  }
}

//using the previous function to display the diet's emoji
export default function AnimalDetails({ diet, scientificName }) {
  return(
    <div className="details">
      <h4>Details:</h4>
      <div>
        Scientific Name: {scientificName}.
      </div>
      <div>
        Diet: {diet.map(food => convertFood(food)).join(' ')}
      </div>
    </div>
  )
}

//returning the prop value
AnimalDetails.propTypes = {
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  scientificName: PropTypes.string.isRequired,
}