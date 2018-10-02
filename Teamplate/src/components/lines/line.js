import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { Colors } from '../../configs/app-config';

class Line extends Component {
    render() {
        return <View style={[{ width: '100%', height: this.props.height, backgroundColor: this.props.backgroundColor }, this.props.style]} />;
    }
}

Line.propTypes = {
    style: PropTypes.any,
    height: PropTypes.number,
    backgroundColor: PropTypes.string
};

Line.defaultProps = {
    style: null,
    height: 1,
    backgroundColor: Colors.COLOR_LIGHT_GRAY
};

export default Line;
