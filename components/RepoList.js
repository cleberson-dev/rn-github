import React from 'react';
import { FlatList, Text } from 'react-native';
import RepoItem from './RepoItem';

export default function RepoList({ repos }) {
  return repos?.length > 0 ? (
    <FlatList
      data={repos.map((repo) => ({ ...repo, key: repo.node_id }))}
      renderItem={({ item }) => <RepoItem repo={item} />}
    />
  ) : (
    <Text>Sem repositórios</Text>
  );
}