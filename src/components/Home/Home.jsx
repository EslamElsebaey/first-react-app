import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <>
        <section className="start">
          <div className="container h-100 text-center">
            <div className="row h-100 d-flex align-items-center justify-content-center">
              <div className="col-md-12">
                <img
                  src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/avataaars.svg"
                  alt=""
                />
                <h1 className="title">START REACT</h1>
                <div className="star">
                  <div className="line1"></div>
                  <i className="fa-solid fa-star"></i>
                  <div className="line2"></div>
                </div>
                <p>Graphic Artist - Web Designer - Illustrator</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
