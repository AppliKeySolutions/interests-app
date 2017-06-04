import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export default class componentName extends React.Component {
  state = {
    name: '',
    description: '',
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
      <Form>
        <h1>Create Community</h1>

        <FormGroup>
          <ControlLabel>Name</ControlLabel>
          <FormControl
            placeholder="Enter community name"
            type="text"
            value={this.state.name}
            onChange={e => this.changeField('name', e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Description</ControlLabel>
          <FormControl
            placeholder="Enter community description"
            type="text"
            value={this.state.description}
            onChange={e => this.changeField('description', e.target.value)}
          />
        </FormGroup>

        <Button
          bsStyle="primary"
          onClick={() => this.props.createCommunity(this.state, this.props.token)}
        >
          CREATE NEW
        </Button>

      </Form>
    );
  }
}
