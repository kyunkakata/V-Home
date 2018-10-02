import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

// configs
import { Colors } from '../../configs/app-config';

class Column extends Component {
    render() {
        return <View style={[styles.column, { width: this.props.width, height: this.props.height, backgroundColor: this.props.backgroundColor }, this.props.style]} />
    }
}

const styles = EStyleSheet.create({
    // $outline: 1,
    column: {}
});

Column.propTypes = {
    style: PropTypes.any,
    width: PropTypes.number,
    height: PropTypes.any,
    backgroundColor: PropTypes.string
};

Column.defaultProps = {
    style: null,
    width: 1,
    height: '100%',
    backgroundColor: Colors.COLOR_LIGHT_GRAY
};

export default Column;
