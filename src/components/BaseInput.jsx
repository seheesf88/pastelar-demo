import React from 'react';
import { Form } from 'react-bootstrap';

const BaseInput = ({ label, as, rows=1, ...props}) => {
  return (
    <Form.Group>
      <Form.Label
        className="form__label"
      >
        {label}
      </Form.Label>
      <Form.Control 
        as={as} 
        rows={rows} 
        className="form__input"
        {...props}
      />
    </Form.Group>
  );
};

export default BaseInput