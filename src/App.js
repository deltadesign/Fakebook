import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/container'
import './App.scss';
import Status from './components/StatusCard';
import Update from './components/UpdateStatus';


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
      <Container className = "container">
        <Update onpost = {() => this.updateStatus()} />
        <br />
        <Status />
      </Container>
    </>
  );
}
}

export default App;
