import React, { Component } from 'react';
import BoardLink from "./BoardLink";
import { Button} from 'react-bootstrap';
import "./Todo.css";


export default  class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      text: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.chooseBoard = this.chooseBoard.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("handleSubmit");
    if(this.state.text !== ""){
        this.setState(prevState => ({
            list: prevState.list.concat(this.state.text),
            text: ''
        }))
    }

  }

  handleChange(e) {
    console.log("handleChange");
    this.setState({
      text: e.target.value
    })
  }

  chooseBoard(index) {
    console.log("chooseBoard");
   

  }

  render() {
    return (
      <div>
        <h1>BOARD LIST</h1>
        <form onSubmit={this.handleSubmit}>
          <input  value={this.state.text} onChange={e => this.handleChange(e)} />
         <p/>
         <button  class="btn btn-outline-danger">Add Board</button>
         <p/><p/>
          <ol>
            {this.state.list.map((item, index) => {
              return (
                   <ul >    
                     <p/>   
                     <div class="center">  
                  <BoardLink name={item}></BoardLink>
                  </div>
                  </ul>)
            })}
          </ol>
        </form>
      </div>
    )
  }
}