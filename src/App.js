import React, { Component } from 'react';
import {Editor} from "./components/Editor/Editor";
import {Posts} from "./components/Posts/Posts"
import {Header} from "./components/Header/Header"

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      posts: []
    };
    this.handlePost=this.handlePost.bind(this);
  }

  handlePost(name,text){
    let post = <div className="post animated slideInLeft">
     <h1>{name}</h1>
     <hr/>
     <p>{text}</p>
     </div>;
     this.setState({
       posts: [...this.state.posts, post]
     })
  }
  render(){
    return(
      <div>
      <Header />
      <Editor onClick={this.handlePost}/>
      <Posts posts={this.state.posts} />
      </div>
    );
  }
}



export default App;
