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

import React, { useState } from 'react';

const TopToolbar = ({ activeCategory, handleCategoryChange }) => {
  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '10px', borderBottom: '1px solid #ccc' }}>
      <button
        style={{ marginRight: '10px', backgroundColor: activeCategory === 'exercise' ? '#ddd' : 'transparent' }}
        onClick={() => handleCategoryChange('exercise')}
      >
        Exercise
      </button>
      <button
        style={{ backgroundColor: activeCategory === 'food' ? '#ddd' : 'transparent' }}
        onClick={() => handleCategoryChange('food')}
      >
        Food
      </button>
    </div>
  );
};

const App = () => {
  const [activeCategory, setActiveCategory] = useState('exercise');

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    // You can add additional logic here based on the selected category
  };

  return (
    <div>
      <header style={{ textAlign: 'center', padding: '20px', backgroundColor: '#333', color: 'white' }}>
        <h1>Student Wellness</h1>
      </header>
      <TopToolbar activeCategory={activeCategory} handleCategoryChange={handleCategoryChange} />
      {/* Your main content goes here */}
    </div>
  );
};

export default App;
