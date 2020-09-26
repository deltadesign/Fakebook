import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
      < Update />
      <br />
      < Status />
    </>
  );
}
}

export default App;
