import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import firebaseLogo from './assets/icon.png'; 
import * as Analytics from 'expo-firebase-analytics';

function ActionLogEvent1() {
  Analytics.logEvent('test_event', {
    name: 'Event 1',
    id: 1
  });
  return alert('Event 1 sent to Firebase');
}

function ActionLogEvent2() {
  Analytics.logEvent('test_event', {
    name: 'Event 2',
    id: 2
  });
  return alert('Event 2 sent to Firebase');
}

function ActionSetUserPropertyUserStatus() {
  Analytics.setUserProperty('user_status', 'Logged Out');
  return alert('User Property user_status set in Firebase');
}

function ActionSetUserId() {
  Analytics.setUserId('12345');
  return alert('User Id (user_id) set in Firebase');
}

export default function App() {

  Analytics.setCurrentScreen('Home Screen Name');

  return (
    <View style={styles.container}>
      <View style={styles.logos}>
        <Image source={{ uri: "https://edgeangel.co/logo" }} style={styles.edgeAngelLogo} />
        <Image source={firebaseLogo} style={styles.firebaseLogo} />
      </View>

      <TouchableOpacity onPress={ActionLogEvent1} style={styles.button}>
        <Text style={styles.buttonText}>Log Event 1</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={ActionLogEvent2} style={styles.button}>
        <Text style={styles.buttonText}>Log Event 2</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={ActionSetUserPropertyUserStatus} style={styles.button}>
        <Text style={styles.buttonText}>Set User Property user_status on next event</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={ActionSetUserId} style={styles.button}>
        <Text style={styles.buttonText}>Set User Id on next event</Text>
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
  logos: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  edgeAngelLogo: {
    width: 100, 
    height: 100
  },
  firebaseLogo: {
    width: 80, 
    height: 80
  },
  button: {
    backgroundColor: '#0F4C81',
    padding: 20,
    borderRadius: 5,
    marginTop: 50
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
  }
});
