import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { Button} from 'react-bootstrap';
import "./Todo.css";



class BoardLink extends Component
{
    constructor(props) {
        super(props); 
        
        this.props = {    
          name: ""        
        };        
    
      }
    render (){
        var linkAdddres = "/".concat(this.props.name);        
      console.log(linkAdddres);
        
        return(
            <div class="center">
            <Link to={linkAdddres}><Button bsStyle="primary">{this.props.name}</Button></Link>
            </div>
        );
    }
}

export default BoardLink;
