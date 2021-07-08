import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './NavBar.jsx';
import EventCard from './EventCard.jsx';
import CreateEvent from './CreateEvent.jsx';
import MyEvents from './MyEvents.jsx';
import SavedEvents from './SavedEvents.jsx';
import MyProfile from './MyProfile.jsx';


const CardContainer = () => {
return(
    <div className = 'CardContainer'>
      <Router> 
      <NavBar />
      <Switch>
        <Route component={CreateEvent} exact path='/app/createevent'/>
        <Route component={MyEvents} exact path='/app/myevents'/>
        <Route component={SavedEvents} exact path='/app/savedevents'/>
        <Route component={MyProfile} exact path='/app/myprofile'/>
      </Switch>
      {/* <EventCard /> */}
      </Router>
    </div>
)
}

export default CardContainer;