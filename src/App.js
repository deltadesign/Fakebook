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

  render(){
  return (
    <>
      <Container>
        <Update />
        <br />
        <Status />
      </Container>
    </>
  );
}
}

export default App;
