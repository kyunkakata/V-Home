import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Resources } from '../configs/app-config';

import { Icon } from 'native-base';

class SignupContainer extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Đăng xuất",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />
    })

    render() {
        return (
            <View></View>
        )
    }
}

const styles = StyleSheet.create(
    {
        icon: {
            width: 24,
            height: 24,
        }
    }
)

export default SignupContainer
