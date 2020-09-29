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
    "showMethod": "show",
    "hideMethod": "fadeOut"
  }
  }
  
  handleChange(event){
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState)
  }

  id = 1;

  submitHandler(event){
    event.preventDefault();
    this.props.onpost(this.id, this.state.username, this.state.status, 0);
    toastr.success("You should be able to view this on the timeline", "Posted!");
    this.setState({
      username: "",
      status: "",
    });
    this.id ++;
  }

  render(){
  return (
    <>
    
    <Form onSubmit = {(e) => this.submitHandler(e)} className = "updateform"> 

      <Form.Group controlId = "username">
        <Form.Control name = "username" type = "text" value = {this.state.username} placeholder="Username" onChange = {(e) => this.handleChange(e)} required />
      </Form.Group>

      <Form.Group controlId = "status"> 
        <Form.Control name = "status" type = "text" value = {this.state.status} placeholder="Status" onChange = {(e) => this.handleChange(e)} required />
      </Form.Group>

      <Button variant = "outline-light" type = "submit">Post</Button>

    </Form>
    </>
  );
}
}

export default Update;