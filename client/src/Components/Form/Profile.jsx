import React, { useState, useEffect } from "react";
import axios from 'axios'
import Select from "react-select";
import { getAuthConfig } from "../../Utils/config";
import { UserContext } from "../../Contexts/User/context";


const SelectComp = () => {
  const [industry, setIndustry] = useState("");
  const [title, setTitle] = useState("");
  const [options, setOptions] = useState([]);
  const [valArr, setValArr] = useState([])


  const [selectedOptions, setSelectedOptions] = useState([])
  const optionsArr = options
  const changeHandler = (selectedOption) => {
    console.log(selectedOptions);
    setSelectedOptions((i) => [...i, selectedOption]);
  console.log(selectedOptions);
  }
  const config = getAuthConfig();

  const pullJobTitles = async(props) => {
    
    let arr = []
    
    try {
      await axios
        .get(`http://localhost:4000/api/job`, config)
        .then((response) => {
          response.data.map((val, index) => {
            arr.push({value: val.title, label: val.title})
            setOptions(arr)
          });
        });
    } catch (error) {}
  };

  useEffect(() => {
    pullJobTitles();
  }, []);

  const saveHandler = async() => {
    let id = localStorage.getItem("id")
    try {
   const {data} = await axios.get(`http://localhost:4000/api/user/option/replacement/631d1535ac34dfcdf602c9c0`, selectedOptions, config) 
   console.log(data)
    } catch (error) {
      
    }
  }

  const submitHandler = () => {};
  return (
    <div className="w-50">
      <h1>Edit Your Profile</h1>
      {/* <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Industries
        </label>
        {console.log(selectedOptions)}
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
      </div> */}
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Job Title
        </label>
        <Select options={optionsArr} isMulti={true} onChange={changeHandler} />
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button
          onClick={saveHandler}
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
