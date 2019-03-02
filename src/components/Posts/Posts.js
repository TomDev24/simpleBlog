import React from "react";
import "./Posts.css";

export class Posts extends React.Component{
  render(){
    return(
    <div>
      <h1>render me!</h1>
      {this.props.posts}
    </div>
  )
  }
}
