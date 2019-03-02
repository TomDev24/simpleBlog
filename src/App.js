import React, { Component } from 'react';
import {Editor} from "./components/Editor/Editor";
import {Posts} from "./components/Posts/Posts"

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      posts: [<div><h1>Hi</h1><p>there</p></div>]
    }
  }
  render(){
    return(
      <div>
      <Editor />
      <Posts posts={this.state.posts} />
      </div>
    );
  }
}



export default App;
