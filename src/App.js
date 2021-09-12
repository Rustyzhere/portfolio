import logo from "./rustypic.jpg";
import "./App.css";
import "./neumorphism.css";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <img src={logo} className='App-logo' alt='glamorshot' />
        <h1 className='App-link'>Rusty L Simmons</h1>
        <p>rustyLsimmons@gmail.com</p> */}
      </header>
      <div className='profile-card mb-5'>
        <div className='card bg-primary shadow-inset border-light text-center'>
          <div className='card-header'>
            <div className='profile-image bg-primary shadow-inset border border-light rounded mx-auto p-3 mt-n6'>
              <img
                src={logo}
                className='card-img-top rounded'
                alt='Rustys Portrait'
              />
            </div>
          </div>
          <div className='card-body pb-5 justify-content-center'>
            <h3 className='h4 mb-2'>Rusty L Simmons</h3>
            <h2 className='h5 mb-2'>Archaeologist, Web Developer</h2>

            <span className='h6 font-weight-normal text-gray mb-3'>
              rustylsimmons@gmail.com
            </span>
            <ul className='list-unstyled d-flex justify-content-center mt-3 mb-4 pl-3'>
              <li>
                <a
                  href='https://https://www.facebook.com/rustyzhere'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='facebook social link'
                  className='icon icon-xs icon-facebook mr-3'>
                  <span className='fab fa-facebook-f'></span>
                </a>
              </li>
              <li>
                <a
                  href='https://https://twitter.com/RustyLSimmons'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='twitter social link'
                  className='icon icon-xs icon-twitter mr-3'>
                  <span className='fab fa-twitter'></span>
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/rustyzhere/'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='slack social link'
                  className='icon icon-xs icon-slack mr-3'>
                  <span className='fab fa-instagram'></span>
                </a>
              </li>
              <li>
                <a
                  href='https://snapchat.com/add/imdigginu'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='dribbble social link'
                  className='icon icon-xs icon-dribbble mr-3'>
                  <span className='fab fa-snapchat'></span>
                </a>
              </li>
              <li>
                <a
                  href='https://https://www.linkedin.com/in/rusty-l-simmons-2b46431a'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='dribbble social link'
                  className='icon icon-xs icon-dribbble mr-3'>
                  <span className='fab fa-linkedin'></span>
                </a>
              </li>
            </ul>
            {/* <a
              className='btn btn-sm btn-primary mr-3'
              href='https://facebook.com/rustylsimmons'>
              <span className='fas fa-user-plus mr-1'></span> Follow
            </a>
            <a
              className='btn btn-sm btn-primary'
              href='https://facebook.com/rustylsimmons'>
              Resume'
            </a> */}
          </div>
        </div>
      </div>
      <div className='App-header2'></div>
    </div>
  );
}

export default App;
