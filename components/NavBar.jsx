import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import CreateEvent from './CreateEvent.jsx';
import MyEvents from './MyEvents.jsx';
import SavedEvents from './SavedEvents.jsx';
import MyProfile from './MyProfile.jsx';
const NavBar = () => {





    return(
      <div>


  
    <NavLink to='/app/createevent'>Create Event</NavLink>
    <br />
    <NavLink to='/app/myevents'>My Events</NavLink>
    <br />
    <NavLink to='/app/savedevents'>Saved Events</NavLink>
    <br />
    <NavLink to='/app/myprofile'>My Profile</NavLink>

      </div>



    )
}


export default NavBar;