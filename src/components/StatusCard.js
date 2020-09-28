import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/card'
import Button from 'react-bootstrap/button';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';


class Status extends React.Component{
  constructor(props){
  super(props)
  this.state = {}
  }



  render(){
  return (
    <>
    <Card className="status_card">
      <Card.Title>{this.props.username}</Card.Title>
      <Card.Body>{this.props.status}</Card.Body>
      <Row>
        <Col md={11}>
          {/* empty column */}
        </Col>
        <Col md={1}>
          <div className="buttonbox">
          <Button variant = "outline-success" onClick = {() => this.props.increaseLikes()}>▲</Button>
          <Button variant = "outline-danger" onClick = {() => this.props.decreaseLikes()}>▼</Button>
          <div className="likes">{this.props.likes}</div>
          </div>
        </Col>
      </Row>
    </Card>
    </>
  );
}
}

export default Status;