import React from "react";
import { useNavigate, Link} from 'react-router-dom'

function CheckBox() {
  const navigate = useNavigate();
  return (
    <div>
      <span className='text-info'> Question 2</span>
      <h5 className='text-info'>MCQ-single(CheckBox)</h5>
      <div
        className="btn-group d-flex justify-content-center btn-group-vertical "
        role="group"
        aria-label="Basic checkbox toggle button group"
      >
        <input
          type="checkbox"
          className="btn-check"
          id="btncheck1"
          autoComplete="off"
        />
        <label className="my-2 text-warning btn btn-outline-primary" htmlFor="btncheck1">
          Checkbox 1
        </label>
        <input
          type="checkbox"
          className="btn-check"
          id="btncheck2"
          autoComplete="off"
        />
        <label className="my-2 text-warning btn btn-outline-primary" htmlFor="btncheck2">
          Checkbox 2
        </label>
        <input
          type="checkbox"
          className="btn-check"
          id="btncheck3"
          autoComplete="off"
        />
        <label className="my-2 text-warning btn btn-outline-primary" htmlFor="btncheck3">
          Checkbox 3
        </label>
      </div>

      <div className="my-3 d-flex justify-content-center" role="group" aria-label="Basic mixed styles example">
          <button type="button" className=" mx-1 btn btn-danger" onClick={() => navigate('/')}>Previous</button>
          <button type="button" className="btn btn-success" onClick={() => navigate('/Dropdown')}>Next</button>
    </div>
    </div>
  );
}

export default CheckBox;
