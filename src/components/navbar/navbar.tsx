import * as React from 'react';
import Sidebar from 'react-sidebar';

import './navbar.css';

class Navbar extends React.Component {


  public render() {


    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-primary">
          <a className="navbar-brand" href="#"> Navbar</a>
        </nav>
      </div>
    );
  }
};
export default Navbar;