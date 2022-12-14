import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import AuthenticationService from '../../service/AuthenticationService';

function HeaderComponent() {
  const loggedIn = AuthenticationService.isUserLoggedIn();

  return (
    <div>
      {console.log('loggedIn', loggedIn)}
      <header>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
          <div>
            <a className='navbar-brand' href='http://www.developers.com'>
              Society Management System
            </a>
          </div>
          <ul className='navbar-nav'>
            <li>
              {loggedIn && (
                <Link className='nav-link' to='/login'>
                  Home
                </Link>
              )}
            </li>
          </ul>
          <ul className='navbar-nav navbar-collapse justify-content-end'>
            <li>
              {!loggedIn && (
                <Link className='nav-link' to='/login'>
                  Login
                </Link>
              )}
            </li>
            <li>
              {loggedIn && (
                <Link
                  className='nav-link'
                  to='/logout'
                  onClick={AuthenticationService.removeUserDetails}
                > Logout
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
export default withRouter(HeaderComponent);
