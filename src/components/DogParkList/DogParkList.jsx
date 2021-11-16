import React, { useState } from 'react';
import {useSelector} from 'react-redux';


export default function DogParkList(props) {
 
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Functional Component');

  return (
    <div>
      <h2>Dog Park LIST + Item here</h2>
    </div>
  );
}
