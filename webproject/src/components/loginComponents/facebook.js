import axios from 'axios';
import React from 'react';
import { useNavigate } from "react-router-dom";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props' 
import { FaFacebook } from "react-icons/fa";

const Facebook = ({verifyLogin}) => {
  const faceBookData = (response) => {
    console.log(response)
    if (response.email!=null){
      axios({
        method: "post",
        url: `http://localhost:5000/users/fbLogin`,
        data: {
          firstName: String(response.name).split(' ')[0],
          lastName: String(response.name).split(' ')[1],
          email: response.email,
          username: response.email,
          password: 'password',
        },
      })
        .then((response) => {
          console.log(response)
          if (response.status == 200) {
            verifyLogin(response.data);
            navigate("/questions");
          }
        })
    }  
  }

  const navigate = useNavigate();


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