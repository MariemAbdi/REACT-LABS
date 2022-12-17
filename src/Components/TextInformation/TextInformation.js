import React, { useReducer } from 'react';
import CharacterCount from '../CharacterCount/CharacterCount';
import CharacterMap from '../CharacterMap/CharacterMap';
import WordCount from '../WordCount/WordCount';

//a reducer function that toggles the display value of each component 
//and a button to toggle each component with an onClick action
const reducer = (state, action) => {
  return {
    ...state,
    [action]: !state[action]
  }
}

//The TextInformation component will use the useReducer Hook to toggle the display of each component
export default function TextInformation() {
  const [tabs, toggleTabs] = useReducer(reducer, {
    characterCount: true,
    wordCount: true,
    characterMap: true
  });

  //showing/hiding the corresponding information on every button click
  return(
    <div>
      <button onClick={() => toggleTabs('characterCount')}>Character Count</button>
      <button onClick={() => toggleTabs('wordCount')}>Word Count</button>
      <button onClick={() => toggleTabs('characterMap')}>Character Map</button>
      <CharacterCount show={tabs.characterCount} />
      <WordCount show={tabs.wordCount} />
      <CharacterMap show={tabs.characterMap} />
    </div>
  )
}