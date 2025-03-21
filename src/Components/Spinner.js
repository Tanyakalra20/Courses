import React from 'react'
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className='flex flex-col item-center space-y-2'>
      <div className='spinner'></div>
      <p className='bg-bgDark text-lg font-semibold'>Loading....</p>
    </div>
  )
}

export default Spinner
