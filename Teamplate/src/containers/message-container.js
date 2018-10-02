import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Resources } from '../configs/app-config';
import { Icon } from 'native-base';
import { MapView } from "expo";

class MessageContainer extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Thông báo",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />
    })

    render() {
        return (
            <MapView
                style={{
                    flex: 1
                }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
            />
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

export default MessageContainer
