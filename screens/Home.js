import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
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
      <Button 
        title="Ver repositórios"
        onPress={() => navigation.navigate('Repos')}
      />
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
