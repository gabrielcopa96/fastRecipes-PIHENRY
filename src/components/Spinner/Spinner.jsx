import React from 'react'
import './Spinner.css';

export const Spinner = () => {
  return (
    <div className="container-spinner">
        <div className="spinner"></div>
        <span>Loading Recipes...</span>
    </div>
  )
}

// export default Spinner