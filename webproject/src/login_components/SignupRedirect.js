import "./Login.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const SignUpRedirect = () => {
  const navigate = useNavigate();

  const [text, setText] = useState('Redirecting......')
  const {token} = useParams();

  const signUpVerify = () => {
      axios.post(`http://localhost:5000/users/verify/${token}`)
      .then((response) => {
        if (response.status == 200) {
            navigate("/");
          }
      })
      .catch((err) => {
        setText('Internal Error Occured')
      });
  };

  useEffect(()=>{
      signUpVerify();
  },[])
  
  return (
    <>
    <div>
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 style={{ textAlign: "center" }}>
              <strong>{text}</strong>
            </h1>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignUpRedirect;
