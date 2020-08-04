import React, { useState, useEffect } from "react";
import { Text, View, Button, Image } from "react-native";
import RepoList from '../components/RepoList';

export default function DetailsScreen({ navigation, route }) {
  const [user, setUser] = useState(null);
  const [userRepos, setUserRepos] = useState(null);

  const userParam = route.params.user;

  useEffect(() => {
    fetch(`https://api.github.com/users/${userParam}`)
      .then((res) => res.json())
      .then((userData) => {
        setUser(userData);
        return fetch(`https://api.github.com/users/${userParam}/repos`);
      })
      .then((res) => res.json())
      .then((repos) => setUserRepos(repos))
      .catch(console.error);
  }, []);

  return user ? (
    <View>
      <Image
        style={{ height: 64, width: 64 }}
        source={{ uri: user.avatar_url || 'https://www.noupe.com/wp-content/uploads/2012/10/octocat.png' }}
      />
      <Text>Olá, {user.name || user.login}</Text>
      {user.public_repos ? <Text>{user.public_repos} repositórios</Text> : <Text>Sem repos</Text>}
      <RepoList repos={userRepos} />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  ) : (
    <View>
      <Text>Sem resultados</Text>
    </View>
  );
}
