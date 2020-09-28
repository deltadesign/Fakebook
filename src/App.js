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
  this.state = {
    posts:[]
  }
  }

  createposts() {
    return this.state.posts.reverse().map((current,i) => (
      < Status key = {i} id = {current.id} username = {current.username} status = {current.status} likes = {current.likes} increaseLikes = {(key) => this.increaseLikes(current.id)} decreaseLikes = {(key) => this.decreaseLikes(current.id)}/>
    ))
  }

  updateStatus(id,username, status, likes){
    const newPost = {id, username, status, likes}
    this.setState((state)=>({
      posts: state.posts.concat(newPost)
    }))
  }

  increaseLikes(id){
    this.state.posts.forEach((item) => {
      if (item.id === id) {
        return {...item,
        likes: item.likes ++
        }
      }
    })
    this.setState((state) => ({
      posts: state.posts
    }))
  }

  decreaseLikes(id){
    this.state.posts.forEach((item) => {
      if (item.id === id) {
        return {...item,
        likes: item.likes --
        }
      }
    })
    this.setState((state) => ({
      posts: state.posts
    }))
  }

  render(){
  return (
    <>
      <Navbar bg="light" expand="md">
        <Navbar.Brand>FakeBook</Navbar.Brand>
      </Navbar>

      <Container className = "update_status_container">
        <Update onpost = {(id,username, status, likes) => this.updateStatus(id,username, status, likes)} />
      </Container>

      <Container className = "status_card_container">
        {this.createposts()}
      </Container>
      {/* <pre>{JSON.stringify(this.state)}</pre> */}
    </>
  );
}
}

export default App;
