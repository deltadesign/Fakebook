import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/container';
import Navbar  from 'react-bootstrap/Navbar';
import Status from './components/StatusCard';
import Update from './components/UpdateStatus';
import './App.scss';

class App extends React.Component{
  constructor(props){
  super(props)
  this.state = {}
  }

  updateStatus(){
    console.log("Hello from app.js")
  }

  render(){
  return (
    <>
      <Navbar bg="light" expand="md">
        <Navbar.Brand>FakeBook</Navbar.Brand>
      </Navbar>

      <Container className = "update_status_container">
        <Update onpost = {() => this.updateStatus()} />
      </Container>

      <Container className = "status_card_container">
        <Status />
      </Container>
      
    </>
  );
}
}

export default App;
