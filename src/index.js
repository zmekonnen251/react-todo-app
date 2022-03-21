import React from 'react';
import ReactDOM from 'react-dom';

// class based
// import './classBased/App.css';

// function based
import './functionBased/App.css';

//component file
//class based component
// import TodoContainer from './classBased/components/TodoContainer';

// fuction based
import TodoContainer from './functionBased/components/TodoContainer';

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root')
);
