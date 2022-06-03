import { useState } from "react";

const Filter = ({ getTags, applyFilter }) => {
  const [tags, setTags] = useState(getTags());

  const getCheckedTags = (e) => {
    let selectedTags = [];
    for (let i = 0; i < tags.length; i++) {
      //e.target[i].checked ? selectedTags.push(e.target[i].value) : null;
      if (e.target[i].checked) {
        selectedTags.push(e.target[i].value);
      }
    }
    applyFilter(selectedTags);
  };

  return (
    <form
      className="container p-5 filterBG text-white form-check my-3 mx-3"
      onSubmit={(e) => {
        e.preventDefault();
        getCheckedTags(e);
      }}
    >
      {tags.map((tag) => {
        return (
          <div className="form-check form-check-inline mx-4">
            <input
              className="form-check-input"
              type="checkbox"
              id=""
              value={tag}
            />
            <label className="form-check-label" for="inlineCheckbox1">
              {tag}
            </label>
          </div>
        );
      })}
      <div>
        <button
          type="submit"
          className="row col-12 btn btn-block btn-info mt-5 fw-bold"
        >
          Apply Filter
        </button>
      </div>
    </form>
  );
};

export default Filter;
