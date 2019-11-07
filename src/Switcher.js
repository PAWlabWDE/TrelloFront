import { BrowserRouter as  Switch, Route } from "react-router-dom";
import React, { Component } from 'react';

export default class Switcher extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: ["aaa", "bbb", "ccc"],
            text: ''
        }

    }
    render() {
        return (
            <Switch>
                {this.state.list.map((item, index) => {
                    var linkAdddres = "/".concat(item);
                    console.log(linkAdddres);
                    return (
                        <Route exact path={linkAdddres}>
                            {item}
                        </Route>
                    )
                })}
            </Switch>);
    }
}