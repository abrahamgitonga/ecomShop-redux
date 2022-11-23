import React from 'react'

function login() {
  return (
    <>
        <form className='form' action="">
          <div className='container'>
            <h3 className='title'>Login</h3>
            <span className='label'>Email</span>
            <input className='input' placeholder='email' type="text" /> 
            <span className='label' >Password</span>
            <input  className='input' placeholder='password' type="text"/>

            <input className='button' type="submit" />
          </div>

            
            

        </form>
    
    
    
    </>
    
  )
}

export default login;