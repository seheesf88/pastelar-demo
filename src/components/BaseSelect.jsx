import React from 'react';
import { Form } from 'react-bootstrap';

const BaseSelect = ({ defaultOption, options, ...props}) => {
  return (
    <Form.Select 
      {...props}
      className="form__select"
    >
      <option value="">{defaultOption}</option>
      {options.map(option => (
        <option key={option.value} value={option.value}>{option.value}</option>
      ))}
    </Form.Select>
  );
};

export default BaseSelect