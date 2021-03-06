import React, { Component } from 'react';

import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

export default class ExtInputText extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.SectionStyle}>
                    <View style={styles.ImageStyle} >{this.props.imageLeft}</View>
                    <View style={{ flex: 1 }} >{this.props.inputText}</View>
                    <View style={styles.ImageStyle} >{this.props.imageRight}</View>
                </View>
            </View>
        );
    }
}

ExtInputText.propTypes = {
    imageLeft: PropTypes.any,
    inputText: PropTypes.any,
    imageRight: PropTypes.any
}

ExtInputText.defaultProps = {
    imageLeft: null,
    inputText: null,
    imageRight: null
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },

    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: '#000',
        height: 40,
        borderRadius: 20,
        margin: 10
    },

    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center'
    },

});