import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import AnimalDetails from '../AnimalCard/AnimalDetails';

//An Animal Card
//...props is called the spread operator This will change each key-value pair into a prop
export default function AnimalCard({ name, size, ...props }) {
  return(
    <Card title='Animal' details={<AnimalDetails {...props}/>}>
      <h3>{name}</h3>
      <div>{size}kg</div>
    </Card>
  )
}

//Here we are destructuring the props in the parameter list for the AnimalCard function
//then displaying the data in a div
AnimalCard.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
}