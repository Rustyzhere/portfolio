import logo from "./img/rustypic.jpg";
import rls from "./img/rls2.png";
import mmr from "./img/mmr.png";
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
            <h3 className="h4 mb-2">Rusty L Simmons</h3>
            <h2 className="h5 mb-2">Archaeologist, Web/Platform Developer</h2>
            <span className="h6 font-weight-normal text-gray mb-3">
              rustylsimmons@gmail.com
            </span>
            <ul className="list-unstyled d-flex justify-content-center mt-3 mb-4 pl-3">
              <li>
                <a
                  href="https://www.facebook.com/rustyzhere"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="facebook social link"
                  className="icon icon-xs icon-facebook mr-3">
                  <span className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/RustyLSimmons"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="twitter social link"
                  className="icon icon-xs icon-twitter mr-3">
                  <span className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/rustyzhere/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="slack social link"
                  className="icon icon-xs icon-slack mr-3">
                  <span className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://snapchat.com/add/imdigginu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="dribbble social link"
                  className="icon icon-xs icon-dribbble mr-3">
                  <span className="fab fa-snapchat" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/rusty-l-simmons-2b46431a"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="dribbble social link"
                  className="icon icon-xs icon-dribbble mr-3">
                  <span className="fab fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card-deck">
        <div className="row p-5 justify-content-center">
          <div className="col-12 col-md-4">
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
          <div className="col-12 col-md-4">
            <div className="card bg-primary border-light shadow-soft">
              <div className="card-header p-3">
                <img
                  src={mmr}
                  className="card-img-top rounded"
                  alt="My wedding website"
                />
              </div>
              <div className="card-body pt-2 pb-2">
                <h3 className="h5 card-title mt-3">Wedding website</h3>
                <p className="card-text">
                  This site was created using Visual Studio using the .NET
                  framework, javascript and React. AWS Hosting
                </p>
                <a
                  href="https://marymackandrusty.com"
                  className="btn btn-primary btn-block mb-2">
                  Over here
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
