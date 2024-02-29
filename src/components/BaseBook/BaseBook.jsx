import React, { useState, useEffect } from 'react';
import './BaseBook.scss'

import PageCover from './PageCover';
import Ingredients from './Ingredients';
import Instructions from './Instructions';


const BaseBook = ({ closeBook }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentLocation, setCurrentLocation] = useState(1);
  const [opened, setOpened] = useState(false);
  const [data, setData] = useState({})

  const numOfPapers = 2;
  const maxLocation = numOfPapers + 1;

  const goNextPage = (updatedFormData) => {
    console.log('??')
    setData(updatedFormData)
    if(windowWidth < 1000) {
      setCurrentLocation((prevLocation) => prevLocation + 1);
    }
    if (currentLocation < maxLocation) {
      setOpened(true);
      setCurrentLocation(currentLocation + 1);
    }
  };

  const goPrevPage = () => {
    if(windowWidth < 1000) {
      setCurrentLocation((prevLocation) => prevLocation - 1);
    }

    if (currentLocation > 1) {
      setCurrentLocation(currentLocation - 1);
    } else {
      setOpened(false);
    }
  };

  const createRecipe = (steps) => {
    setData(prevData => ({ ...prevData, instructions: steps }));
    // create post request here
    closeBook()
  }

  const pageContents = [
    {
      front: <PageCover goNextPage={goNextPage} closeBook={closeBook}/>,
      back: <Ingredients goPrevPage={goPrevPage} />
    },
    {
      front: <Instructions name={data.name} closeBook={closeBook} createRecipe={createRecipe} />,
      back: null
    }
  ];


  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
    { windowWidth > 1000 ? 
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
    :
      <div className="base-book__container mt-2">
      {currentLocation === 1 && (
        <div className="base-book__paper-front">
          <div className="base-book__paper-front--content">
            <PageCover goNextPage={goNextPage} />
          </div>
        </div>
      )}
      {currentLocation === 2 && (
        <div className="base-book__paper-front">
          <div className="base-book__paper-front--content">
            <Ingredients goPrevPage={goPrevPage} goNextPage={goNextPage} />
          </div>
        </div>
      )}
      {currentLocation === 3 && (
        <div className="base-book__paper-front">
          <div className="base-book__paper-front--content">
            <Instructions goPrevPage={goPrevPage} closeBook={closeBook}/>
          </div>
        </div>
      )}
      </div>
    }
    </>
  );
};

export default BaseBook;