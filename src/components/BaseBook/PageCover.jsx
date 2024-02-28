import React, { useState } from 'react';
import './BaseBook.scss'
import RecipeForm from '../../forms/RecipeForm';

import { Button } from 'react-bootstrap';
import { GrCaretNext } from "react-icons/gr";

const PageCover = ({ goNextPage }) => {
  const [formData, setFormData] = useState({
    category:"",
    name:"",
    isUsedInOtherRecipes: false,
    quantity: 0,
    unit:"",
    notes:""
  }); 

  const handleCancel = () => {
    setFormData({
      category:"",
      name:"",
      isUsedInOtherRecipes: false,
      quantity: 0,
      unit:"",
      notes:""
    });

    alert('cancel!')
  }

  return (
    <div className="cover-page container pt-5 pb-3 ps-5 pe-3" data-density="hard">
      <RecipeForm
        formData={formData}
        setFormData={setFormData}
      />
      <div className="row">
        <Button variant="outline-secondary" onClick={handleCancel} className="offset-4 col-4 form__button">Cancel</Button>
        <div className="cover-page__submit-btn col-4 pe-3 pb-2">
          <GrCaretNext
            onClick={() => goNextPage(formData)}
          />
        </div>
      </div>
    </div>
  );
};

export default PageCover;
