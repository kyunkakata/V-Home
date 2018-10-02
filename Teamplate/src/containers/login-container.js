import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, AsyncStorage, Alert, View, TextInput, TouchableHighlight } from 'react-native';
import { Container, Form, Input, Item, Button, Label } from 'native-base';
import ExtContainer from '../components/containers/base-container/ext-container';
import { SIGN_IN_REQUEST } from '../actions/action-type';
import Loading from '../components/loadings/loading';

import { GET_DATA_REQUEST } from '../actions/action-type';

class LoginContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: 'anhht9x@gmail.com',
            pass: '12345678',
            typeText: 'please enter your text',
            isLoading: false,
        };

    }

    loginUser = (email, pass) => {
        this.setState({ isLoading: true });
        const params = {
            email: email,
            pass: pass
        }
        this.props.dispatch({
            type: SIGN_IN_REQUEST, payload: params
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ isLoading: false });
        this.props.navigation.navigate('HomeContainer');
    }

    onPressRegister = () => {
        this.props.navigation.push('RegisterContainer');
    }

    onPressForgot = () => {
        this.props.navigation.push('ForgotContainer');
    }

    render() {
        return (
            this.state.isLoading ?
                <Loading /> :
                < ExtContainer >
                    <Form style={style.container}>
                        <Item floatingLabel>
                            <Label>SĐT</Label>
                            <Input autoCorrect={false} autoCapitalize="none"
                                onChangeText={(email) => this.setState({ email })}
                            >
                            </Input>
                        </Item>
                        <Item floatingLabel>
                            <Label>Mật khẩu</Label>
                            <Input autoCorrect={false} secureTextEntry={true} autoCapitalize="none"
                                onChangeText={(pass) => this.setState({ pass })}
                            >
                            </Input>
                        </Item>
                        <Item>
                            <Button style={style.button}
                                onPress={() => this.loginUser(this.state.email, this.state.pass)}
                            >
                                <Text style={style.text}>Đăng Nhập</Text>
                            </Button>
                        </Item>
                        <TouchableHighlight onPress={this.onPressRegister} >
                            <Text  >Bạn chưa có tài khoản?Đăng ký</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this.onPressForgot}  >
                            <Text >Quên mật khẩu</Text>
                        </TouchableHighlight>
                    </Form>
                </ExtContainer >
        )
    }
}

const style = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center'
        },
        button: {
            alignItems: 'stretch',
            width: '40%',
            justifyContent: 'center',
        },
        text: {
            color: 'white'
        },

    }
);

const mapStateToProps = state => {
    return {
        accountReducer: state.accountReducer,
        counter: state.counter
    };
};

export default connect(mapStateToProps)(LoginContainer); 