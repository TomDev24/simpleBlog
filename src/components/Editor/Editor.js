import React from "react";
import "./Editor.css"

export class Editor extends React.Component{
  render(){
    return(
      <div className="editor">
        <p>Название статьи</p>
        <input type="text" id="post-name"/>
        <p>Содержание</p>
        <textarea cols="50" rows="10" id="post">
        </textarea>
        <input type="submit" value="Done" id="btn" />
      </div>
    )
  }
}
