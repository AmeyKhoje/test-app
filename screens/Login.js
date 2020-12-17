import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

const Login = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text>Login</Text>
            <TouchableOpacity onPress={() => {props.navigation.navigate("Register")}}>
                <Text>Register</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Login;
