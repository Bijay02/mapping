import React from 'react';

const Studentdetails = ({data}) => {
  // console.log(data);
  return(
    <div className='container'>
      <div>{data.name}</div>
      <div>{data.collegename}</div>
    </div>
  )
}

export default Studentdetails;