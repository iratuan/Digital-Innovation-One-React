import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {Text} from 'react-native';
import Catalog from '../pages/Catalog';
import Cart from '../pages/Cart';
import Header from '../components/Header';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: true,
                    cardStyle: {backgroundColor: '#313746'},
                }}
                initialRouteName="Catalog">
                <Stack.Screen
                    name="Catalog"
                    component={Catalog}
                    options={{
                        headerShown: true,
                        headerTransparent: true,
                        headerTitle: () => <Header />,
                    }}
                />
                <Stack.Screen
                    name="Cart"
                    component={Cart}
                    options={{
                        headerShown: true,
                        headerTransparent: true,
                        headerTitle: () => <Header />,
                        headerBackTitleVisible: false,
                        headerLeftContainerStyle: {
                            marginLeft: 20,
                        },
                        headerBackImage: () => (
                            <FeatherIcon
                                size={25}
                                name="chevron-left"
                                color="#d1d7d9"
                            />
                        ),
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
