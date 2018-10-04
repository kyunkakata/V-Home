import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, TouchableHighlight, TextInput } from 'react-native';
import { connect } from 'react-redux';
import ExtContainer from '../components/containers/base-container/ext-container';
import { ACTION_DANG_VIEC, ACTION_TIM_VIEC } from '../actions/action-type';
// configs
import { AppStyles, Resources, Consts, Colors, Dimens, HeaderUtils, InputTextUtils } from '../configs/app-config';
import ExtInputTextTest from '../components/inputText/inputTextTest';
class SplashContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        };
    }

    onpressDangViec = () => {
        this.props.navigation.navigate('LoginContainer', { key: ACTION_DANG_VIEC });
    }

    onpressTimViec = () => {
        this.props.navigation.navigate('LoginContainer', { key: ACTION_TIM_VIEC });
    }


    render() {
        return (
            <ExtContainer >

                <View style={style.container}>
                    <View>
                        <Image style={style.icon}
                            source={Resources.splashscreen}
                        />
                        <Text>V-Home</Text>
                    </View>
                    <View style={style.lineRow}
                    />
                    <View style={style.lineColumn} />
                    <TouchableHighlight style={style.textBorder} onPress={this.onpressDangViec} >
                        <Text style={style.text}>Dang Viec</Text>
                    </TouchableHighlight>
                    <View style={style.lineColumn} />
                    <TouchableHighlight style={style.textBorder} onPress={this.onpressTimViec}>
                        <Text style={style.text}>Tim Viec</Text>
                    </TouchableHighlight>
                </View>
                <View style={style.footer}>
                    <Text >V-home V1.0</Text>
                </View>
            </ ExtContainer >
        )
    }
}

const style = StyleSheet.create({
    icon: {
        height: 50,
        width: 50
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBorder: {
        width: '30%',
        borderRadius: 20,
        padding: 5,
        borderWidth: 1,
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        color: 'blue',
        borderColor: 'black',
    },
    lineRow: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '80%'
    },
    lineColumn: {
        color: 'black',
        borderWidth: 0.5,
        width: '0.05%',
        height: '5%'
    },
    footer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});




const mapStateToProps = state => {
    return {
        languageReducer: state.languageReducer,
    };
};

export default connect(mapStateToProps)(SplashContainer); 