import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
//import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook for navigation

const Logo = require('../../assets/logo1.png');

export default function Home() {
  //const navigation = useNavigation(); // Initialize navigation
  
  const goToSignIn = () => {
    //navigation.navigate('SignIn'); // Navigate to SignIn screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={Logo} style={styles.image} />
      </View>
      <TouchableOpacity style={styles.button} onPress={goToSignIn}>
        <Text style={styles.buttonText}>Let,s Starts </Text>
      </TouchableOpacity>
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
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  button: {
    backgroundColor: 'blcak',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
