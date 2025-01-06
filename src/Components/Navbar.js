import React from 'react'
import propTypes from 'prop-types'
import image from './navbar_image.jpg'
import About from './About.js'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <div>
    <nav style={{backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize:'cover', backgroundPositionY:"20%"}} className="navbar navbar-expand-lg  mb-3">
    <div className="container-fluid">
    <Link
      className="navbar-brand" to="/" 
      style={{ color: 'white', transition: "color 0.3s ease" }} 
      onMouseEnter={(e) => (e.target.style.color = "green")} // Hover color
      onMouseLeave={(e) => (e.target.style.color = "white")} >
        <h1>
          {props.title}
        </h1>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" style={{ color: 'purple' }}>Home</Link>

        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.google.com" style={{ color: 'purple' }}>Link</a>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link active" aria-disabled="true" style={{ color: 'white' }} to="/about" >{props.aboutText}</Link>
        </li>

        <li>
        <div className="form-check form-switch my-2 ms-3">
        <input className="form-check-input" type="checkbox" onClick={props.changeMode}   role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: 'white' }}>{props.mode}</label>
        </div>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: '300px' }} />
        <button className="btn btn-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>
  )
}


Navbar.propTypes = {title: propTypes.string.isRequired,
                    aboutText: propTypes.string.isRequired,
                    mode: propTypes.string.isRequired}

// Navbar.defaultProps ={
//     title: "set title here",
//     aboutText: "write here"
// }