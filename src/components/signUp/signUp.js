import React from 'react';
import { Grid, Row, Col, Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export default class SignUp extends React.Component {
  state = {
    email: '',
    name: '',
    password_1: '',
    password_2: '',
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
            <h1>Sign Up Page</h1>
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
                <ControlLabel>Name</ControlLabel>
                <FormControl
                  placeholder="Enter your name"
                  type="text"
                  value={this.state.name}
                  onChange={e => this.changeField('name', e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  placeholder="Enter your password"
                  type="password"
                  value={this.state.password_1}
                  onChange={e => this.changeField('password_1', e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <ControlLabel>Repeat password</ControlLabel>
                <FormControl
                  placeholder="Repeat your password"
                  type="password"
                  value={this.state.password_2}
                  onChange={e => this.changeField('password_2', e.target.value)}
                />
              </FormGroup>

              <Button
                bsStyle="primary"
                onClick={() => this.props.signUp(this.state)}
              >
                Sign Up
              </Button>

            </Form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

SignUp.propTypes = {
  signUp: React.PropTypes.func.isRequired,
};
