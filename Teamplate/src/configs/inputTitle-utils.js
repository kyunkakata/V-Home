import React from 'react';
import { Image, TextInput } from 'react-native';
/**
 * @param {*} icon
 * @param {*} onPress
 */
export const inputText_Icon = (icon, onPress) => {
    return <Image source={icon} onPress={onPress} >
    </Image >
};

/**
 * @param {*} title 
 * @param {*} placeholder
 * @param {*} underlineColorAndroid
 */
export const inputText_Text = (title, placeholder, underlineColorAndroid) => {
    return <TextInput placeholder={placeholder} underlineColorAndroid={underlineColorAndroid} >
        {title}
    </TextInput >
}; 
