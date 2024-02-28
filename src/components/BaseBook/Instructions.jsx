import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { GrCaretPrevious } from "react-icons/gr";
import { GoPlusCircle } from "react-icons/go";

const Instructions = ({ name, goPrevPage, closeBook, createRecipe }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [steps, setSteps] = useState(Array(10).fill('').map((_, index) => ({ step: index + 1, value: '' })));

  const handleInputChange = (index, value) => {
    const newSteps = steps.map((step, i) => i === index ? { ...step, value } : step);
    setSteps(newSteps);
  };

  const addInputBox = () => {
    setSteps([...steps, { step: steps.length + 1, value: '' }]);
  };

  const handleSubmit = () => {
    const hasEmptyStep = steps.some(step => step.value.trim() === '');

    if (hasEmptyStep) {
      createRecipe(steps);
      setSteps(Array(10).fill('').map((_, index) => ({ step: index + 1, value: '' })));
    }
  };

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="instructions-page pt-5 pb-3 ps-5 pe-3">
      <div>
      <div className="instructions-page__header text-center">
        <h2>{name}</h2>
        <h3>to proceed</h3>
      </div>
      <div className="instructions-page__content">
        {steps.map((step, index) => (
          <Form.Group key={index} className="instructions-page__content-steps mb-2">
            <Form.Label className="instructions-page__content-step mb-0">{step.step}</Form.Label>
            <Form.Control
              type="text"
              size="sm"
              value={step.value}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className="form__input"
            />
          </Form.Group>
        ))}
        <div className="d-flex justify-content-center">
          <GoPlusCircle onClick={addInputBox} className="mt-3"/>
        </div>
      </div>
      </div>
      <div className="row">
        <div className="col-4 ingredients-page__prev-btn ps-3 pb-2">
          { windowWidth < 1000 && (
            <GrCaretPrevious
              onClick={goPrevPage}
            />
          )}
        </div>
        <div className="instructions-page__button-groups col-4">
          <Button onClick={closeBook} variant="outline-secondary" className="form__button me-2">Cancel</Button>
          <Button onClick={handleSubmit} variant="outline-secondary" className="form__button">Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
