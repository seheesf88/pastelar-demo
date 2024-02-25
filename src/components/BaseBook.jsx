import React, { useState } from 'react';
import './BaseBook.scss'
import BaseDropdown from './BaseDropdown';
import { Form, Button } from 'react-bootstrap';

const PageCover = React.forwardRef((props, ref) => {
  const handleClick = (e) => {
    console.log(e)
    e.stopPropagation();
  };

  return (
    <div className="book__page book__page-cover" ref={ref} data-density="hard">
      <div className="book__page-content px-5" onClick={handleClick}>
        <h2>{props.children}</h2>
        <Form className="book__page-form px-5">
          <Form.Select aria-label="Default select example">
            <option>Categories</option>
            <option value="1">One</option>
          </Form.Select>
          <Form.Control type="text" placeholder="Large text" />
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Recipe used in other recipes."
          />
          <BaseDropdown btnText="Category" options={[1, 2]}/>
          <Form.Select aria-label="Default select example">
            <option>Unit</option>
          </Form.Select>
          <Button variant="success">Cancle</Button>
          <Button variant="success" id="next-btn" onClick={props.goNextPage}>Next button</Button>
        </Form>
      </div>
    </div>
  );
});

const Ingredients = React.forwardRef((props, ref) => {
  return (
    <div className="book__page" ref={ref}>
      <div className="book__page-content">
        <h2 className="book__page-header">Ingredients</h2>
        <Button variant="success" id="next-btn" onClick={props.goPrevPage}>prev button</Button>
      </div>
    </div>
  );
});

const Instructions = React.forwardRef((props, ref) => {
  return (
    <div className="book__page" ref={ref}>
      <div className="book__page-content">
        <h2 className="book__page-header">{props.title}</h2>
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
  const [opened, setOpened] = useState(false)

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
    <div className="container base-book">
      <div style={{ transform:  opened ? 'translateX(50%)' : '' }} id="book" className="book">
        {pageContents.map((page, index) => (
          <div
            key={index}
            id={`p${index + 1}`}
            className={`paper ${index < currentLocation - 1 ? 'flipped' : ''}`}
            style={{ zIndex: index + 1 === currentLocation ? numOfPapers : 1 }}
          >
            <div className="front">
              <div className={`front-content`}>
                {page.front}
              </div>
            </div>
            <div className="back">
              <div className={`back-content`}>
                {page.back}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BaseBook;