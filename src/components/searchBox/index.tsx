import React, { FC } from 'react';
import { Form } from 'react-bootstrap';

export const SearchBox: FC = () => {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        Well never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  );
};
