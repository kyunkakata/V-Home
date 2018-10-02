import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import PropTypes from 'prop-types';

const { OS } = Platform;

// components
import Dialog from './dialog';
import TouchableEffect from './touchable-effect';

// configs
import { AppStyles } from '../../configs/app-config';

class ConfirmDialog extends Component {
    renderMessage = () => {
        const { message, messageStyle } = this.props;

        const textAlign = OS === 'ios' ? 'center' : 'left';

        if (message) {
            return <Text style={[AppStyles.fontContent, { textAlign }, messageStyle]}>{message}</Text>;
        }

        return null;
    }

    renderButton = (button, positive) => {
        if (button) {
            const { titleStyle, style, onPress } = button;

            const title = OS === 'ios' ? button.title : button.title.toUpperCase();

            const containerStyle = OS === 'ios' ? { justifyContent: 'center' } : {};

            const textStyle = {
                minWidth: 64, paddingTop: 8, paddingBottom: 8, paddingLeft: 10, paddingRight: 10,
                textAlign: 'center', textAlignVertical: 'center',
                color: !button.textColor ? '#0000FF99' : button.textColor,
                fontWeight: OS === 'android' || positive ? 'bold' : 'normal',
            };

            const touchableStyle = OS === 'ios' ? { flex: 1 } : {};

            return <TouchableEffect onPress={onPress} style={touchableStyle}>
                <View style={[containerStyle, style]}>
                    <Text style={[textStyle, titleStyle]}>{title}</Text>
                </View>
            </TouchableEffect>
        }

        return null;
    }

    renderButtons = () => {
        const { negativeButton, positiveButton } = this.props;

        const containerStyle = OS === 'ios' ? { flexDirection: 'row' } : { flexDirection: 'row', justifyContent: 'flex-end' };

        const dividerVertStyle = OS === 'ios' ? { width: negativeButton ? 1 : 0, backgroundColor: '#00000011' } : { width: 8 };

        const dividerHorizontalStyle = OS === 'ios' ? { height: 1, backgroundColor: '#00000011' } : { height: 0 };

        return (
            <View>
                <View style={dividerHorizontalStyle} />
                <View style={containerStyle}>
                    {this.renderButton(negativeButton, false)}
                    <View style={dividerVertStyle} />
                    {this.renderButton(positiveButton, true)}
                </View>
            </View>
        );
    }

    renderContent() {
        const { children } = this.props;

        if (children) { return children; }

        return this.renderMessage();
    }

    render() {
        return <Dialog {...this.props} buttons={this.renderButtons()}>
            {this.renderContent()}
        </Dialog>
    }
}

const buttonPropType = PropTypes.shape({
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    titleStyle: PropTypes.any,
    style: PropTypes.any,
    textColor: PropTypes.string
});

ConfirmDialog.propTypes = {
    ...Dialog.propTypes,
    message: PropTypes.string,
    messageStyle: PropTypes.any,
    negativeButton: buttonPropType,
    positiveButton: buttonPropType
};

export default ConfirmDialog;
