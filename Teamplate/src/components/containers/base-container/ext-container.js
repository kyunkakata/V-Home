import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Container } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import DropdownAlert from 'react-native-dropdownalert';
import I18n from 'react-native-i18n';
import PropTypes from 'prop-types';
import Modal from 'react-native-modalbox';

// configs
import { Utils, Dimens, AppStyles } from '../../../configs/app-config';

// component
import Dialog from '../../dialogs/dialog';
import ConfirmDialog from '../../dialogs/confirm-dialog';
import ProgressDialog from '../../dialogs/progress-dialog';

class ExtContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // dialog customize
            dialogVisible: false,
            dialogView: null,
            // dialog loading
            isVisibleLoading: false,
            // dialog confirm
            isVisibleConfirm: false,
            messageConfirm: '',
            onClickPositive: () => { },
            onClickNegative: () => { },
            // dialog show message
            isVisibleMessage: false,
            message: '',
            onClickOk: () => { },
            // selected dialog
            selectOrigins: [],
            selectItems: [],
            selectRenderItem: (itemInfo) => { },
            selectIsFilter: false,
            selectCompareItem: (itemInfo, text) => { }
        };
    }

    // DIALOG
    /**
     * show dialog
     * @param {*} dialogVisible
     * @param {*} view
     */
    onShowDialog = (dialogVisible, view) => {
        this.setState({ dialogVisible: dialogVisible, dialogView: view });
    };

    /**
     * show loading
     * @param {*} isLoading
     */
    onShowLoading = isLoading => {
        this.setState({ isVisibleLoading: isLoading });
    };

    /**
     * show message
     * @param message
     * @param onClickOk
     */
    onShowMessage = (message, onClickOk) => {
        this.setState({ isVisibleMessage: true, message: message, onClickOk: onClickOk === null ? () => { } : onClickOk });
    };

    /**
     * show message
     * @param {*} messageConfirm
     * @param {*} onClickPositive
     * @param {*} onClickNegative
     */
    onShowMessageConfirm = (messageConfirm, onClickPositive, onClickNegative) => {
        this.setState({
            isVisibleConfirm: true,
            messageConfirm: messageConfirm,
            onClickPositive: onClickPositive === null ? () => { } : onClickPositive,
            onClickNegative: onClickNegative === null ? () => { } : onClickNegative
        });
    };

    // TOAST
    /**
     * show error message
     * @param {*} title
     * @param {*} message
     */
    onShowDropdownAlertError = (title, message) => {
        this.dropdownAlert.alertWithType('error', title, message);
    };

    /**
     * show info message
     * @param {*} title
     * @param {*} message
     */
    onShowDropdownAlertInfo = (title, message) => {
        this.dropdownAlert.alertWithType('info', title, message);
    };

    /**
     * show warn message
     * @param {*} title
     * @param {*} message
     */
    onShowDropdownAlertWarn = (title, message) => {
        this.dropdownAlert.alertWithType('warn', title, message);
    };

    /**
     * show success message
     * @param {*} title
     * @param {*} message
     */
    onShowDropdownAlertSuccess = (title, message) => {
        this.dropdownAlert.alertWithType('success', title, message);
    };

    // SELECTED DIALOG
    // SELECTED
    /**
     * open selected dialog
     * @param {*} items
     * @param {*} renderItem: (itemInfo)=>{}    
     * @param {*} isFilter
     * @param {*} compareItem: (itemInfo, text)=> {}
     */
    onOpenSelectedDialog = (items, renderItem, isFilter = false, compareItem = null) => {
        this.setState({
            selectOrigins: Utils.isNullOrEmptyItems(items) ? [] : items,
            selectItems: Utils.isNullOrEmptyItems(items) ? [] : items,
            selectRenderItem: renderItem,
            selectIsFilter: isFilter,
            selectCompareItem: compareItem,
        });
        this.refModal.open();
    };

    /**
     * close selected dialog
     */
    onCloseSelectedDialog = () => {
        this.refModal.close();
    };

    render() {
        return (
            <Container>
                <View style={[styles.container, this.props.style]}>
                    {/* children view */}
                    {this.props.children}
                </View>

                {/* dialog customize view */}
                <Dialog visible={this.state.dialogVisible} onTouchOutside={() => this.setState({ dialogVisible: false })}>
                    <View>{this.state.dialogView}</View>
                </Dialog>

                {/* confirm dialog */}
                <ConfirmDialog
                    title={I18n.t('app_name')}
                    message={this.state.messageConfirm}
                    visible={this.state.isVisibleConfirm}
                    positiveButton={{
                        title: I18n.t('yes'),
                        onPress: () => {
                            this.setState({ isVisibleConfirm: false });
                            this.state.onClickPositive();
                        },
                        // textColor: Colors.COLOR_YELLOW
                    }}
                    negativeButton={{
                        title: I18n.t('cancel'),
                        onPress: () => {
                            this.setState({ isVisibleConfirm: false });
                            this.state.onClickNegative();
                        },
                        // textColor: Colors.COLOR_GRAY
                    }} />

                {/* message box */}
                <ConfirmDialog
                    title={I18n.t('app_name')}
                    message={this.state.message}
                    visible={this.state.isVisibleMessage}
                    positiveButton={{
                        title: I18n.t('ok'),
                        onPress: () => {
                            this.setState({ isVisibleMessage: false });
                            this.state.onClickOk();
                        },
                        // textColor: Colors.COLOR_YELLOW
                    }} />

                {/* loading dialog */}
                <ProgressDialog
                    visible={this.state.isVisibleLoading}
                    onTouchOutside={() => this.setState({ isVisibleLoading: false })}
                    message={I18n.t('loading')} activityIndicatorSize='large'
                // activityIndicatorColor={Colors.COLOR_YELLOW}
                />

                {/* dialog select value */}
                <Modal ref={(ref) => this.refModal = ref}
                    style={[styles.modal, { height: Utils.isNullOrUndefined(this.props.selectHeight) ? '40%' : this.props.selectHeight }]}
                    position={'bottom'} swipeToClose={false}>
                    {/* header */}
                    <View style={[AppStyles.containerRow, AppStyles.paddingContent, this.props.selectStyle]}>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity activeOpacity={Dimens.OPACITY} onPress={this.onCloseSelectedDialog}>
                                <Text style={[AppStyles.fontContent, AppStyles.fontColorGray, this.props.selectCancelStyle]}>{I18n.t('cancel')}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 3 }}>
                            <Text numberOfLines={1} style={[AppStyles.fontTitle, this.props.selectTitleStyle, { textAlign: 'center' }]}>{I18n.t('select_value')}</Text>
                        </View>
                        <View style={{ flex: 1 }} />
                    </View>

                    {/* data */}
                    <FlatList data={this.state.selectItems}
                        renderItem={this.state.selectRenderItem}
                        keyExtractor={(item, index) => `${index}`}
                        ItemSeparatorComponent={() => <View style={[styles.itemSeparator]} />} />
                </Modal>

                {/* alert message */}
                <DropdownAlert ref={ref => (this.dropdownAlert = ref)} updateStatusBar={false} translucent={true} />
            </Container>
        );
    }
}

const styles = EStyleSheet.create({
    // $outline: 1,
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: 'white'
    },
    modal: {
        width: '100%'
    },
    itemSeparator: {
        width: '100%',
        height: 1,
        backgroundColor: '$color_gray'
    }
});

ExtContainer.propTypes = {
    // container
    style: PropTypes.any,
    // selected dialog
    selectStyle: PropTypes.any,
    selectTitleStyle: PropTypes.any,
    selectCancelStyle: PropTypes.any,
    selectHeight: PropTypes.string
};

ExtContainer.defaultProps = {
    // container
    style: null,
    // selected dialog
    selectStyle: null,
    selectTitleStyle: null,
    selectCancelStyle: null,
    selectHeight: null, // 40%, 50%, ...
};

export default ExtContainer;