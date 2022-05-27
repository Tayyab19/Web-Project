import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

const ChangePasswordModal = ({ setChangePassword, username }) => {
  const [temp, setTemp] = useState("");
  const [temp2, setTemp2] = useState("");
  const setPassword = (password, username) => {
    axios({
      method: "patch",
      url: `http://localhost:5000/users/profile/editPassword`,
      Headers: { "Content-Type": "application/json" },
      data: { password: password, username: username.name },
    })
      .then((response) => {
        console.log(response.status);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Modal size="auto" show={true} onHide={() => setChangePassword(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Reset Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label for="firstPassword">Enter New Password:</label>
            <input
              onChange={(e) => setTemp(e.target.value)}
              id="firstPassword"
              class="form-control"
              type="password"
              value={temp}
            />
          </div>
          <div>
            <label for="secondPassword">Re-Enter New Password:</label>
            <input
              onChange={(e) => setTemp2(e.target.value)}
              id="secondPassword"
              class="form-control"
              type="password"
              value={temp2}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setChangePassword(false)}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              if (temp === temp2) {
                setPassword(temp, username);
                setChangePassword(false);
              } else {
                alert("Entered Passwords don't match");
              }
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ChangePasswordModal;
