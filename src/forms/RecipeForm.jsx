import React from 'react';
import { Form, Button } from 'react-bootstrap';
import BaseInput from '../components/BaseInput';
import BaseSelect from '../components/BaseSelect';
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
      <div className="col-md-6 mb-5">
        <BaseSelect 
          aria-label="Category select" 
          name="category"
          value={formData.category}
          onChange={handleChange}
          defaultOption="Category"
          options={CATEGORY}
        />
      </div>
      <div className="col-md-8 mb-3">
        <BaseInput
          type="text" 
          placeholder="Name" 
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-8 d-flex justify-content-center mb-2">
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Recipe used in other recipes."
          name="isUsedInOtherRecipes"
          checked={formData.isUsedInOtherRecipes}
          onChange={handleChange}
          className="form__check"
        />
      </div>
      <div className="col-md-6">
        <div className="row">
          <div className="col-6">
            <BaseSelect 
              aria-label="quantity" 
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              defaultOption="Quantity"
              options={Array.from({ length: 100 }, (_, index) => ({ value: index + 1 }))}
            />
          </div>
          <div className="col-6">
            <BaseSelect 
              aria-label="Unit" 
              name="unit"
              value={formData.unit}
              onChange={handleChange}
              defaultOption="Unit"
              options={UNIT}
            />
          </div>
        </div>
      </div>

      <div className="col-12">
        <BaseInput
          label="Notes"
          as="textarea" 
          rows={12} 
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        />
      </div>
    </Form>
  );
};

export default RecipeForm