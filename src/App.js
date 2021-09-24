import logo from "./rustypic.jpg";
import "./App.css";
import "./neumorphism.css";

// const Rusty = "https://rustylsimmons.com";
// const MMack = "https://marymackandrusty.com";
// const Store = "https://americandreams.ltd";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className='App-logo' alt='glamorshot' />
        <h1 className='App-link'>Rusty L Simmons</h1>
        <p>rustyLsimmons@gmail.com</p> */}
      </header>
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
            <h2 className="h5 mb-2">Archaeologist, Web Developer</h2>

            <span className="h6 font-weight-normal text-gray mb-3">
              rustylsimmons@gmail.com
            </span>
            <ul className="list-unstyled d-flex justify-content-center mt-3 mb-4 pl-3">
              <li>
                <a
                  href="https://https://www.facebook.com/rustyzhere"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="facebook social link"
                  className="icon icon-xs icon-facebook mr-3">
                  <span className="fab fa-facebook-f"></span>
                </a>
              </li>
              <li>
                <a
                  href="https://https://twitter.com/RustyLSimmons"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="twitter social link"
                  className="icon icon-xs icon-twitter mr-3">
                  <span className="fab fa-twitter"></span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/rustyzhere/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="slack social link"
                  className="icon icon-xs icon-slack mr-3">
                  <span className="fab fa-instagram"></span>
                </a>
              </li>
              <li>
                <a
                  href="https://snapchat.com/add/imdigginu"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="dribbble social link"
                  className="icon icon-xs icon-dribbble mr-3">
                  <span className="fab fa-snapchat"></span>
                </a>
              </li>
              <li>
                <a
                  href="https://https://www.linkedin.com/in/rusty-l-simmons-2b46431a"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="dribbble social link"
                  className="icon icon-xs icon-dribbble mr-3">
                  <span className="fab fa-linkedin"></span>
                </a>
              </li>
            </ul>
            {/* 
            <a
              className='btn btn-sm btn-primary'
              href='https://facebook.com/rustylsimmons'>
              Resume'
            </a> */}
          </div>
        </div>
      </div>
      <div className="card-deck justify-content-center">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="card bg-primary border-light shadow-soft">
              <div className="card-header p-3">
                <img
                  src="https://rustylsimmons.com"
                  className="card-img-top rounded-top"
                  alt="This site!"
                />
              </div>
              <div className="card-body">
                <h3 className="h5 card-title mt-3">My portfolio</h3>
                <p className="card-text">
                  This site is built by myself and hosted by Infinty Free
                </p>
                <a
                  href="https://rustylsimmons.com"
                  className="btn btn-primary btn-sm">
                  This way
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card bg-primary border-light shadow-soft">
              <div className="card-header p-3">
                <img
                  src="https://marymackandrusty.com"
                  className="card-img-top rounded"
                  alt="My wedding website"
                />
              </div>
              <div className="card-body pt-2">
                <div className="media d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center"></div>
                </div>
                <h3 className="h5 card-title mt-3">Wedding website</h3>
                <p className="card-text">
                  This site was created using Visual Studio using the .NET
                  framework, javascript and React.
                </p>
                <a
                  href="https://americandreams.ltd"
                  className="btn btn-primary btn-sm">
                  Over here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <footer></footer>
      </div>
    </div>
  );
}

export default App;
