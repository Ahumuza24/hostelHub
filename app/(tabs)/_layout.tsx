import Colors from '@/constants/Colors';
import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';
import { Entypo , Octicons, Ionicons } from '@expo/vector-icons';

const Layout = () => {
  return(
<Tabs
screenOptions={{
  tabBarActiveTintColor: Colors.primary,
  tabBarLabelStyle: {
    fontFamily: 'mon-sb', 
  }
}}>
<Tabs.Screen  
name='index' 
options={{
  tabBarLabel: 'Home',
  tabBarIcon: ({ color, size}) => <Entypo name="home" size={size} color ={color}/>

}} 
/>
<Tabs.Screen  
name='favorite' 
options={{
  tabBarLabel: 'Favourites',
  tabBarIcon: ({ color, size}) => <Entypo name="heart-outlined" size={size} color ={color}/>

}} 
/>

<Tabs.Screen  
name='search' 
options={{
  tabBarLabel: 'Search',
  tabBarIcon: ({ color, size}) => <Octicons name="search" size={size} color ={color}/>

}} 
/>

<Tabs.Screen  
name='inbox' 
options={{
  tabBarLabel: 'Inbox',
  tabBarIcon: ({ color, size}) => <Octicons name="inbox" size={size} color ={color}/>

}} 
/>
<Tabs.Screen  
name='profile' 
options={{
  tabBarLabel: 'Profile',
  tabBarIcon: ({ color, size}) => <Ionicons name="person-circle-outline" size={size} color ={color}/>

}} 
/>
    </Tabs>
  )
}
export default Layout;