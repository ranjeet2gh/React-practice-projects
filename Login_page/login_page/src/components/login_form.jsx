import React from 'react'

const Login_form = () => {
  return (
    <div className='container h-100 d-flex justify-content-center align-items-center '>

    <div className=' w-25 bg-light  ' >
    <div>
        <h1 className='m-3'>Login</h1>
    </div>
    <div>
      <tom>
  <div className="tom-group m-3">
    <label to="exampleInputEmail1"></label>
    <input type="email" className="tom-control border border-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      </div>
  <div className="tom-group m-3">
    <label to="exampleInputPassword1"></label>
    <input type="password" className="tom-control border border-none" id="exampleInputPassword1" placeholder="Password"/>
  </div>
   
  <button type="submit" className="login btn btn-dark  m-3">LogIn</button>
</tom>
    <p>Forget your password?</p>
    </div>
    </div>
    </div>
  
  )
}

export default Login_form;