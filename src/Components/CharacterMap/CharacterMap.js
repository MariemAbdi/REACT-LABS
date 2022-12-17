import React, { memo, useContext } from 'react';
import PropTypes from 'prop-types';
import { TextContext } from '../App/App';

// this function calculates the occurrences of every typed letter and displays them based on DESC count order
function itemize(text){
    const letters = text.split('')
      .filter(l => l !== ' ')
      .reduce((collection, item) => {
        const letter = item.toLowerCase();
        return {
          ...collection,
          [letter]: (collection[letter] || 0) + 1
        }
      }, {})
    return Object.entries(letters)
      .sort((a, b) => b[1] - a[1]);
   }
   
//A component that calculates and shows the character map of a string
function CharacterMap({ show }) {
  const text = useContext(TextContext);

  if(!show) {
    return null;
  }

  return(
    <div>
      Character Map: 
      {itemize(text).map(character => (
       <div key={character[0]}>
         {character[0]}: {character[1]}
       </div>
     ))}
    </div>
  )
}

CharacterMap.proTypes = {
  show: PropTypes.bool.isRequired
}
//We use the React memo, the function will only re-render if the props or context change
export default memo(CharacterMap);
