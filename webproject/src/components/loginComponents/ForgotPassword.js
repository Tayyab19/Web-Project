import { Button, Modal } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

const ForgotPassword = ({ setForgetPassword }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `http://localhost:5000/users/forgotPassword`,
      Headers: { "Content-Type": "application/json" },
      data: { email: e.target.email.value },
    })
      .then(() => {
        var x = "show Toast, You will receive a password reset link shortly";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Modal size="auto" show={true} onHide={() => setForgetPassword(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Forgot Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" placeholder="Enter Email" id="email" />
            <div className="text-center mt-3">
              <button
                type="submit"
                className="btn btn-block btn-primary"
                style={{ display: "inline" }}
              >
                Send Link
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setForgetPassword(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ForgotPassword;
