import { Button, Modal } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const ForgotPassword = ({setForgetPassword}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Password reset link Sent");
  };
  return (
    <>
      <Modal size="auto" show={true} onHide={() => setForgetPassword(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Forgot Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={e => handleSubmit(e)}>
            <input type="text" placeholder="Enter Email" id="email" />
            <div class="text-center mt-3">
              <button type="submit" className="btn btn-block btn-primary" style={{display: 'inline'}}>Send Link</button>
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
