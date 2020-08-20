import React from "react";
import { Form, Button } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

function SearchForm( props ) {
  return (
    <Form onSubmit={e => e.preventDefault()}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Search by Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={e => props.updateSearch(e.target.value) }/>
      </Form.Group>
    </Form>
  );
}

export default SearchForm;
