import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from "./src/screens";

export default function App() {
  return ( 
    <SafeAreaView style={{flex:1 ,alignItems:"center",justifyContent:"center"}}>
      <HomeScreen/>
    </SafeAreaView>
      
     );
}
