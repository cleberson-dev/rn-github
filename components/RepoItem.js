import React from 'react';
import { View, Text } from 'react-native';

export default function RepoItem({ repo }) {
  return (
    <View
      style={{
        padding: 20,
        flex: 1,
        alignItems: "center",
        backgroundColor: "gray",
        marginBottom: 5,
      }}
    >
      <Text style={{ fontSize: 16, color: "white" }}>{repo.name}</Text>
    </View>
  );
}