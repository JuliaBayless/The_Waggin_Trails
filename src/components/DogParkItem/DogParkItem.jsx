import React, { useState } from 'react';
import {useSelector} from 'react-redux';


export default function DogParkItem(props) {
 
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Functional Component');

  return (
    <div>
      <h2>Dog Park Item here</h2>
    </div>
  );
}

