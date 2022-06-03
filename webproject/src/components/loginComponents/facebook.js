import React from 'react';
//import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props' 
import { FaFacebook } from "react-icons/fa";

const Facebook = ({login}) => {
  const faceBookData = (response) => {
    if (!response['status']==="unknown")
      if (response['name'])
        login(response)
  }

    return (
      <FacebookLogin
      appId="326102842873540"
      autoLoad={false}
      fields="name,email"
      callback={faceBookData}
      render={renderProps => (
        <FaFacebook onClick={renderProps.onClick} size="2em" color="" />
      )}
    />
    )
}
 
export default Facebook;