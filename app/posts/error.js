'use client'
import React from 'react'

const error = ({error, reset}) => {

    useEffect(() => {
      console.log(error)
    }, [error])
    

  return (
    <div>
        <h2> Something wents werong </h2>
        <button onClick={reset}> 
            Try again 
        </button>
    </div>
  )
}

export default error