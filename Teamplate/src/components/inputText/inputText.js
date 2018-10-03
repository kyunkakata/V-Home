import React, { Component } from 'react';

import { StyleSheet, View, TextInput, Image } from 'react-native';

export default class ExtInputText extends Component {

    constructor(props) {
        super(props);

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.SectionStyle}>
                    <View style={styles.ImageStyle} >{this.props.imageLeft}</View>
                    <View style={{ flex: 1 }} >{this.props.Title}</View>
                    <View style={styles.ImageStyle} >{this.props.headerLeft}</View>
                </View>

            </View>
        );
    }
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