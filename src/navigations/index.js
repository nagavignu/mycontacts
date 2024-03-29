import React, { useContext } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { Text } from 'react-native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/Provider';

const AppNavContainer = () => {
    const {authState: {isLoggedIn}} = useContext(GlobalContext);

    return (
        <NavigationContainer>
            {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
};

export default AppNavContainer;