import React, { Component } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import I18n from 'react-native-i18n';

// configs
import { Colors, AppStyles } from '../../configs/app-config';

class Loading extends Component {
    render() {
        return <View style={styles.loading}>
            <ActivityIndicator animating size='large' color={this.props.activityIndicatorColor} />
            <Text style={[AppStyles.fontContent, AppStyles.marginLayoutLeft, AppStyles.fontColorGray]}>{I18n.t('loading')}</Text>
        </View>
    }
}

const styles = EStyleSheet.create({
    // $outline: 1,    
    loading: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '$padding_content'
    }
});

Loading.propTypes = {
    style: PropTypes.any,
    activityIndicatorColor: PropTypes.string
};

Loading.defaultProps = {
    style: null,
    activityIndicatorColor: Colors.COLOR_BLUE
};

export default Loading;
