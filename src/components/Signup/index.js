import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { LOGIN, REGISTER } from '../../constants/routeName';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/input';
import styles from './styles';

const RegisterComponent = ({form,errors,onChange,onSubmit}) => {
    const {navigate} = useNavigation();
    return (
        <Container>
            <Image style={styles.logoImage} source={require('../../assets/images/logo.jpeg')} />
            <View>
                <Text style={styles.title}>Welcome to My Contacts</Text>
                <Text style={styles.subTitle}>Create a free account here</Text>
                <View style={styles.form}>
                    <Input 
                        label="Username"
                        placeholder="Enter Username"
                        onChangeText={(value) => onChange({name: 'userName',value})}
                        value={form.userName}
                        error={errors.userName}
                        // icon={<Text>Hide</Text>}
                        // iconPosition='right'
                    />
                    <Input 
                        label="First Name"
                        placeholder="Enter First name"
                        onChangeText={(value) => onChange({name: 'firstName',value})}
                        value={form.firstName}
                        error={errors.firstName}
                        // value={username}
                        // icon={<Text>Hide</Text>}
                        // iconPosition='right'
                    />
                    <Input 
                        label="Last Name"
                        placeholder="Enter Last name"
                        onChangeText={(value) => onChange({name: 'lastName',value})}
                        value={form.lastName}
                        error={errors.lastName}
                        // icon={<Text>Hide</Text>}
                        // iconPosition='right'
                    />
                    <Input 
                        label="Email"
                        placeholder="Enter Email"
                        onChangeText={(value) => onChange({name: 'email',value})}
                        value={form.email}
                        error={errors.email}
                        // icon={<Text>Hide</Text>}
                        // iconPosition='right'
                        // error='This is required field'
                    />
                    <Input 
                        label="Password"
                        placeholder="Enter Password"
                        secureTextEntry={true}
                        onChangeText={(value) => onChange({name: 'password',value})}
                        value={form.password}
                        error={errors.password}
                        icon={<Text>Show</Text>}
                        iconPosition='right'
                    />
                    <CustomButton onPress={onSubmit} title="Submit" disabled={false} primary loading={false} />
                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Already have an Account?</Text>
                        <TouchableOpacity onPress={() => navigate(LOGIN) }>
                            <Text style={styles.linkBtn}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Container>
    );
}

export default RegisterComponent;