import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <div className="container text-center">
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <h2>LOCATION</h2>
                <h4>2215 John Daniel Drive</h4>
                <h5>Clark, MO 65243</h5>
              </div>
              <div className="col-md-4 col-sm-12">
                <h2>AROUND THE WEB</h2>
                <div className="social d-flex justify-content-center align-items-center">
                  <a href="facebook">
                    <i className="fa-brands brand fa-facebook-f"></i>
                  </a>
                  <a href="twitter">
                    <i className="fa-brands brand fa-twitter"></i>
                  </a>
                  <a href="linkedin">
                    <i className="fa-brands brand fa-linkedin-in"></i>
                  </a>
                  <a href="instagram">
                    <i className="fa-brands brand fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <h2>ABOUT FREELANCER</h2>
                <p>
                  Freelance is a free to use, MIT licensed Bootstrap theme
                  created by Route
                </p>
              </div>
            </div>
          </div>
        </footer>
        <div className="black-one">Copyright © Your Website 2022</div>
      </>
    );
  }
}
