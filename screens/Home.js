import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [userField, setUserField] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite o usuário que quer pesquisar"
        onChangeText={setUserField}
        defaultValue={userField}
      />
      <Button 
        title="Ver repositórios"
        onPress={() => navigation.navigate('Details', { user: userField })}
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
