import React from "react";
import "./Editor.css"

export class Editor extends React.Component{
  constructor(props){
    super(props);
    this.state={
      heading: "",
      text: ""
    }
    this.handleClick=this.handleClick.bind(this);
    this.takeName=this.takeName.bind(this);
    this.takeText=this.takeText.bind(this);
  }
  handleClick(){
    if (!this.state.heading || !this.state.text){
      alert("Ошибка. Введите название и содержание статьи")
    } else{
    this.props.onClick(this.state.heading,this.state.text)
  }
  }
  takeName(e){
    this.setState({
      heading: e.target.value
    })
  }
  takeText(e){
    this.setState({
      text: e.target.value
    })
  }

  render(){
    return(
      <div className="editor">
        <p className="white">Название статьи</p>
        <input onChange={this.takeName}
        type="text" id="post-name"/>
        <p className="white">Содержание</p>
        <textarea onChange={this.takeText}
        cols="50" rows="10" id="post">
        </textarea>
        <input type="submit" onClick={this.handleClick}
        value="Done" id="btn" />
      </div>
    )
  }
}
