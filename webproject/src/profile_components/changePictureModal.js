import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const ChangePictureModal = ({
  picture,
  setChangeProfilePicture,
  setPicture,
}) => {
  const [file, setFile] = useState([]);
  const [base64, setBase64] = useState([]);

  const updateProfilePicture = (base64) => {
    var x;
  };

  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setBase64(reader.result);
      console.log(base64);
    };
  };

  const handleFileInputChange = (e) => {
    setTimeout(10000);
    setFile(e.target.files);
    console.log(e.target.files);
    console.log(file);
    getBase64(file);
  };
  return (
    <>
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
            <img class="profile-picture" src={picture} />
          </div>
          <div>
            <label for="picture">Browse:</label>
            <input
              id="picture"
              class="form-control"
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
                alert("No Picture Selected");
              } else {
                //setPicture();
                updateProfilePicture(base64);
                setChangeProfilePicture(false);
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

export default ChangePictureModal;
