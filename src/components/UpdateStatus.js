import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/form'
import Button from 'react-bootstrap/button'
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';


class Update extends React.Component{
  constructor(props){
  super(props)
  this.state = {
    username: "",
    status: "",
  }
  toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
  }
  
  handleChange(event){
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState)
  }

  id = 0;

  submitHandler(event){
    event.preventDefault();
    this.props.onpost( this.id, this.state.username, this.state.status, 0);
    toastr.info("You should be able to view this on the timeline", "Posted!");
    this.setState({
      username: "",
      status: "",
    });
    this.id ++;
  }

  render(){
  return (
    <>
    <Form onSubmit = {(e) => this.submitHandler(e)}> 

      <Form.Group controlId = "username">
        <Form.Label>Username</Form.Label>
        <Form.Control name = "username" type = "text" value = {this.state.username} onChange = {(e) => this.handleChange(e)} required />
      </Form.Group>

      <Form.Group controlId = "status"> 
        <Form.Label>Status</Form.Label>
        <Form.Control name = "status" type = "text" value = {this.state.status} onChange = {(e) => this.handleChange(e)} required />
      </Form.Group>

      <Button variant = "outline-primary" type = "submit">Post</Button>

    </Form>
    </>
  );
}
}

export default Update;