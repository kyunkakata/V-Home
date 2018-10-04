import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import ExtContainer from '../components/containers/base-container/ext-container';
import { ACTION_DANG_VIEC, ACTION_TIM_VIEC } from '../actions/action-type';

// configs
import { Resources, InputTextUtils, ButtonUtils } from '../configs/app-config';
import InputText from '../components/inputText/inputText';
import Extbutton from '../components/buttons/Extbutton';

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
                    <Extbutton button={ButtonUtils.buttonClick('Đăng việc', this.onpressDangViec, 'black', 'orange', 'white')} />
                    <View style={style.lineColumn} />
                    <Extbutton button={ButtonUtils.buttonClick('Tìm việc', this.onpressTimViec, 'black', 'orange', 'white')} />
                </View>
                <View style={style.footer}>
                    <Text style={{ color: 'orange' }}>V-Home V1.0</Text>
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
    lineRow: {
        borderBottomColor: 'orange',
        borderBottomWidth: 1,
        width: '80%'
    },
    lineColumn: {
        borderColor: 'orange',
        borderWidth: 0.5,
        width: '0.05%',
        height: '5%'
    },
    footer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '5%',

    }
});




const mapStateToProps = state => {
    return {
        languageReducer: state.languageReducer,
    };
};

export default connect(mapStateToProps)(SplashContainer); 