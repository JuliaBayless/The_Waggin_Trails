import React, { useState } from 'react';
import {useSelector} from 'react-redux';


export default function AddDogParkForm(props) {
 
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Functional Component');

  return (
   <>
   <h2>Dog Park Form HERE</h2>
   </>
  );
}
