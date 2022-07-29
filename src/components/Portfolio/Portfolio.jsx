import React, { Component } from "react";
import cabin from "../../Images/cabin.png";
import cake from "../../Images/cake.png";
import circus from "../../Images/circus.png";
import game from "../../Images/game.png";
import safe from "../../Images/safe.png";
import submarine from "../../Images/submarine.png";
import $ from "jquery";

export default class Portfolio extends Component {



  closeModal(){
    $(".mymodal").css("display" , "none");
    document.body.style.overflow = "visible"
  }




componentDidMount(){
  let imgItem = document.querySelectorAll(".imgItem"); 
  for(let i =0 ; i<imgItem.length; i++){
    imgItem[i].addEventListener("click" , function(){
      document.body.style.overflow = "hidden"
      let mymodal = document.querySelector(".mymodal"); 
      mymodal.style.display = "flex";
      let modalImg = document.getElementById("modalimg"); 
      modalImg.setAttribute("src" , imgItem[i].firstChild.src)
      console.log( imgItem[i])
      let modalTitle = document.getElementById("modalTitle"); 
      modalTitle.innerHTML = imgItem[i].firstChild.alt
    })
  }
  
}


  render() {




    return (
      <>
        {/* modal */}
        <div className="mymodal">
          <div className="modal-box p-4">
            <span className="close" onClick={this.closeModal}><i  className="fa-solid  w-100 fa-xmark" ></i></span> 
            <div className="modal-title text-center ">
              <h3 id="modalTitle" >title</h3>
              <div className="star">
                  <div className="line1"></div>
                  <i className="fa-solid fa-star"></i>
                  <div className="line2"></div>
                </div>
            </div>
            <img className=" w-100 d-block mb-5 mx-auto"   id="modalimg" src="" alt="img1" />
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
            <button className="closewindow" onClick={this.closeModal}><i  className="fa-solid  fa-xmark" ></i> close window</button>
          </div>
        </div>
        {/* *********************************************** */}

        <section className="portfolio" id="portfolio">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-12">
                <h1 className="title">
                  PORTFOLIO
                </h1>
                <div className="star">
                  <div className="line1"></div>
                  <i className="fa-solid fa-star"></i>
                  <div className="line2"></div>
                </div>
              </div>
            </div>
            <div className="row g-5">
              <div className="col-lg-4 col-md-6">
                <div className="imgItem" >
                  <img className="w-100" src={cabin} alt="log cabin" />
                  <div className="overlay">
                    <i className="fa-solid fa-plus myplus"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="imgItem">
                  <img className="w-100" src={cake} alt=" tasty cake" />
                  <div className="overlay">
                    <i className="fa-solid fa-plus myplus"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="imgItem">
                  <img className="w-100" src={circus} alt="circus tent" />
                  <div className="overlay">
                    <i className="fa-solid fa-plus myplus"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div  className="imgItem">
                  <img className="w-100" src={game} alt="controller" />
                  <div className="overlay">
                    <i className="fa-solid fa-plus myplus"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="imgItem">
                  <img className="w-100" src={safe} alt="locked safe" />
                  <div className="overlay">
                    <i className="fa-solid fa-plus myplus"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="imgItem">
                  <img className="w-100" src={submarine} alt="submarine" />
                  <div className="overlay">
                    <i className="fa-solid fa-plus myplus"></i>
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
