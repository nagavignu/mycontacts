import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Text } from 'react-native';
import { CONTACT_DETAIL, CONTACT_LIST, CREATE_CONTACT, SETTINGS } from '../constants/routeName';
import Contacts from '../screens/Contacts';
import ContactDetail from '../screens/ContactDetail';
import CreateContact from '../screens/CreateContact';
import Settings from '../screens/Settings';


const HomeNavigator = () => {
    const HomeStack = createStackNavigator();

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name={CONTACT_LIST} component={Contacts}></HomeStack.Screen>
            <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail}></HomeStack.Screen>
            <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact}></HomeStack.Screen>
            <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
        </HomeStack.Navigator>
    );
}

export default HomeNavigator;