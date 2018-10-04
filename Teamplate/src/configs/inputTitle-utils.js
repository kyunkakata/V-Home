import React, { Component } from 'react';
import { Image, TextInput } from 'react-native';
import { AppStyles, Resources, Consts, Colors, Dimens, HeaderUtils, InputTextUtils } from '../configs/app-config';


/**
 * @param {*} icon
 * @param {*} onPress
 */
export const inputText_Icon = (icon, onPress) => {
    return <Image source={Resources.ic_back_white} onPress={onPress} >
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
