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
    <Card className = "statusCard">
      <Row>
        <Col>
          <h2>UserName</h2>
        </Col>
      </Row>
      <Row className = "justify-content-md-center">
        <Col md="auto">
          <h4>This is a status I have posted</h4>
        </Col>
      </Row>
      <Row>
        <Col md={11}>
          {/* empty column */}
        </Col>
        <Col md={1}>
        <div className="buttonbox">
          <Button variant = "outline-primary">▲</Button>
          <Button variant = "outline-primary">▼</Button>
          <div className="likes">0</div>
          </div>
        </Col>
      </Row>
    </Card>
    </>
  );
}
}

export default Status;