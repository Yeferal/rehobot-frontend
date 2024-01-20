import React from 'react'

export default function LoadingCircle() {
  return (
    <div className='container d-flex justify-content-center align-items-center min-vh-100'>
        <div className="ring"></div>
        <span className='span-loading' >Cargando...</span>
    </div>
  )
}
