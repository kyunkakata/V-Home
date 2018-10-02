import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator, Text } from 'react-native';
import Dialog from './dialog';

// configs
import { AppStyles } from '../../configs/app-config';

class ProgressDialog extends Component {
    render() {
        const { message, messageStyle, activityIndicatorColor, activityIndicatorSize, activityIndicatorStyle } = this.props;

        return <Dialog {...this.props}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <ActivityIndicator animating={true} color={activityIndicatorColor}
                    size={activityIndicatorSize} style={activityIndicatorStyle} />
                <Text style={[AppStyles.marginLayoutLeft, AppStyles.fontTitle, { color: '#00000089' }, messageStyle]}>{message}</Text>
            </View>
        </Dialog>
    }
}

ProgressDialog.propTypes = {
    ...Dialog.propTypes,
    message: PropTypes.string.isRequired
};

delete ProgressDialog.propTypes.children;

export default ProgressDialog;
