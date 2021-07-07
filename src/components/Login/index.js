import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { REGISTER } from '../../constants/routeName';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/input';
import styles from './styles';

const LoginComponent = () => {
    const {navigate} = useNavigation();
    return (
        <Container>
            <Image style={styles.logoImage} source={require('../../assets/images/logo.jpeg')} />
            <View>
                <Text style={styles.title}>Welcome to My Contacts</Text>
                <Text style={styles.subTitle}>Please login here</Text>
                <View style={styles.form}>
                    <Input 
                        label="Username"
                        style={{}}
                        placeholder="Enter Username"
                        // onChangeText={(text) => setUsername(text)}
                        // value={username}
                        // icon={<Text>Hide</Text>}
                        // iconPosition='right'
                        // error='This is required field'
                    />
                    <Input 
                        label="Password"
                        style={{}}
                        placeholder="Enter Password"
                        secureTextEntry={true}
                        // onChangeText={(text) => setPassword(text)}
                        // value={password}
                        icon={<Text>Show</Text>}
                        iconPosition='right'
                    />
                    <CustomButton title="Submit" disabled={false} primary loading={false} onPress={() => console.log("Clicked")} />
                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Need a new Account?</Text>
                        <TouchableOpacity onPress={() => navigate(REGISTER) }>
                            <Text style={styles.linkBtn}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Container>
    );
}

export default LoginComponent;