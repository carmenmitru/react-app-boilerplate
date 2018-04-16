import * as React from 'react';

import 'bootstrap/dist/css/bootstrap.css'
// import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import './css/font-awesome.css';

// Other componets
import CodeEditor from './components/code-editor/code-editor';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';

class App extends React.Component {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <div>
        <Navbar />
        <div className="d-flex flex-row">
          <Sidebar />
          <div className="col-sm">
            Run result
          </div>
          <div className="col-sm p-2">
            <CodeEditor />
          </div>
        </div>
      </div>


    );
  }
}

export default App;
