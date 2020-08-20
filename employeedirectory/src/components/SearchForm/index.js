import React from "react";
import { Form, Button } from "react-bootstrap";

function SearchForm() {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Search by Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        onClick={(e) => e.preventDefault()}
      >
        Search
      </Button>
    </Form>
  );
}

export default SearchForm;
