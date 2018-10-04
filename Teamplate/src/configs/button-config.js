import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

/**
 * @param {*} text
 * @param {*} onPress
 */
export const buttonClick = (text, onPress, colorText, borderColor, backgroundColor) => {
    return <TouchableHighlight style={{
        width: '30%',
        borderRadius: 20,
        padding: 5,
        borderWidth: 1,
        alignItems: 'center',
        borderColor: borderColor,
        backgroundColor: backgroundColor
    }} onPress={onPress}>
        <Text style={{ color: colorText }}>{text}</Text>
    </TouchableHighlight >
};

