import React from 'react';
import { Text, View, Button } from 'react-native';

export default function ReposScreen({ navigation }) {
  return (
    <View>
      <Text>Repos Screen</Text>
      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}