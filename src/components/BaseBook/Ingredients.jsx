import React, { useState, useEffect } from 'react';
import './BaseBook.scss'

import Table from 'react-bootstrap/Table';
import SearchBox from '../BaseSearchBox';
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";

const ingredients = [
  {ingredientName: 'butter', amount: '10g', cost: 10},
  {ingredientName: 'milk', amount: '100ml', cost: 1},
  {ingredientName: 'butter', amount: '10g', cost: 10},
  {ingredientName: 'milk', amount: '100ml', cost: 1}
]
const Ingredients = ({goPrevPage, goNextPage}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [totalPrice, setTotalPrice] = useState(0)
  const handleSearch = (query) => {
    alert(query)
  };

  const removeItem = (e) => {
    console.log(e)
  };

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="ingredients-page pt-5 pb-3 px-3 ps-3 pe-5">
      <div>
        <h2 className="ingredients-page__header text-center mb-2">Ingredients</h2>
        <SearchBox onSearch={handleSearch} />
        <div className="ingredients-page__content mt-4">
          <Table striped borderless hover>
            <thead>
              <tr>
                <th>Ingredients</th>
                <th>Weight</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {ingredients.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.ingredientName}</td>
                  <td>{item.amount}</td>
                  <td>{item.cost} </td>
                  <td>
                    <TiDeleteOutline onClick={() => removeItem()}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <div className="row">
        <div className="col-4 ingredients-page__prev-btn ps-3 pb-2">
          <GrCaretPrevious
            onClick={goPrevPage}
          />
        </div>
        <div className="col-4 text-center">
          <div>Cost per kg</div>                
          <div>${totalPrice}</div>
        </div>
        <div className="col-4 ingredients-page__next-btn pe-3 pb-2">
        { windowWidth < 1000 && (
          <GrCaretNext
            onClick={goNextPage}
          />
        )}
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
