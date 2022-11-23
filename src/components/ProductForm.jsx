import React from 'react'
import './styles.css'

function ProductForm() {
  return (
    <>
      <form className='product-form' action="">
          <div className='container'>
            <h2 className='title'>product name</h2>
            <span className='label'>Product Name</span>
            <input className='input' placeholder='add a product' type="text" />
            <span className='label'></span>
            <input className='button' type='submit'/>
          </div>
         
      </form>   
            
       

        


  
    </>
  )
}

export default ProductForm;