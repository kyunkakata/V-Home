
import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class DataItem extends Component {
    render() {
        const { item } = this.props;
        return (
            <View style={{ padding: 20, borderWidth: 1 }}>
                <Text>{item.title}</Text>
            </View>
        );
    }
}