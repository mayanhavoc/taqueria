import React from 'react';
import Link from 'next/link';
import Logo from "../components/logo";

function Navbar() {
  return (
    <nav className="vw-100 navbar navbar-expand-lg navbar-color navbar-light">
  <div className="container-fluid">
    <Link classNameName="navbar-brand" href="#">
        <Logo />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarToggler">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Contact us</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
  <style>
    {`
        .navbar-color {
            background-color: #B9D156;
        }
    `}
  </style>
</nav>
    )
}

export default Navbar