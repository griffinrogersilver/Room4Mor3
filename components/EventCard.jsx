import React, { useState, useEffect, Component } from 'react';

class EventCard extends Component {
  // super(props)


  // const createComponent= (event) => {

// const title = document.getElementById('title')
// const subtitle = document.getElementById('subtitle')
// const username = document.getElementById('username')
// const address = document.getElementById('address')
// const type = document.getElementById('type')
// const date = document.getElementById('date')
// const description = document.getElementById('description')
    
  render(){

  return (

    <div>
      <div id= 'hostid'>{this.props.info.hostid}</div>
      <div id= 'title'>{this.props.info.title}</div>
      <div id= 'subtitle'>{this.props.info.subtitle}</div>
      <div id= 'type'>{this.props.info.type}</div>
      <div id= 'date'>{this.props.info.date}</div>
      <div id= 'description'>{this.props.info.description}</div>
      <div id= 'address'>{this.props.info.address}</div>
      
     
      
        {/* title 
        subtitle
        type
        desc
        address
        date
        username*/}

      </div>



  )

  }

}
// }

export default EventCard;








