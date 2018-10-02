import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Headers from '../components/headers/header';
import { Resources, HeaderUtils } from '../configs/app-config';
import { Text } from 'react-native';
import { Container, Form, Input, Item, Button, Label, CheckBox, ListItem, Body, Image } from 'native-base';
import ExtContainer from '../components/containers/base-container/ext-container';

class RegisterContainer extends Component {

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
                    <Label>Số đt</Label>
                    <Input autoCorrect={false} secureTextEntry={true} autoCapitalize="none"
                        onChangeText={(pass) => this.setState({ pass })}
                    >
                    </Input>
                </Item>
                <Item floatingLabel>
                    <Label>Họ và tên</Label>
                    <Input autoCorrect={false} secureTextEntry={true} autoCapitalize="none"
                        onChangeText={(pass) => this.setState({ pass })}
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
                <Item floatingLabel>
                    <Label>Nhập lại mật khẩu</Label>
                    <Input autoCorrect={false} secureTextEntry={true} autoCapitalize="none"
                        onChangeText={(pass) => this.setState({ pass })}
                    >
                    </Input>
                </Item>
                <Item floatingLabel>
                    <Label>Mã giới thiệu nếu có</Label>
                    <Input autoCorrect={false} secureTextEntry={true} autoCapitalize="none"
                        onChangeText={(pass) => this.setState({ pass })}
                    >
                    </Input>
                </Item>
                <ListItem>
                    <CheckBox checked={false}></CheckBox>
                    <Body>
                        <Text>Đồng ý với điều khoản sử dụng</Text>
                    </Body>
                </ListItem>
                <Button onPress={this.onPressBack}>
                    <Label>Đăng ký</Label>
                </Button>
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

export default connect(mapStateToProps)(RegisterContainer); 