import React from 'react';
import PropTypes from 'prop-types';

export default class Dummy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <p className="card-text">{this.props.data1}</p>;
    }
}

Dummy.propTypes = {
    data1: PropTypes.number,
};

Dummy.defaultProps = {
    data1: 10,
};
