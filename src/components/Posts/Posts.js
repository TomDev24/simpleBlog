import React from "react";
import "./Posts.css";

export class Posts extends React.Component{
  render(){
    return(
    <div className="post-container">
      {this.props.posts}
    </div>
  )
  }
}
