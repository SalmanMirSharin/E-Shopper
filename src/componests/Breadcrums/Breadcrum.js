import React from 'react'
import './Breadcrum.css'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
     <p> Home || Shop || {product.name}</p>
     {/* <h1>Breadcrum page!</h1> */}
    </div>
  )
}

export default Breadcrum
