import React, { Component } from 'react';
import EventCard from './EventCard.jsx';

// const MyEvents = () => {

//   return (
//     <div className='MyEvents'>
//         <h1>My Events</h1>
//         <ol>
//           <li> Cheeseburger Eat off</li>
//         <li>another Cheeseburger Eat off</li>
//         <li>Indegestion/Depression party</li>
//         </ol>
//       </div>
//   )
// }


class MyEvents extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    fetch('/events')
      .then(res => {
        return res.json();
      })
      .then(events => {
        this.setState({events: events})
        console.log('this is in fetch', this.state.events)
      })
      .catch((err) => {
          console.log(err)
     });
  }

  render() {
    const eventArr = [];
    console.log(this.state.events, 'in renderer')
    for (let i=0; i < this.state.events.length; i++) {
      console.log(eventArr, 'eventArr')
      eventArr.push(<EventCard key={i} info={this.state.events[i]}/>)

    }
    return (
      <div>
        {eventArr}
      </div>
    );
  }
}



export default MyEvents;