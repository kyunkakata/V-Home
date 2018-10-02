import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Headers from '../components/headers/header';
import { Resources, HeaderUtils } from '../configs/app-config';
import { Text } from 'react-native';
import { Container, Form, Input, Item, Button, Label, CheckBox, ListItem, Body, Image } from 'native-base';
import ExtContainer from '../components/containers/base-container/ext-container';

class ForgotContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };

    }

    onPressBack = () => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <ExtContainer>
                <Headers headerLeft={HeaderUtils.headerIcon(Resources.ic_back_black, this.onPressBack)} />
                <Item floatingLabel>
                    <Label> Nhập số đt</Label>
                    <Input autoCorrect={false} secureTextEntry={true} autoCapitalize="none"
                        onChangeText={(pass) => this.setState({ pass })}
                    >
                    </Input>
                </Item>
                <Button onPress={this.onPressBack}>
                    <Label>Lấy lại mật khẩu</Label>
                </Button>
                <Label>Bạn chưa nhận được mật khẩu</Label>
                <Label>Gửi lại mật khẩu</Label>
            </ExtContainer >
        )
    }
}


const mapStateToProps = state => {
    return {
        accountReducer: state.accountReducer,
        counter: state.counter
    };
};

export default connect(mapStateToProps)(ForgotContainer); 