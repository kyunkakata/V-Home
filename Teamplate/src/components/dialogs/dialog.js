import React, { Component } from 'react';
import { Modal, View, TouchableWithoutFeedback, Text, Platform } from 'react-native';
import PropTypes from 'prop-types';
const { OS } = Platform;

// configs
import { AppStyles } from '../../configs/app-config';

class Dialog extends Component {
    renderContent = () => {
        const { children, contentStyle } = this.props;

        return <View style={[AppStyles.paddingLayoutLeft, AppStyles.paddingLayoutRight, { width: '100%' }, contentStyle]}>{children}</View>;
    }

    renderTitle = () => {
        const { title, titleStyle } = this.props;

        const textAlign = OS === 'ios' ? 'center' : 'left';

        if (title) {
            return <Text style={[AppStyles.fontTitle, AppStyles.marginLayout, { textAlign }, titleStyle]}>
                {title}
            </Text>
        }

        return null;
    }

    renderButtons = () => {
        const { buttons, buttonsStyle } = this.props;

        if (buttons) {
            return <View style={[AppStyles.paddingLayout, { width: '100%' }, buttonsStyle]}>{buttons}</View>;
        }

        return null;
    }

    renderOutsideTouchable(onTouch) {
        const view = <View style={{ flex: 1, width: '100%' }} />;

        if (!onTouch) return view;

        return <TouchableWithoutFeedback onPress={onTouch} style={{ flex: 1, width: '100%' }}>
            {view}
        </TouchableWithoutFeedback>
    }

    render() {
        const { dialogStyle, visible, animationType, onRequestClose, onShow,
            onOrientationChange, onTouchOutside, overlayStyle, supportedOrientations
        } = this.props;

        const dialogBackgroundColor = '#f2f2f2', dialogBorderRadius = 5;

        return <Modal
            animationType={animationType}
            transparent={true}
            visible={visible}
            onRequestClose={onRequestClose}
            onShow={onShow}
            onOrientationChange={onOrientationChange}
            supportedOrientations={supportedOrientations}>
            <View style={[AppStyles.paddingLayout, { flex: 1, backgroundColor: '#000000AA' }, overlayStyle]}>
                {this.renderOutsideTouchable(onTouchOutside)}
                <View style={[
                    {
                        backgroundColor: dialogBackgroundColor, width: '100%', shadowOpacity: 0.24,
                        borderRadius: dialogBorderRadius, elevation: 4, shadowOffset: { height: 4, width: 2 }
                    },
                    dialogStyle]}>
                    {this.renderTitle()}
                    {this.renderContent()}
                    {this.renderButtons()}
                </View>
                {this.renderOutsideTouchable(onTouchOutside)}
            </View>
        </Modal>
    }
}

Dialog.propTypes = {
    dialogStyle: PropTypes.any,
    contentStyle: PropTypes.any,
    buttonsStyle: PropTypes.any,
    overlayStyle: PropTypes.any,
    buttons: PropTypes.element,
    visible: PropTypes.bool,
    animationType: PropTypes.any,
    onRequestClose: PropTypes.func,
    onShow: PropTypes.func,
    onOrientationChange: PropTypes.any,
    onTouchOutside: PropTypes.func,
    supportedOrientations: PropTypes.any,
    title: PropTypes.string,
    titleStyle: PropTypes.any
};

Dialog.defaultProps = {
    visible: false,
    onRequestClose: () => null
};

export default Dialog;
