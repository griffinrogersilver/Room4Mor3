import React from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom';
import CardContainer from './CardContainer.jsx';
import NavBar from './NavBar.jsx';
import Login from './Login.jsx';
import SignUp from './Signup.jsx';


const App = () => {
  return(
    <div className="app">
      {/* <NavBar/>  */}
      {/* <CardContainer/> */}
      <Router>
        <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/app' component={CardContainer}/>
        </Switch>
      </Router>



      </div>

  )
}

export default App;