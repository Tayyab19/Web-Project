import { Button, Modal } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const ChangePictureModal = ({
  picture,
  setChangeProfilePicture,
  setPicture,
}) => {
  const fileInput = React.createRef();

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
              ref={fileInput}
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
              if (fileInput === undefined) {
                alert("No Picture Selected");
              } else {
                setPicture(fileInput.current.files[0].name);
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
