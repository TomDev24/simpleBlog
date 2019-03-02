import React, { Component } from 'react';
import {Editor} from "./components/Editor/Editor";
import {Posts} from "./components/Posts/Posts"

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      posts: [<div><h1>Hi</h1><p>there</p></div>]
    };
    this.handlePost=this.handlePost.bind(this);
  }

  handlePost(name,text){
    let post = <div>
     <h1>{name}</h1>
     <p>{text}</p>
     </div>;
     this.setState({
       posts: [...this.state.posts, post]
     })
  }
  render(){
    return(
      <div>
      <Editor onClick={this.handlePost}/>
      <Posts posts={this.state.posts} />
      </div>
    );
  }
}



export default App;
