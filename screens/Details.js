import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';

export default function DetailsScreen({ navigation, route }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/users/${route.params.user}`)
    .then(res => res.json())
    .then(json => setUser(json))
    .catch(console.error);
  }, []);


  return (
    <View>
      <Text>Olá, {user.name}</Text>
      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}