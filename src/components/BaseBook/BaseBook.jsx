import React, { useState } from 'react';
import './BaseBook.scss'

import PageCover from './PageCover';
import Ingredients from './Ingredients';
import Instructions from './Instructions';


const BaseBook = () => {
  const [currentLocation, setCurrentLocation] = useState(1);
  const [opened, setOpened] = useState(false);

  const numOfPapers = 2;
  const maxLocation = numOfPapers + 1;

  const goNextPage = (updatedFormData) => {
    console.log(updatedFormData)
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

  const closeBook = () => {
    console.log('closed')
  }
    
  const pageContents = [
    {
      front: <PageCover goNextPage={goNextPage} />,
      back: <Ingredients goPrevPage={goPrevPage} />
    },
    {
      front: <Instructions closeBook={closeBook}/>,
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