import React from 'react'
import { useNavigate, Link} from 'react-router-dom'

function RadioButton() {
  const navigate = useNavigate();
  return (
    <div>
      <span className='text-info'> Question 1</span>
      <h5 className='text-info'>MCQ-single(radio button)</h5>
        <div className="my-2 btn-group-vertical d-flex justify-content-center" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" onClick={() => navigate('/Submit')}/>
        <label className="text-warning my-2 btn btn-outline-primary" htmlFor="btnradio1">Radio 1</label>
        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
        <label className="text-warning my-2  btn btn-outline-primary" htmlFor="btnradio2">Radio 2</label>
        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
        <label className="text-warning my-2 btn btn-outline-primary" htmlFor="btnradio3">Radio 3</label>
      </div>

      <div>
      <div className=" my-3 d-flex justify-content-center" role="group" aria-label="Basic mixed styles example">
          <button type="button" className="mx-1 btn btn-danger" onClick={() => navigate('/UploadFile')}>Previous</button>
          <button type="button" className="btn btn-success" onClick={() => navigate('/CheckBox')}>Next</button>
    </div>
</div>
    </div>
  )
}

export default RadioButton