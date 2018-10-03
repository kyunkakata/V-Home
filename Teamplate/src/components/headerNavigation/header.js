import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { Header, Body, Title, Content, Left, Icon, Right } from 'native-base'

class CustomHeader extends Component {
    render() {
        return (
            <Header>
                <Left><Icon name="ios-menu" onPress={() => this.props.drawerOpen()} /></Left>
                <Body>

                </Body>
                <Right ><Icon name="ios-menu" onPress={() => this.props.drawerOpen()} /></Right>
            </Header>
        );
    }
}
export default CustomHeader;