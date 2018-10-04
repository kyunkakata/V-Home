import React, { Component } from 'react';

import { View } from 'react-native';
import PropTypes from 'prop-types';

export default class ExtButton extends Component {

    render() {
        return (
            this.props.button
        );
    }
}
ExtButton.propTypes = {
    button: PropTypes.any
}

ExtButton.defaultProps = {
    button: null
}

