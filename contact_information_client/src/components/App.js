import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from "./Header";
import Dashboard from "./Dashboard";
import ContactNew from "./contact/ContactNew";
import ContactEdit from "./contact/ContactEdit";
import ContactDelete from "./contact/ContactDelete"


class App extends Component {

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact path="/" component={Dashboard}/>
                        <Route exact path="/add-contacts" component={ContactNew}/>
                        <Route exact path="/update-contacts/:id" component={ContactEdit}/>
                        <Route path="/delete-contacts/:id" component={ContactDelete}/>
                    </div>

                </BrowserRouter>
            </div>
        );
    };
}

export default connect(null, actions)(App);
