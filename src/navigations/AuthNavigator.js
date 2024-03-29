import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { LOGIN, REGISTER } from '../constants/routeName';
import Login from '../screens/Login';
import Register from '../screens/Register';


const AuthNavigator = () => {
    const AuthStack = createStackNavigator();

    return (
        <AuthStack.Navigator screenOptions={{headerShown: false}}>
            <AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
            <AuthStack.Screen name={REGISTER} component={Register}></AuthStack.Screen>
        </AuthStack.Navigator>
    );
}

export default AuthNavigator;