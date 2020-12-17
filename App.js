import React, { Fragment } from 'react';
import {
	
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import Login from './screens/Login';
import Register from './screens/Register'

const AuthStack = createStackNavigator();
const MainDrawer = createDrawerNavigator()
const HomeStack = createStackNavigator();

function LoginScreens() {
	return (
		<AuthStack.Navigator>
			<AuthStack.Screen name="Login" component={Login} />
			<AuthStack.Screen name="Register" component={Register} />
		</AuthStack.Navigator>
	)
}

const App = () => {
	return (
		<Fragment>
			{/* <Text>hyy</Text> */}
			<StatusBar barStyle="dark-content" backgroundColor="#fff" />
			<SafeAreaProvider>
				{/* <SafeAreaView> */}
					<NavigationContainer>
						<LoginScreens />
					</NavigationContainer>
				{/* </SafeAreaView> */}
			</SafeAreaProvider>
		</Fragment>
	);
};



export default App;
