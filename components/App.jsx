import React from 'react';
import {Switch,Route} from 'react-router-dom';
import CardContainer from './CardContainer.jsx';
import NavBar from './NavBar.jsx';
import Login from './Login.jsx';
import SignUp from './Signup.jsx';


const App = () => {
  return(
    <div className="app">
      {/* <NavBar/>  */}
      {/* <CardContainer/> */}
      <Login />



      </div>

  )
}

export default App;