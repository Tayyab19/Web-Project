import { useState } from "react";
import { Link } from "react-router-dom";
import "../questionsListComponents/question.css";
import { ToggleButton, ButtonGroup } from "react-bootstrap";

const QuestionForm = ({ submitQuestion }) => {
  const [title, setTitle] = useState("");

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const [body, setBody] = useState("");

  const updateBody = (e) => {
    setBody(e.target.value);
  };

  const [tags, setTags] = useState([]);

  const updateTags = (e) => {
    setTags(e.target.value.split(","));
  };

  const [invites, setInvites] = useState([]);

  const updateInvites = (e) => {
    setInvites(e.target.value.split(","));
  };

  const isValid = () => {
    return title.length <= 10 ? true : false;
  };

  const [radioValue, setRadioValue] = useState("Public");

  const radios = [
    { name: "Public", value: "Public" },
    { name: "Private", value: "Private" },
  ];
  return (
    <form className="bg-white p-5 mb-5">
      <div>
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={idx % 2 ? "outline-danger" : "outline-success"}
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
      <div className="mb-5">
        <br />
        <label for="QuestionTitle" className="form-label fw-bold">
          Title
        </label>{" "}
        <br />
        <label for="QuestionTitle" className="form-label small">
          Be specific and imagine you’re asking a question to another person
        </label>
        <input
          type="text"
          className="form-control"
          id="QuestionTitle"
          onChange={(e) => {
            e.preventDefault();
            updateTitle(e);
          }}
          placeholder="e.g. How do you add item in a python list?"
        />
        {isValid() ? (
          <div className="alert alert-danger" role="alert">
            Atleast 10 character for your title
          </div>
        ) : null}
      </div>

      <div className="mb-5">
        <label for="QuestionBody" className="form-label fw-bold">
          Body
        </label>{" "}
        <br />
        <label for="QuestionBody" className="form-label small">
          Include all the information someone would need to answer your question
        </label>
        <textarea
          style={{ height: "120px", resize: "none" }}
          type="text"
          onChange={(e) => {
            e.preventDefault();
            updateBody(e);
          }}
          className="form-control"
          id="QuestionBody"
        />
      </div>

      <div className="mb-3">
        <label for="QuestionTags" className="form-label fw-bold">
          Tags
        </label>{" "}
        <br />
        <label for="QuestionTags" className="form-label small">
          Add upto a maximum of 5 tags (Seperated by a comma)
        </label>
        <input
          type="text"
          className="form-control"
          id="QuestionTags"
          onChange={(e) => {
            e.preventDefault();
            updateTags(e);
          }}
          placeholder="e.g. java, c++"
        />
      </div>
      {radioValue === "Private" && (
        <div id="privateQuestion">
          <br />
          <label for="InvitedUsers" className="form-label fw-bold">
            Invited Users
          </label>
          <br />
          <label for="InvitedUsers" className="form-label small">
            Invite Users to Answer Questions
          </label>
          <input
            type="text"
            className="form-control"
            id="InvitedUSers"
            onChange={(e) => {
              e.preventDefault();
              updateInvites(e);
            }}
            placeholder="Username1, Username2....."
          />
          <br />
        </div>
      )}

      <Link to={""} className={isValid() ? "disabled-link" : ""}>
        <button
          type="btn"
          onClick={(e) => {
            submitQuestion(title, body, tags, invites, radioValue === "Private");
          }}
          className={
            isValid() ? "btn disabled btn-primary" : "btn active btn-primary"
          }
        >
          Add Question
        </button>
      </Link>
    </form>
  );
};

export default QuestionForm;
