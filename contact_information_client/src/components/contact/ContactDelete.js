import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions';

class ContactDelete extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contact: this.props.contact,
            saving: false,
            toDashboard: false
        };
        this.deleteContact = this.deleteContact.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    componentDidMount() {
        this.props.actions.fetchContacts();
    }

    deleteContact(event) {
        event.preventDefault();
        this.props.actions.deleteContact(this.state.contact, this.props.history);
        // this.setState({toDashboard: true});
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
                <h5>Delete Contact</h5>
                <div key={this.state.contact.first_name}>
                    <label>First Name</label>
                    <div>
                        {this.state.contact.first_name}
                    </div>
                </div>
                <br/>
                <div key={this.state.contact.last_name}>
                    <label>Last Name</label>
                    <div>
                        {this.state.contact.last_name}
                    </div>
                </div>
                <br/>
                <div key={this.state.contact.email}>
                    <label>Email Address </label>
                    <div>
                        {this.state.contact.email}
                    </div>
                </div>
                <br/>
                <div key={this.state.contact.phone}>
                    <label>Phone Number</label>
                    <div>
                        {this.state.contact.phone}
                    </div>
                </div>
                <br/>
                <input
                    type="submit"
                    disabled={this.props.saving}
                    value={this.props.saving ? 'Delete/InActive...' : 'Delete/InActive'}
                    className="row waves-effect waves-light btn-small"
                    onClick={this.deleteContact}/>

                <Link to="/" className="waves-effect waves-light btn-small red btn-flat white-text right">
                    Cancel
                </Link>
            </div>

        );
    }
}

ContactDelete.propTypes = {
    actions: PropTypes.object.isRequired,
    toDashboard: PropTypes.bool
};


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

function mapStateToProps(state, ownProps) {
    let contact = {id: '', first_name: '', last_name: '', email: '', phone: ''};
    const contactId = ownProps.match.params.id;
    if (state.contacts !== undefined) {
        contact = state.contacts.find(contact => contact.id === contactId)
    }
    return {contact: contact};
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactDelete);