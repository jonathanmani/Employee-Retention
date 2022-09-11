import React, { useState, useEffect } from "react";
import axios from 'axios'
import Select from "react-select";
import { getAuthConfig } from "../../Utils/config";

const SelectComp = () => {
  const [industry, setIndustry] = useState("");
  const [title, setTitle] = useState("");
  const [options, setOptions] = useState([]);

  const pullJobTitles = async(props) => {
    const config = getAuthConfig();
    try {
      await axios
        .get("http://localhost:4000/api/job", config)
        .then((response) => {
          response.data.map((val, index) => {
            console.log(val)
            setOptions([...props, val])
          });
        });
    } catch (error) {}
  };

  useEffect(() => {
    pullJobTitles();
  }, []);

  const submitHandler = () => {};
  return (
    <div className="w-50">
      <h1>Edit Your Profile</h1>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Industries
        </label>
        <select
          className="form-select"
          onChange={(e) => setIndustry(e.target.value)}
        >
          <option value="">Marketing</option>
          <option value="">Finance</option>
          <option value="">Data</option>
          <option value="">Software</option>
          <option value="">Law</option>
          <option value="">Sales</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Job Title
        </label>
        <Select options={options} isMulti={true} />
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button
          onClick={submitHandler}
          class="btn btn-primary me-md-2 px-4"
          type="button"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default SelectComp;
