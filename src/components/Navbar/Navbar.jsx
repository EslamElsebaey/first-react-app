import React, { Component } from 'react'; 
import {Link} from "react-router-dom"

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <Link to="home" className="nav-link startreact">
              Start react
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
             <p className="menuBtn rounded-3"> menu <i className="fa-solid fa-bars"></i></p>
               
             
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="portfolio"   className="nav-link">
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
