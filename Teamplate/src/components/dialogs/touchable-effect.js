import React, { Component } from 'react';
import { Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

// configs
import { Dimens } from '../../configs/app-config';

// const
const DELAY_USER_ACTION = 1000;

class TouchableEffect extends Component {
    constructor(props) {
        super(props);
        this.userAction = false;
        this.timeoutId = -1;
    }

    componentWillUnmount() {
        if (this.timeoutId != -1) { clearTimeout(this.timeoutId); }
    }

    onPress = () => {
        const { delay, onPress } = this.props;

        if (!this.userAction) {
            this.userAction = true;

            // clear timeout
            if (this.timeoutId != -1) { clearTimeout(this.timeoutId); }

            // set timeout
            this.timeoutId = setTimeout(() => { this.userAction = false; }, delay ? delay : DELAY_USER_ACTION);

            // on press
            if (onPress) { onPress(); }
        }
    }

    render() {
        return <TouchableOpacity {...this.props} activeOpacity={Dimens.OPACITY} onPress={() => this.onPress()} />
    }
}

export default TouchableEffect;
