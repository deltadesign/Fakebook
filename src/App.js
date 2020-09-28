import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/container';
import Nav from 'react-bootstrap/nav';
import Navbar  from 'react-bootstrap/Navbar';
import Status from './components/StatusCard';
import Update from './components/UpdateStatus';
import {HashRouter as Router,
  Switch,
  Route,
  Link
  } from "react-router-dom";
import './App.scss';

class App extends React.Component{
  constructor(props){
  super(props)
  this.state = {
    posts:[{id:0, username:"Daniel Thomas", status:"Hello World!", likes:0}]
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

  // componentDidMount () {
  //   const postsContents = localStorage.getItem("posts");
  //   this.setState(
  //     {posts: JSON.parse(postsContents) || []}
  //   )
  // }

  render(){
  return (
    <>
    <Router>
      <Navbar bg="light" expand="md" className = "nav">
        <Navbar.Brand>FakeBook</Navbar.Brand>
        <Navbar.Toggle aria-controls = "basic-navbar-nav" />
        <Navbar.Collapse id= "basic-navbar-controls">
        <Nav className = "mr-auto navlinks">
          <div className = "navlinks">
            <Link to = "/">Timeline</Link>
            <Link to = "/update">New</Link>
          </div>
        </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container className="main">
        <Switch>
          <Route path ="/update">
            <Update onpost = {(id,username, status, likes) => this.updateStatus(id,username, status, likes)} />
          </Route>
          <Route exact path = "/">
            {this.createposts()}
          </Route>
          <Route path = "/">
            <h1>ERROR 404 NOT FOUND</h1>
          </Route>
        {/* <pre>{JSON.stringify(this.state)}</pre> */}
        </Switch>
      </Container>
    </Router>
    </>
  );
}
}

export default App;
