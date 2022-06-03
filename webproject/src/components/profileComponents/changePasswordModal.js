import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChangePasswordModal = ({ setChangePassword }) => {
  const [temp, setTemp] = useState("");
  const [temp2, setTemp2] = useState("");
  const setPassword = (password) => {
    axios.patch(`http://localhost:5000/users/profile/editPassword`,{password:password},{headers: {
      'Authorization': localStorage.getItem("token") 
    }})
      .then((response) => {
        toast.success("Password Changed Successfully", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setInterval(setChangePassword(false), 2000);
      })
      .catch((err) => {
        toast.error("Unknown Error Occured", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <div>
            <label for="firstPassword">Enter New Password:</label>
            <input
              onChange={(e) => setTemp(e.target.value)}
              id="firstPassword"
              className="form-control"
              type="password"
              value={temp}
            />
          </div>
          <div>
            <label for="secondPassword">Re-Enter New Password:</label>
            <input
              onChange={(e) => setTemp2(e.target.value)}
              id="secondPassword"
              className="form-control"
              type="password"
              value={temp2}
            />
          </div>
          <ToastContainer />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setChangePassword(false)}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              if (temp === temp2) setPassword(temp);
              else {
                toast.error("Entered Passwords don't match", {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
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
