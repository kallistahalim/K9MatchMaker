import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/Home';


// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Landing from './pages/Landing';
// import Register from './pages/Register';
// import Login from './pages/Login';
// import Bands from './components/Band';
// import Autocomplete from './components/Autocomplete';

import './App.css';

function App() {
  return (
    <div>
      <HomePage />
    </div>
  )
}

// class App extends Component { 
//   render() {
//     return (
//         <div className="App">
//           <HomePage />
//           {/* <Route exact path='/' component={Landing} /> */}
//           {/* <div className="container"> */}
//           {/* <Route exact path="/register" component={Register} />
//           <Route exact path="/login" component={Login} />
//           <Route path="/bands/:id" component={Bands} />
//           <Route exact path="/search" component={Autocomplete} /> */}
//           {/* </div> */}
//           {/* <Footer /> */}
//         </div>
//     );
//   }
// }

export default App;