import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, Platform } from 'react-native';
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
export const headerTitle = (title) => {
    return <Text numberOfLines={1} ellipsizeMode='tail'
        style={[AppStyles.fontTitle, AppStyles.fontColorWhite, AppStyles.paddingContent,
        { textAlign: Platform.OS === 'android' ? 'left' : 'center' }]}>
        {title}
    </Text>
}; 
