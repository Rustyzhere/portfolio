import logo from "./img/rustypic.jpg";
import rls from "./img/rls2.png";
import mmr from "./img/mmr.png";
import adl from "./img/adl.png";
import "./App.css";
import "./neumorphism.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="profile-card mb-5">
        <div className="card bg-primary shadow-inset border-light text-center">
          <div className="card-header">
            <div className="profile-image bg-primary shadow-inset border border-light rounded mx-auto p-3 mt-n6">
              <img
                src={logo}
                className="card-img-top rounded"
                alt="Rustys Portrait"
              />
            </div>
          </div>
          <div className="card-body pb-5 justify-content-center">
            <h3 className="h2 mb-2 font-weight-bold">Rusty L Simmons</h3>
            <h2 className="h4 mb-2">Archaeologist, Web/Platform Developer</h2>
            <span className="h5 font-weight-normal text-gray mb-3">
              rustylsimmons@gmail.com
            </span>
            <ul className="list-unstyled d-flex justify-content-center mt-3 mb-4">
              <li>
                <a
                  href="https://www.facebook.com/rustyzhere"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="facebook social link"
                  className="icon icon-md icon-facebook m-3">
                  <span className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/RustyLSimmons"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="twitter social link"
                  className="icon icon-md icon-twitter m-3">
                  <span className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/rustyzhere/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="slack social link"
                  className="icon icon-md icon-slack m-3">
                  <span className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://snapchat.com/add/imdigginu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="dribbble social link"
                  className="icon icon-md icon-dribbble m-3">
                  <span className="fab fa-snapchat" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/rusty-l-simmons-2b46431a"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="dribbble social link"
                  className="icon icon-md icon-dribbble m-3">
                  <span className="fab fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card-deck">
        <div className="row p-5 justify-content-center">
          <div className="col-12 col-md-4 p-2">
            <div className="card bg-primary border-light shadow-soft">
              <div className="card-header p-3">
                <img
                  src={rls}
                  className="card-img-top rounded"
                  alt="This site!"
                />
              </div>
              <div className="card-body pt-2 pb-2">
                <h3 className="h5 card-title mt-3">My portfolio</h3>
                <p className="card-text">
                  This site is built with javascript, React and neumorphic UI,
                  and is hosted by Infinty Free
                </p>
                <a
                  href="https://rustylsimmons.com"
                  className="btn btn-primary btn-block mb-2">
                  This way
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 p-2">
            <div className="card bg-primary border-light shadow-soft flex">
              <div className="card-header p-3">
                <img
                  src={mmr}
                  className="card-img-top rounded"
                  alt="My wedding website"
                />
              </div>
              <div className="card-body pt-2 pb-2">
                <h3 className="h5 card-title mt-3">My wedding website</h3>
                <p className="card-text">
                  This site was created using javascript and React in Visual
                  Studio with the .NET framework, hosted by AWS
                </p>
                <a
                  href="https://marymackandrusty.com"
                  className="btn btn-primary btn-block mb-2">
                  Over here
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 p-2">
            <div className="card bg-primary border-light shadow-soft">
              <div className="card-header p-3">
                <img src={adl} className="card-img-top rounded" alt="My shop" />
              </div>
              <div className="card-body pt-2 pb-2">
                <h3 className="h5 card-title mt-3">My Shop</h3>
                <p className="card-text">
                  This site was created using Liquid template language and is
                  powered by the shopify platform
                </p>
                <a
                  href="https://marymackandrusty.com"
                  className="btn btn-primary btn-block mb-2">
                  Shop now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <footer />
      </div>
    </div>
  );
}

export default App;
