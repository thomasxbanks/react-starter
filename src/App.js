import React, { Fragment } from 'react';

import Main from './Main';

function App() {
  return (
    <Fragment>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/users">Users</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/user">404</a></li>
        </ul>
      </nav>
      <br />
      <Main />
    </Fragment>
  );
}

export default App;
