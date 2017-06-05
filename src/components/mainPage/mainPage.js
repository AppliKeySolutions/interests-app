import React from 'react';
import { Navbar, Nav, NavItem, Grid, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router';

export default class MainPage extends React.Component {
  componentDidMount() {
    if (this.props.token && this.props.token.length > 0) {
      this.props.getAllCommunities(this.props.token);
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.token);
    if (nextProps.token !== this.props.token) {
      this.props.getAllCommunities(nextProps.token);
    }
  }
 
  render() {
    console.log('RENDER OF MAIN PAGE');
    return (
      <Grid>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/main">Interests App</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem><Link to="/main/mycommunities">My Communities</Link></NavItem>
            </Nav>
            <Nav>
              <NavItem><Link to="/main/create">Create Commmunity</Link></NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem>
                <Button
                  bsStyle="default"
                  onClick={() => this.props.signOut(this.props.token)}
                >
                  Sign Out
                </Button>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Row>
          <Col md={10} mdOffset={1}>
            {
              React.cloneElement(this.props.children, { token: this.props.token })
            }
          </Col>
        </Row>
      </Grid>
    );
  }
}
