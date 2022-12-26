import React from 'react';
import Studentdetails from './Studentdetails';
import Data from '../Records/Records.json';

const Student = () => {
  return (
    <div className='studentlist'>
        {Data.map(data=><Studentdetails data={data} key={data.id}/>)}
    </div>
  )
}

export default Student;