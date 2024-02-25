import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const BaseDropdown = ({ btnText, options }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {btnText}
      </Dropdown.Toggle>

      <Dropdown.Menu>
				{options && options.map(item => 
					<Dropdown.Item key={item} href="#/action-1">{item}</Dropdown.Item>
				)}
      </Dropdown.Menu>
    </Dropdown>
  );
};


export default BaseDropdown