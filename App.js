import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
      <Image
       source={{uri:"https://picsum.photos/200/200"}}
       style={styles.image}
       />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff00ff'
  },
  title:{
    fontSize: 24, color: "black"
  },
  image:{
    width:200,
    height:200
  }
});
