import React, { useState } from 'react';
import './BaseBook.scss'
import { Button } from 'react-bootstrap';

const Instructions = ({title, closeBook}) => {
  return (
    <div className="instruction-page pt-5 pb-3 px-3">
      <div>
        <h2 className="ingredients-page__header text-center">{title}</h2>
        <div className="page__content">
        </div>
      </div>
      <div className="instruction-page__button-groups">
        <Button onClick={closeBook} className="me-2">Submit</Button>
        <Button onClick={closeBook}>Submit</Button>
      </div>
    </div>
  );
};

export default Instructions;
