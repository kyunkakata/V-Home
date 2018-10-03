import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import { Icon } from 'native-base';
import MapView from "react-native-maps";
import image from '../../images/flag-pink.png';
import ExtContainer from '../components/containers/base-container/ext-container';
import CustomHeader from '../components/headerNavigation/header';

class MapContainer extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Thông báo",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />
    })

    onPressShowMenu() {
        this.props.navigation.navigate('DrawerOpen');
    }

    render() {

        const coordinates = [];

        coordinates.push({
            key: 0,
            location: {
                longitude: -70.23,
                latitude: -33.23
            }
        });

        for (let i = 1; i < 100; i++) {
            const location = {
                longitude: coordinates[i - 1].location.longitude + (Math.random() * (i % 2 === 0 ? -1 : 1)),
                latitude: coordinates[i - 1].location.latitude + (Math.random() * (i % 2 === 0 ? -1 : 1)),
            };
            coordinates.push({ key: i, location });
        }

        return (
            <ExtContainer>
                <CustomHeader drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />
                <MapView
                    renderMarker={renderMarker}
                    initialRegion={{
                        longitude: -70.23,
                        latitude: -33.23,
                        latitudeDelta: 9.22,
                        longitudeDelta: 4.21,
                    }}
                    style={styles.map}>

                    {coordinates.map(({ key, location }) => <MapView.Marker key={key} image={image} coordinate={location} />)}

                </MapView>
            </ExtContainer>
        )
    }
}

const styles = StyleSheet.create(
    {
        map: {
            flex: 1,
        }
    }
)

export default MapContainer
function renderMarker({ location }) {
    return (
        <MapView.Marker
            image={image}
            coordinate={location}
        >
            <MapView.Callout>
                <Text>BiG BiG Callout</Text>
            </MapView.Callout>
        </MapView.Marker>
    );
}
