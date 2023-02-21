import React from 'react'
import spin from './spinner.gif'

const Spinner = ()=>{
  return (
    <div className="text-center my-5 py-5">
      <img src={spin} alt='...'/>
    </div>  
  );
}

export default Spinner;