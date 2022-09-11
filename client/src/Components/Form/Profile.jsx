import React from "react";

const Select = () => {
  const submitHandler = () => {

  }
  return (
    <div className="w-50">
      <h1>Edit Your Profile</h1>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Areas of Expertise
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Years of Experience
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Roles types your interested in
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <button onClick={submitHandler} class="btn btn-primary me-md-2 px-4" type="button">
        Save
      </button>
      </div>
    </div>
  );
};

export default Select;
