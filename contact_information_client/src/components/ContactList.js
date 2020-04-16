import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {fetchContacts} from '../actions';

class ContactList extends Component {

    componentDidMount() {
        this.props.fetchContacts();
    }

    renderContacts() {
        if (this.props.contacts == null) {
            return (<div> No Contact present </div>);
        }
        return (
            <div>
                <h4>List of Contact</h4>
                <Link to="/add-contacts" className="waves-effect waves-light btn-small">
                    <i className="material-icons left">person</i>Add A Contact
                </Link>

                <table className="bordered highlight responsive-table">
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.contacts.map(contact => {
                            return (
                                <tr key={contact.id}>
                                    <td>{contact.first_name}</td>
                                    <td>{contact.last_name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.phone}</td>
                                    <td>{contact.status}</td>
                                    <td>
                                        <Link to={'/update-contacts/' + contact.id}>
                                            <i className="material-icons left">edit</i>
                                        </Link>
                                        <Link to={'/delete-contacts/' + contact.id}>
                                            <i className="material-icons left">delete</i>
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>);
    }

    render() {
        return (
            <div>
                {this.renderContacts()}
            </div>
        );
    }
}


function mapStateToProps({contacts}) {
    return ({contacts});
}

export default connect(mapStateToProps, {fetchContacts})(ContactList);
