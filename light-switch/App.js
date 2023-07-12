import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  // default is light
  const [switched, setSwitched] = useState(false);

  function pressedButton() {
    setSwitched(!switched);
  }

  return (
    <View style={[styles.container, switched == true ? styles.darkContainer : styles.lightContainer]}>
      <TouchableOpacity style={styles.lightswitch} onPress={pressedButton}>
      </TouchableOpacity>
      <Text style={[styles.subtitle, switched == true ? styles.darkSubtitle : styles.lightSubtitle]}> {switched == true ? "It's dark!" : "Toggle the lights with the switch above"}</Text>

      <StatusBar style={switched == true ? "light" : "dark"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightswitch: {
    width: 70,
    height: 130,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    borderColor: "gray",
    borderWidth: 1
  },
  subtitle: {
    marginTop: 30,
    fontWeight: "bold",
  },
  darkContainer: {
    backgroundColor: '#242424',
  },
  lightContainer: {
    backgroundColor: 'white',
  },
  darkSubtitle: {
    color: 'white'
  },
  lightSubtitle: {
    color: 'black'
  },
  lightStatus: {

  },
  darkStatus: {

  }
});
