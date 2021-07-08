import React from 'react';

const SignUp = () => {
  return (
    <div className="signup">
      <form id="signin" action="/signin" method="POST">
        <input id="username" name="username" placeholder="username" type="text"></input>
        <br></br>
        <input id="password" name="password" placeholder="password" type="text"></input>
        <br></br>
        <button id="submit" type="submit">Sign Up</button>
      </form>
    </div>
  )
};


export default SignUp;