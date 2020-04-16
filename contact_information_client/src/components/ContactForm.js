import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import {Link} from 'react-router-dom';
import M from "materialize-css"

class ContactForm extends Component {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        M.AutoInit();
    }
    render() {
        let dropDown;
        if (this.props.edit) {
            dropDown =
                <div className="form-group">
                    <div className="field input-field col s12">
                        <select name="status" onChange={this.props.onChange} value={this.props.contact.status}>
                            <option value="INACTIVE" selected={this.props.contact.status === 'INACTIVE'}>INACTIVE</option>
                            <option value="ACTIVE" selected={this.props.contact.status === 'ACTIVE'}>ACTIVE</option>
                        </select>
                        <label>Status</label>
                    </div>
                </div>;
        } else {
            dropDown = <div/>;
        }
        return (
            <div>
                <form>
                    <TextInput
                        name="first_name"
                        label="First Name"
                        value={this.props.contact.first_name}
                        onChange={this.props.onChange}
                    />

                    <TextInput
                        name="last_name"
                        label="Last Name"
                        value={this.props.contact.last_name}
                        onChange={this.props.onChange}
                    />

                    <TextInput
                        name="email"
                        label="Email"
                        value={this.props.contact.email}
                        onChange={this.props.onChange}
                    />

                    <TextInput
                        name="phone"
                        label="Phone"
                        value={this.props.contact.phone}
                        onChange={this.props.onChange}
                    />
                    {dropDown}
                    <input
                        type="submit"
                        disabled={this.props.saving}
                        value={this.props.saving ? 'Saving...' : 'Save'}
                        className="row waves-effect waves-light btn-small"
                        onClick={this.props.onSave}/>

                    <Link to="/" className="waves-effect waves-light btn-small red btn-flat white-text right">
                        Cancel
                    </Link>
                </form>
            </div>
        );
    }
}

ContactForm.propTypes = {
    contact: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    saving: PropTypes.bool,
    edit: PropTypes.bool
};
export default ContactForm;