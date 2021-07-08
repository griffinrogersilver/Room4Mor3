import React from 'react';

const MyProfile= () => {

  return (
    <div className='MyProfile'>
        <h1>DEATHCORE FROLFER</h1>
        <h3>Did I have to eat so damn much?</h3>
      </div>
  )
}

// class MyProfile extends Component {

//   constructor() {
//     super();
    
//     this.state = {
//       events: [],
//     };
//   }

//   componentDidMount() {
//     fetch('/events')
//       .then(res => res.json())
//       .then((result) => {
//         this.setState({events: result})
//       });
//     //   .catch((err) => {
//     //       console.log('nah brah - errrrrrrrrr')
//     //  });
//   }

//   render() {
//     const eventArr = [];
//     for (let i=0; i < this.state.events.length; i++) {
//       eventArr.push(<CreateEvent key={i} ={this.state.events[i]}/>)

//     }
//     return (
//       <div>
//         {eventArr}
//       </div>
//     );
//   }
// }


export default MyProfile;