import React, { useState } from 'react';
import './BaseBook.scss'
import RecipeForm from '../../forms/RecipeForm';
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

  return (
    <div className="cover-page container pt-5 pb-3 px-3" data-density="hard">
      <RecipeForm
        formData={formData}
        setFormData={setFormData}
      />
      <GrCaretNext
        onClick={() => goNextPage(formData)}
        className="cover-page__submit-btn"
      />
    </div>
  );
};

export default PageCover;
