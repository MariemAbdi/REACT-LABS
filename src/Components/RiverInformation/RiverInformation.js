import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getRiverInformation } from '../../services/rivers';


export default function RiverInformation({ name }) {

  //This will update the component by setting the riverInformation when the asynchronous function resolves. 
  const [riverInformation, setRiverInformation] = useState();

  //Setting the river's data based on its name
  useEffect(() => {
    let mounted = true;
    getRiverInformation(name)
    .then(data => {
      if(mounted) {
        setRiverInformation(data)
      }
    });

    //With the useEffect Hook, you can return a function that will run when the component unmounts. 
    //Return a function that sets mounted to false
    return () => {
     mounted = false;
   }

  }, [name])

  //showing the river's data as long as they're not equal to null
  return(
    <div>
      <h2>River Information</h2>
      <ul>
        <li>Continent: {riverInformation?.continent}</li>
        <li>Length: {riverInformation?.length}</li>
        <li>Outflow: {riverInformation?.outflow}</li>
      </ul>
    </div>
  )
}

RiverInformation.propTypes = {
  name: PropTypes.string.isRequired
}