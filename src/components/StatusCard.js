import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/card'
import Button from 'react-bootstrap/button';

export default class Status extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
        <div className="status-card mt-3 p-3 rounded">
          <Card.Title className="text-dark">{this.props.username}</Card.Title>
          <Card.Body className="bg-light rounded mb-3 text-center">{this.props.status}</Card.Body>
          <div className="buttonbox bg-light rounded p-1">
            <Button variant="outline-success" onClick={() => this.props.increaseLikes()}>▲</Button>
            <Button variant="outline-danger" onClick={() => this.props.decreaseLikes()}>▼</Button>
            <div className="likes">{this.props.likes}</div>
          </div>
        </div>
    );
  }
}