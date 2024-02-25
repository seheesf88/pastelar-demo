import React, { useState } from 'react';
import './BaseBook.scss'
import { Form, Button } from 'react-bootstrap';

import { CATEGORY, UNIT } from '../utils/constant';

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="cover-page container py-5 px-3 d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }} ref={ref} data-density="hard">
      <Form className="cover-page__form row g-3 justify-content-center">
        <div className="col-md-6">
          <Form.Select aria-label="Category select">
            <option value="" disabled>Category</option>
            {CATEGORY.map(option => (
              <option key={option.value} value={option.value}>{option.title}</option>
            ))}
          </Form.Select>
        </div>
        <div className="col-md-8">
          <Form.Control type="text" placeholder="Name" />
        </div>
        <div className="col-md-8 d-flex justify-content-center">
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Recipe used in other recipes."
          />
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-6">
              <Form.Select>
                <option value="" disabled></option>
                {[...Array(100).keys()].map(n => (
                  <option key={n + 1} value={n + 1}>{n + 1}</option>
                ))}
              </Form.Select>
            </div>
            <div className="col-6">
              <Form.Select aria-label="Unit select 2">
                <option value="">Unit</option>
                {UNIT.map(option => (
                  <option key={option.value} value={option.value}>{option.title}</option>
                ))}
              </Form.Select>
            </div>
          </div>
        </div>

        <div className="col-12">
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Notes</Form.Label>
            <Form.Control as="textarea" rows={5} />
          </Form.Group>
        </div>
        <div className="col-2 justfy-content-center">
          <Button variant="success">Cancel</Button>
        </div>
        <Button variant="success" onClick={props.goNextPage} className="btn-sm">Next</Button>
      </Form>
    </div>
  );
});


const Ingredients = React.forwardRef((props, ref) => {
  return (
    <div className="page py-5 px-3" ref={ref}>
      <div className="page__content">
        <h2 className="book__page-header">Ingredients</h2>
        <Button variant="success" onClick={props.goPrevPage}>prev button</Button>
      </div>
    </div>
  );
});

const Instructions = React.forwardRef((props, ref) => {
  return (
    <div className="page py-5 px-3" ref={ref}>
      <div className="page__content">
        <h2 className="page__header">{props.title}</h2>
        {
          props.steps && props?.steps?.map((step, idx) => 
            <>
              {idx} - {step}
            </>
          )
        }
      </div>
      <button onClick={props.closeBook}>Submit</button>
    </div>
  );
});


const BaseBook = () => {
  const [currentLocation, setCurrentLocation] = useState(1);
  const [opened, setOpened] = useState(false);

  const numOfPapers = 2;
  const maxLocation = numOfPapers + 1;

  const goNextPage = () => {
    if (currentLocation < maxLocation) {
      setOpened(true);
      setCurrentLocation(currentLocation + 1);
    }
  };

  const goPrevPage = () => {
    if (currentLocation > 1) {
      setCurrentLocation(currentLocation - 1);
    } else {
      setOpened(false);
    }
  };
    
  const pageContents = [
    {
      front: <PageCover goNextPage={goNextPage} />,
      back: <Ingredients goPrevPage={goPrevPage} />
    },
    {
      front: <Instructions />,
      back: null
    }
  ];

  return (
    <div style={{ transform:  opened ? 'translateX(50%)' : '' }} className="base-book__container mt-5">
      {pageContents.map((page, index) => (
        <div
          key={index}
          id={`p${index + 1}`}
          className={`base-book__paper ${index < currentLocation - 1 ? 'base-book__paper--flipped' : ''}`}
          style={{ zIndex: index + 1 === currentLocation ? numOfPapers : 1 }}
        >
          <div className="base-book__paper-front">
            <div className="base-book__paper-front--content">
              {page.front}
            </div>
          </div>
          <div className="base-book__paper-back">
            <div className="base-book__paper-back--content">
              {page.back}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BaseBook;