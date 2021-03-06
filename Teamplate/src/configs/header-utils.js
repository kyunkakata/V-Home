import React, { Component } from 'react';
import { View, Image, TouchableOpacity, TextInput, Platform } from 'react-native';
import { Input } from 'native-base';

// configs
import AppStyles from './app-styles';
import * as Dimens from './dimens';

/**
 * @param {*} icon
 * @param {*} onClick
 */
export const headerIcon = (icon, onClick) => {
    return <TouchableOpacity activeOpacity={Dimens.OPACITY} onPress={onClick} style={[AppStyles.paddingContent]}>
        <Image source={icon} style={AppStyles.iconAction} resizeMode='contain' />
    </TouchableOpacity>
};

/**
 * @param {*} title 
 */
export const inputText = (title, placeholder) => {
    return <TextInput placeholder={placeholder} underlineColorAndroid="transparent">
        {title}
    </TextInput>
}; 
