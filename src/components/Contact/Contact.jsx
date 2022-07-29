import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <>
        <section className="contact">
          <div className="container ">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="title">CONTACT ME</h1>
                <div className="star">
                  <div className="line1"></div>
                  <i className="fa-solid fa-star"></i>
                  <div className="line2"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <form>
                  <p>
                    <input
                      type="text"
                      id="name"
                      placeholder="Full name"
                      required
                    />
                  </p>
                  <p>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email address"
                      required
                    />
                  </p>
                  <p>
                    <input
                      type="text"
                      id="number"
                      placeholder="Phone number"
                      required
                    />
                  </p>
                  <p>
                    <textarea
                      placeholder="Message"
                      id="message"
                      required
                    ></textarea>
                  </p>
                  <input type="submit" id="submit" value="Send" />
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
