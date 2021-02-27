import React from 'react';
import ReactDOM from 'react-dom';
import SubApp from './SubApp.jsx';

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello</h1>
//       </div>
//     );
//   }
// }

const App = () => (
  <div>
    <h1>Hello</h1>
    <SubApp />
  </div>
);

export default App;