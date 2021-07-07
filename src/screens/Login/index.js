import React, { useState } from 'react';
import LoginComponent from '../../components/Login';


const Login = () => {
    const [username, setUsername] = useState();

    return (
        <LoginComponent />
    );
}

export default Login;