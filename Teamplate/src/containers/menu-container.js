import {
    StyleSheet,
    Image
} from "react-native";
import { Container, Content, Header, Body } from 'native-base';
import { DrawerItems } from 'react-navigation';
import { Resources } from '../configs/app-config';

export const CustomDrawerContentComponent = (props) => (

    <Container>
        <Header style={styles.drawerHeader}>
            <Body>
                <Image
                    style={styles.drawerImage}
                    source={Resources.ic_back_black} />
            </Body>
        </Header>
        <Content>
            <DrawerItems {...props} />
        </Content>

    </Container>

);

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