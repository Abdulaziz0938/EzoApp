import React from 'react';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyProfileScreen from '../screens/MyProfileScreen';
import AuthScreen from '../screens/AuthScreen';
import BottomTabs from './BottomTabs';
import RoomScreen from '../screens/RoomScreen';
import { useThemeStore } from '../store/themeStore';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { theme } = useThemeStore();
  
  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Main" component={BottomTabs} />
        <Stack.Screen name="Room" component={RoomScreen} />
        <Stack.Screen name="MyProfile" component={MyProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
