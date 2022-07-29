import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <>
    
          <section className="about">
            <div className="container text-center">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="title">ABOUT</h1>
                  <div className="star">
                    <div className="line1"></div>
                    <i className="fa-solid fa-star"></i>
                    <div className="line2"></div>
                  </div>
                  <div className="about-text">
                    <div className="contianer">
                      <div className="row">
                        <div className="col-md-6">
                          <p>
                            Freelancer is a free bootstrap theme created by
                            Start Bootstrap. The download includes the complete
                            source files including HTML, CSS, and JavaScript as
                            well as optional SASS stylesheets for easy
                            customization.
                          </p>
                        </div>
                        <div className="col-md-6">
                          <p>
                            You can create your own custom avatar for the
                            masthead, change the icon in the dividers, and add
                            your email address to the contact form to make it
                            fully functional!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
      
      </>
    );
  }
}
