import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image
} from "react-native";

import { Resources } from '../configs/app-config';

//library imports 
import { Container, Content, Icon, Header, Body, Label } from 'native-base'
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'

//custom files 
import MessageContainer from '../containers/message-container'
import HistoryContainer from "../containers/history-container";
import PointContainer from "../containers/point-container";
import PolicyContainer from "../containers/policy-container";
import HotlineContainer from "../containers/hotline-container";
import LanguageContainer from "../containers/language-container";
import IntroduceContainer from "../containers/introduce-container";


export default class App extends Component {

    render() {
        return (
            <MyApp />
        )
    }
}

const CustomDrawerContentComponent = (props) => (

    <Container>
        <Header style={styles.drawerHeader}>
            <Body style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    style={styles.drawerImage}
                    source={Resources.ic_back_black} />
                <Label>Tuấn Anh</Label>
                <Label>mã giới thiệu : 12345678</Label>
            </Body>
        </Header>
        <Content>
            <DrawerItems {...props} />
        </Content>

    </Container>

);

const MyApp = DrawerNavigator({

    // For each screen that you can navigate to, create a new entry like this:
    Message: {
        screen: MessageContainer,
    },
    History: {
        screen: HistoryContainer
    },
    Point: {
        screen: PointContainer
    },
    Policy: {
        screen: PolicyContainer
    },
    introduce: {
        screen: IntroduceContainer
    },
    hotline: {
        screen: HotlineContainer
    },
    languge: {
        screen: LanguageContainer
    }

},
    {
        initialRouteName: 'Message',
        drawerPosition: 'left',
        contentComponent: CustomDrawerContentComponent,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle'
    });


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    drawerHeader: {
        height: 200,
        backgroundColor: 'white'
    },
    drawerImage: {
        height: 150,
        width: 150,
        borderRadius: 75
    }

})