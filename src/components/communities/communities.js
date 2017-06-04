import React from 'react';
import { Table, Button } from 'react-bootstrap';

export default class Communities extends React.Component {
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

  renderTableContent = list => {
    if (this.props.route.path === 'mycommunities') {
      const arr = this.props.list.filter(item => item.is_member);
      return arr.map(item => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>
            <Button
              bsStyle="default"
              onClick={() => this.props.changeCurrentCommunity(item.id)}
            >
              {item.name}
            </Button>
          </td>
          <td>{item.description}</td>
          <td>{item.owner.name}</td>
          <td>
            {this.renderActionTd(item.is_member, item.id)}
          </td>
        </tr>
      ));
    }
    return this.props.list.map(item => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>
          <Button
            bsStyle="default"
            onClick={() => this.props.changeCurrentCommunity(item.id)}
          >
            {item.name}
          </Button>
        </td>
        <td>{item.description}</td>
        <td>{item.owner.name}</td>
        <td>
          {this.renderActionTd(item.is_member, item.id)}
        </td>
      </tr>
      ),
    );
  }

  render() {
    console.log('NUJNIY RENDER', this.props);
    return (
      <div>
        <Table condensed hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Owner</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.list.length > 0
              ? this.renderTableContent(this.props.list)
              : null
            }
          </tbody>
        </Table>
      </div>
    );
  }
}
