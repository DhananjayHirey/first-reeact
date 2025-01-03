import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import {Link } from 'react-router-dom'


export default function Navbar(props) {


  

  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
  <div className="container-fluid">
    <NavLink Link className="navbar-brand" to="#">{props.title}</NavLink >
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className= {`nav-link active ${(e)=>{return e.isActive?"active-css":""}} `}  aria-current="page" to="/">Home</NavLink >
        </li>
        <li className="nav-item">
          <NavLink className= {`nav-link active ${(e)=>{return e.isActive?"active-css":""}} `}  to="/About">About</NavLink >
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/User">User</NavLink >
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </NavLink >
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="#">Action</NavLink ></li>
            <li><NavLink className="dropdown-item" to="#">Another action</NavLink ></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item" to="#">Something else here</NavLink ></li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link disabled" aria-disabled="true">Disabled</NavLink >
        </li>
      </ul>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
        <label className="form-check-label mx-3" htmlFor="flexSwitchCheckDefault" style={{color: props.mode==="dark"?"white":"black"}}>{props.btnText}</label>
      </div>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired
};
// Navbar.defaultProps = {
//     title : 'Set Title here'
// };
