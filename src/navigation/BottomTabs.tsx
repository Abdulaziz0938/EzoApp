import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EzoRoomIcon from '../components/EzoRoomIcon';

const Tab = createBottomTabNavigator();

const DummyScreen = ({ title }: { title: string }) => (
  <View style={{ flex: 1, backgroundColor: '#121212', justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ color: '#FFF', fontSize: 24 }}>{title}</Text>
  </View>
);

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#10B981',
        tabBarInactiveTintColor: '#888888',
        tabBarLabelStyle: styles.tabLabel,
        tabBarIcon: ({ focused }) => {
          const color = focused ? '#10B981' : '#888888';
          
          if (route.name === 'Rooms') {
            // استخدام الأيقونة الخاصة فينا
            return <EzoRoomIcon isActive={focused} size={32} />;
          }
          if (route.name === 'Discover') return <Ionicons name="compass" size={26} color={color} />;
          if (route.name === 'Moments') return <Ionicons name="flower" size={26} color={color} />;
          if (route.name === 'Messages') return <Ionicons name="chatbubble-ellipses" size={26} color={color} />;
          if (route.name === 'Me') {
            // تغيير أيقونة "أنا" إلى شكل شخص (متل Xena)
            return <FontAwesome5 name="user" size={22} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen name="Rooms" component={HomeScreen} options={{ tabBarLabel: 'الغرف' }} />
      <Tab.Screen name="Discover" component={() => <DummyScreen title="اكتشاف" />} options={{ tabBarLabel: 'اكتشاف' }} />
      <Tab.Screen name="Moments" component={() => <DummyScreen title="لحظات" />} options={{ tabBarLabel: 'لحظات' }} />
      <Tab.Screen name="Messages" component={() => <DummyScreen title="رسائل" />} options={{ tabBarLabel: 'رسائل' }} />
      <Tab.Screen name="Me" component={ProfileScreen} options={{ tabBarLabel: 'أنا' }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#181A20', 
    borderTopWidth: 0,
    height: Platform.OS === 'ios' ? 85 : 65,
    paddingBottom: Platform.OS === 'ios' ? 25 : 10,
    paddingTop: 10,
  },
  tabLabel: { fontSize: 10, fontWeight: 'bold', marginTop: 4 }
});
