import React from 'react'
import ErrorPageImg from '../assets/ErrorPage.gif'
import './pages.css'

function ErrorPage() {
  return (
    <div>
        <div className='text-red scary-text'>Error!!! PAGE NOT FOUND!!!</div>
        <img className="creepy-pasta" src={ErrorPageImg} alt='errorJiggly'/>
    </div>
    
  )
}

export default ErrorPage