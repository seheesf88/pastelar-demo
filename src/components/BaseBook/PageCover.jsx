import React, { useState } from 'react';
import './BaseBook.scss'
import RecipeForm from '../../forms/RecipeForm';
import { GrCaretNext } from "react-icons/gr";

const PageCover = (props) => {
  return (
    <div className="cover-page container pt-5 pb-3 px-3" data-density="hard">
      <RecipeForm />
      <GrCaretNext
        onClick={props.goNextPage}
        className="cover-page__submit-btn"
      />
    </div>
  );
};

export default PageCover;
