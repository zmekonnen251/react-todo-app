import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

// class based
// import './classBased/App.css';

// function based
import './functionBased/App.css';

//component file
//class based component
// import TodoContainer from './classBased/components/TodoContainer';

// fuction based
import App from './functionBased/components/App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
