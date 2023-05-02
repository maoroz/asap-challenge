import React from "react";
import { InputGroup, Form, Button } from "react-bootstrap";

const SearchInput = ({ label, onSearch, buttonLabel, value, onChange }) => {
  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder={label}
        aria-label={label}
        aria-describedby="basic-addon2"
        value={value}
        onChange={onChange}
      />
      <Button variant="dark" id="button-addon2" onClick={onSearch}>
        {buttonLabel}
      </Button>
    </InputGroup>
  );
};

export default SearchInput;
