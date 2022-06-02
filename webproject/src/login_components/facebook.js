'use strict';
 
import React from 'react';
import FacebookLogin from 'react-facebook-login';
 
class Facebook extends React.Component {
  faceBookData(response) {
    console.log(response)
  }
 
  render() {
    return (
      <FacebookLogin
      appId="326102842873540"
      autoLoad={false}
      fields="name,email"
      callback={this.faceBookData}
      icon='fa-facebook'
      size='2em'
    />
    )
  }
}
 
export default Facebook;