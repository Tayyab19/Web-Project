import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChangePictureModal = ({
  picture,
  setChangeProfilePicture,
  setPicture,
}) => {
  const [file, setFile] = useState([]);
  const [base64, setBase64] = useState(picture);

  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setBase64(reader.result);
    };
  };

  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
    getBase64(e.target.files[0]);
  };
  return (
    <>
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
        <Modal
          size="auto"
          show={true}
          onHide={() => setChangeProfilePicture(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Change Profile Picture</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <img className="profile-picture" src={base64} />
            </div>
            <div>
              <label for="picture">Browse:</label>
              <input
                id="picture"
                className="form-control"
                type="file"
                onChange={handleFileInputChange}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setChangeProfilePicture(false)}
            >
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                if (file === "") {
                  toast.error('No Picture Selected', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    })
                } else {
                  setPicture(base64);
                  setChangeProfilePicture(false);
                }
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      <ToastContainer />
    </>
  );
};

export default ChangePictureModal;
