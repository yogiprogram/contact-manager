import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../actions';
import ContactForm from "./ContactForm";

class ContactNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: {first_name: '', last_name: '', email: '', phone: '', status: 'INACTIVE'},
            saving: false,
            toDashboard: false
        };
        this.saveContact = this.saveContact.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    saveContact(event) {
        event.preventDefault();
        this.props.actions.addContact(this.state.contact, this.props.history);
    }

    updateState(event) {
        const field = event.target.name;
        const contact = this.state.contact;
        contact[field] = event.target.value;
        return this.setState({contact: contact});
    }


    render() {

        return (
            <div>
                <h4>Add New Contact</h4>
                <ContactForm
                    contact={this.state.contact}
                    onSave={this.saveContact}
                    onChange={this.updateState}
                />
            </div>
        );
    }
}

ContactNew.propTypes = {
    actions: PropTypes.object.isRequired,
    toDashboard: PropTypes.bool
};


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(ContactNew);