import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
//import { useNavigation } from '@react-navigation/native'; 
import SignIn from './SignIn';

const Logo = require('../../assets/logo.png');

export default function Home() {
  const [animationStarted, setAnimationStarted] = useState(false);
  //const navigation = useNavigation(); 

  const handlePress = () => {
    console.log(" i Press")
    // navigation.navigate(<SignIn/>); 
  }

  useEffect(() => {
    setAnimationStarted(true);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={Logo} style={styles.logoImage} />
        <Text style={styles.slogan}>Go with IT, IT Works </Text>
      </View>
      <Animatable.Text 
        animation={animationStarted ? "shake" : undefined}
        easing="ease-in"
        iterationCount={1} 
        style={styles.welcomeText}
      >
        Welcome 👋
      </Animatable.Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Lets Start </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      {/* <SignIn/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  imageContainer: {
    margin: 40
  },
  logoImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  slogan: {
    padding: 10,
    fontSize: 20,
    justifyContent: 'center'
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#3498db',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
