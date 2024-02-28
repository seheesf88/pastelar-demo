import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { IoSearchSharp } from "react-icons/io5";

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
		console.log(event)
    event.preventDefault();
    onSearch(query);
  };

  return (
    <InputGroup>
      <InputGroup.Text onClick={handleSubmit} className="form__search-box-icon">
        <IoSearchSharp />
      </InputGroup.Text>
      <Form.Control
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="form__search-box"
      />
    </InputGroup>
  );
};

export default SearchBox;
