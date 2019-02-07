import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './index.scss';

/**
 * Functional component of the loader.
 * @param {object} param0 - props object for the component.
 */
export const FormSubmitButton = ({ name }) => (
    <div className="form-group row">
        <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">
                {name}
            </button>
        </div>
    </div>
);

FormSubmitButton.propTypes = {
    name: PropTypes.string.isRequired,
};

FormSubmitButton.defaultProps = {};

export default FormSubmitButton;