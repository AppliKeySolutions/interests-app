import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

export default class Community extends React.Component {
  renderActionTd = (member, id) => {
    if (this.props.token && this.props.token.length > 0) {
      return member
      ? (
        <Button
          bsStyle="danger"
          onClick={() => this.props.leaveCommunity(id, this.props.token)}
        >
          Leave
        </Button>
      )
      : (
        <Button
          bsStyle="success"
          onClick={() => this.props.joinCommunity(id, this.props.token)}
        >
          Join
        </Button>
      );
    } else return null;
  }

  renderContent = () => {
    if (this.props.list && this.props.list.length > 0 && this.props.currentCommunity) {
      const comm = this.props.list[this.props.currentCommunity-1];
      return (
        <Jumbotron>
          <h1>{comm.name}</h1>
          <h2>Owner: {comm.owner.name}</h2>
          <p>
            {comm.description}
          </p>
          <p>
            Tags:
            {comm.interest_list.map(item => `${item}, `)}
          </p>
          <p>
            {this.renderActionTd(comm.is_member, comm.id)}
          </p>
        </Jumbotron>
      );
    } else return null;
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}
