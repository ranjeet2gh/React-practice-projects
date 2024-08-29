import React from 'react'

const navbar = () => {
  return (
    <div>
      
<nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg">
    <div className='d-flex w-100 justify-content-between'>
        <a className="navbar-brand ms-3" href="#">Buggsy</a>
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-item nav-link active" href="#">Tickets </a>
                <a className="nav-item nav-link" href="#">New Ticket</a>
                <a className="nav-item nav-link" href="#">Reports</a>
            </div>
        </div>
        <a className="nav-item nav-link  p-3  " href="#">Login</a>

    </div>
</nav>
    </div>
  )
}

export default navbar
