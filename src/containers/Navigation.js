import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Description from '@material-ui/icons/Description';
import DeviceHub from '@material-ui/icons/DeviceHub';
import EventNote from '@material-ui/icons/EventNote';
import Hourglass from '@material-ui/icons/HourglassEmptyTwoTone';


class Navigation extends Component {

  constructor(props){
      super(props);

      let hash = props.location.pathname.replace('/','');
      hash = hash === '' ? 'description' : hash;

      this.state = {
        value: hash
      }
  }  

  handleChange(event, newValue) {
    this.setState({
      value: newValue
    });
    
    let path = newValue === 'description' ? '' : newValue;
    this.props.history.push(`${path}`);
  }

  render(){
    return (
        <BottomNavigation value={this.state.value} onChange={this.handleChange.bind(this)} >
        <BottomNavigationAction label="Description" value="description" icon={<Description />} />
        <BottomNavigationAction label="Simple Example" value="simple" icon={<DeviceHub />} />
        <BottomNavigationAction label="Complex Component" value="complex" icon={<EventNote />} />
        <BottomNavigationAction label="Async Request" value="async" icon={<Hourglass/>} />
        </BottomNavigation>
    );
  }
}

export default withRouter(Navigation);