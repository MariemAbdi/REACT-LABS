import React from 'react';
import './App.css';

import animals from './data';
import AnimalCard from '../AnimalCard/AnimalCard';

//We loop over the data and return a new AnimalCard with the relevant props
function App() {
  return (
    <div className="wrapper">
      {animals.map(animal =>
        <AnimalCard
          diet={animal.diet}
          key={animal.name}
          name={animal.name}
          size={animal.size}
          scientificName={animal.scientificName}
        />
      )}
    </div>
  );
}

export default App;