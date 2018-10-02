import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

class Header extends Component {
    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <View style={[styles.left, this.props.styleLeft]}>{this.props.headerLeft}</View>
                <View style={[styles.center, , this.props.styleCenter]}>{this.props.headerCenter}</View>
                <View style={[styles.right, this.props.styleRight]}>{this.props.headerRight}</View>
            </View>
        )
    }
}

const styles = EStyleSheet.create({
    // $outline: 1,
    container: {
        width: '100%',
        flexDirection: 'row',
        padding: '$padding_small',
        justifyContent: 'center',
        alignItems: 'center'
    },
    left: {
        flex: Platform.OS === 'android' ? 0 : 1.5,
        flexDirection: 'row'
    },
    center: {
        flex: Platform.OS === 'android' ? 1 : 3.5
    },
    right: {
        flex: Platform.OS === 'android' ? 0 : 1.5,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});

Header.propTypes = {
    headerLeft: PropTypes.any,
    headerCenter: PropTypes.any,
    headerRight: PropTypes.any,
    style: PropTypes.any,
    styleLeft: PropTypes.any,
    styleCenter: PropTypes.any,
    styleRight: PropTypes.any
}

Header.defaultProps = {
    headerLeft: null,
    headerCenter: null,
    headerRight: null,
    style: null,
    styleLeft: null,
    styleCenter: null,
    styleRight: null
}

export default Header;