import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/users/cleberson-dev')
      .then(res => res.json())
      .then(json => setUsername(json.name))  
      .catch(console.error);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Olá, {username}!</Text>
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
});
