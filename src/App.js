// import React, { Component } from 'react';
// import TopToolbar from './TopToolbar';
// import logo from './logo.svg';
// import './App.css';
// import Customers from './Customers'
// import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


// class App extends Component {
//   render() {
//     return (
//       <Router basename={process.env.PUBLIC_URL}>
//         <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Student Wellness Central</h1>
//         </header>
//         <TopToolbar />
//           {/* <Switch>
//                 <Route exact path= "/" render={() => (
//                   <Redirect to="/customerlist"/>
//                 )}/>
//                  <Route exact path='/customerlist' component={Customers} />
//           </Switch> */}
//       </div>
//     </Router>
//     );
//   }
// }


// export default App;

import React from 'react';

const App = () => {
  return (
    <div>
      <header style={{ textAlign: 'center', padding: '20px', backgroundColor: '#333', color: 'white' }}>
        <h1>Student Wellness</h1>
      </header>
      {/* Your main content goes here */}
    </div>
  );
};

export default App;
