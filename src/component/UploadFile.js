import React from "react";
import { useNavigate} from 'react-router-dom'

function UploadFile() {
  const navigate = useNavigate();

  return (
    <div>
      <span className='text-info'> Question 5</span>
      <h5 className='text-info'>MCQ-single(Upload File)</h5>
    <div className="m-3 ">
      <label htmlFor="formFileLg" className="form-label">Large file input example</label>
        <input className="form-control form-control-lg" id="formFileLg" type="file" />
    </div>

    <div className="my-3 d-flex justify-content-center" role="group" aria-label="Basic mixed styles example">
    <button type="button" className=" mx-1 btn btn-danger" onClick={() => navigate('/InputText')}>Previous</button>
    <button type="button" className="btn btn-success" onClick={() => navigate('/Submit')}>Next</button>
    </div>
</div>
  );
}

export default UploadFile;