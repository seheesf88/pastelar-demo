import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { CATEGORY, UNIT } from '../utils/constant';

const RecipeForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <Form className="cover-page__form row g-3 justify-content-center">
      <div className="col-md-6">
        <Form.Select 
          aria-label="Category select" 
          name="category"
          value={formData.category}
          onChange={handleChange}>
          <option value="">Category</option>
          {CATEGORY.map(option => (
            <option key={option.value} value={option.value}>{option.title}</option>
          ))}
        </Form.Select>
      </div>
      <div className="col-md-8">
        <Form.Control 
          type="text" 
          placeholder="Name" 
          name="name"
          value={formData.name}
          onChange={handleChange} />
      </div>
      <div className="col-md-8 d-flex justify-content-center">
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Recipe used in other recipes."
          name="isUsedInOtherRecipes"
          checked={formData.isUsedInOtherRecipes}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6">
        <div className="row">
          <div className="col-6">
            <Form.Select 
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}>
              <option value="">Quantity</option>
              {[...Array(100).keys()].map(n => (
                <option key={n + 1} value={n + 1}>{n + 1}</option>
              ))}
            </Form.Select>
          </div>
          <div className="col-6">
            <Form.Select 
              aria-label="Unit select 2" 
              name="unit"
              value={formData.unit}
              onChange={handleChange}>
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
          <Form.Control 
            as="textarea" 
            rows={5} 
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />
        </Form.Group>
      </div>
      <div className="col-2 justify-content-center">
        <Button variant="success">Cancel</Button>
      </div>
    </Form>
  );
};

export default RecipeForm