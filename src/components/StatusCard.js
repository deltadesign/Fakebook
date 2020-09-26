import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/card'
import Button from 'react-bootstrap/button';



class Status extends React.Component{
  constructor(props){
  super(props)
  this.state = {}
  }

  render(){
  return (
    <>
    <Card>
    THIS IS A STATUS I HAVE POSTED
    <Button variant = "outline-primary">I Like it!</Button>
    </Card>
    </>
  );
}
}

export default Status;