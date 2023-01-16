import React from 'react'
import { useNavigate} from 'react-router-dom'

function Dropdown() {
  const navigate = useNavigate();

  return (
    <div>
      <span className='text-info'> Question 3</span>
      <h5 className='text-info'>MCQ-single(Dropdown)</h5>
        <div className="dropdown d-flex justify-content-center">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown button
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>

      <div className="my-3 d-flex justify-content-center" role="group" aria-label="Basic mixed styles example">
          <button type="button" className="mx-1 btn btn-danger" onClick={() => navigate('/CheckBox')}>Previous</button>
          <button type="button" className="btn btn-success" onClick={() => navigate('/InputText')}>Next</button>
    </div>
    </div>
  )
}

export default Dropdown