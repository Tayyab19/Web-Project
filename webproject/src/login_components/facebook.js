import React from 'react';
//import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props' 
import { FaFacebook } from "react-icons/fa";

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
      render={renderProps => (
        <FaFacebook onClick={renderProps.onClick} size="2em" color="" />
      )}
    />
    )
  }
}
 
export default Facebook;