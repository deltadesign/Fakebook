import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/form'
import Button from 'react-bootstrap/button'


class Update extends React.Component{
  constructor(props){
  super(props)
  this.state = {
    id: "",
    username: "",
    status: "",
  }
  }

  handleChange(event){
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState)
  }

  render(){
  return (
    <>
    <Form onSubmit = {(e) => this.submitHandler(e)}> 

      <Form.Group controlId = "username">
        <Form.Label>Username</Form.Label>
        <Form.Control name = "username" type = "text" value = {this.state.username} onChange = {(e) => this.handleChange(e)}/>
      </Form.Group>

      <Form.Group controlId = "status"> 
        <Form.Label>Status</Form.Label>
        <Form.control name = "status" type = "text" value = {this.state.status} onChange = {(e) => this.handleChange(e)} />
      </Form.Group>

      <Button variant = "outline-primary" type = "submit">Post</Button>

    </Form>
    </>
  );
}
}

export default Update;