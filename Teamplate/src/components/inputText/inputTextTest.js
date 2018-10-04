import React, { Component } from 'react';

import { StyleSheet, View, Image, TextInput } from 'react-native';
import { Resources } from '../../configs/app-config';


export default class ExtInputTextTest extends Component {

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.SectionStyle}>

                    <Image source={Resources.ic_back_black} style={styles.ImageStyle} />

                    <TextInput
                        style={{ flex: 1 }}
                        placeholder="Enter Your Email Here"
                        underlineColorAndroid="transparent"
                    />
                    <Image source={Resources.ic_back_black} style={styles.ImageStyle} />

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