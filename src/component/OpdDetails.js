import React from "react";
import { Form, Button, Container} from 'react-bootstrap'
// import Header from "./Header";

function OpdDetails() {
  return (
    <div>
        {/* <Header/> */}
        <Container className="mt-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* <Form.Label></Form.Label> */}
          <Form.Control type="text" placeholder="आपले नाव भरा" />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <Form.Label></Form.Label> */}
          <Form.Control type="text" placeholder="आपले वय भरा" />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="success" type="submit">
          आपला नंबर लावा
        </Button>
      </Form>
      </Container>
    </div>
  );
}

export default OpdDetails;
