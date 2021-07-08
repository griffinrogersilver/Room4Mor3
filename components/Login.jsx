import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom';
import App from './App.jsx';







const Login = () => {

     // React Hooks: Local state variables 
    const [ isLoggedIn, setLoggedIn ] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault(); // prevents form submit from reloading page
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const username = usernameInput.value;
        const password = passwordInput.value;
    
        // clears input fields after login
        usernameInput.value = '';
        passwordInput.value = '';
    
        console.log('clicked');
        authenticateUser(username, password);
      };
      
      // callback function which will send request to endpoint http://localhost:3000/login and expect either SSID in cookie.
      const authenticateUser = (username, password) => {
    
        fetch('/login', 
          { 
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: username,
              password: password
            })
          })
          .then((response) => {
            console.log(response);
            return response.json();
          })
          .then((data) => {
            console.log(data)
            if(data[0].hasOwnProperty('username')) {
              setLoggedIn(true);}
            // } else {
            // if (Object.prototype.hasOwnProperty.call(data, 'error')) {
            //   window.alert(data.error);
            // }
              
              
            // }
          })
          .catch((err) => {
            window.alert('Please enter a valid account');
            console.log(err);
          });
      };
      if (isLoggedIn){
        console.log('LOGGED IN');
        return (
        
             <Redirect from="/" to="/app"/> 
            
        );
      }



  return(
      <div>
    <Router>
        <Route id="route" path="/"> 
        <div className="Login"> </div>
            <form onSubmit={handleLogin}>
                <input id="username" type="text" placeholder="Username"></input>
                <input id="password" type="text" placeholder="Password"></input>
                <button>Login</button>
                <button>Sign Up</button>
            </form>
        </Route>
    </Router>
    </div> 
    )
}

export default Login;