import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../actions';
import ContactForm from "./ContactForm";


class ContactEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: this.props.contact,
            saving: false,
            toDashboard: false
        };
        this.saveContact = this.saveContact.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    componentDidMount() {
        this.props.actions.fetchContacts();
    }

    saveContact(event) {
        event.preventDefault();
        this.props.actions.updateContact(this.state.contact, this.props.history);
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
                <h5>Edit Contact</h5>
                <ContactForm
                    contact={this.state.contact}
                    onSave={this.saveContact}
                    onChange={this.updateState}
                    edit={true}
                />
            </div>
        );
    }
}

ContactEdit.propTypes = {
    actions: PropTypes.object.isRequired,
    toDashboard: PropTypes.bool
};


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

function mapStateToProps(state, ownProps) {
    let contact = {id: '', first_name: '', last_name: '', email: '', phone: '', status: 'INACTIVE'};
    const contactId = ownProps.match.params.id;
    if (state.contacts !== undefined) {
        contact = state.contacts.find(contact => contact.id === contactId);
    }
    return {contact: contact};
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactEdit);