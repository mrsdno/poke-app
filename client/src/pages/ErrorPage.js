import React from 'react'
import ErrorPageImg from '../assets/ErrorPage.gif'

function ErrorPage() {
  return (
    <div>
        <div className='text-red'>Error!!! PAGE NOT FOUND!!!</div>
        <img src={ErrorPageImg} alt='errorJiggly'/>
    </div>
    
  )
}

export default ErrorPage