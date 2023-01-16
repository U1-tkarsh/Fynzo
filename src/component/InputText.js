import React from 'react'
import { useNavigate} from 'react-router-dom'

function InputText() {
  const navigate = useNavigate();

  return (
    <div>
      <span className='text-info'> Question 4</span>
      <h5 className='text-info'>MCQ-single(Input Text)</h5>
        <div className='InputText d-flex justify-content-evenly'>
            <input type="text" placeholder='Write anything what you want' /> 
        </div>

        <div className="my-3 d-flex justify-content-center" role="group" aria-label="Basic mixed styles example">
          <button type="button" className=" mx-1 btn btn-danger" onClick={() => navigate('/Dropdown')}>Previous</button>
          <button type="button" className="btn btn-success" onClick={() => navigate('/UploadFile')}>Next</button>
    </div>
    </div>
  )
}

export default InputText