import React from 'react';
import { Grid, Row, Col, Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export default class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
  };

  changeField = (name, value) => {
    this.setState((state) => {
      const obj = { ...state };
      obj[name] = value;
      return obj;
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col md={4} mdOffset={4}>
            <h1>Sign In Page</h1>
            <Form>

              <FormGroup>
                <ControlLabel>Email</ControlLabel>
                <FormControl
                  placeholder="Enter your email"
                  type="email"
                  value={this.state.email}
                  onChange={e => this.changeField('email', e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  placeholder="Enter your password"
                  type="password"
                  value={this.state.password}
                  onChange={e => this.changeField('password', e.target.value)}
                />
              </FormGroup>

              <Button
                bsStyle="primary"
                onClick={() => this.props.signIn(this.state)}
              >
                Sign In
              </Button>

            </Form>
          </Col>
        </Row>
      </Grid>
    );
  }
}
