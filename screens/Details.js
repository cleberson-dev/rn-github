import React from 'react';
import { Text, View, Button } from 'react-native';

export default function DetailsScreen({ navigation }) {
  return (
    <View>
      <Text>Details Screen</Text>
      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}