import React, {useContext, useState} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {
  StyledInput,
  StyledButton,
  StyledLoading,
} from '../../../components/Styled';
import {StoreContext} from '../../../context';
import api from '../../../api';

export default function SettingsScreen({navigation}) {
  const {user, setUser} = useContext(StoreContext);
  const [image, setImage] = useState(user.image);
  const [username, setUsername] = useState(user.username);
  const [bio, setBio] = useState(user.bio);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  function updateSettings() {
    setLoading(true);
    setError();
    const updated = {};

    if (email !== user.email) {
      updated.email = email;
    }

    if (username !== user.username) {
      updated.username = username;
    }

    if (image !== user.image) {
      updated.image = image;
    }

    if (bio !== user.bio) {
      updated.bio = bio;
    }

    if (password !== '') {
      updated.password = password;
    }

    api
      .updateUser({user: updated})
      .then(newUser => {
        setUser(newUser);
        AsyncStorage.setItem('user', JSON.stringify(newUser));
      })
      .catch(setError)
      .finally(() => {
        setLoading(false);
        navigation.navigate('User');
      });
  }

  function SignOut() {
    AsyncStorage.removeItem('user');
    setUser();
  }

  if (loading) {
    return <StyledLoading text="Updating..." />;
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>{JSON.stringify(error)}</Text>
        <StyledInput
          placeholder="URL of profile picture"
          value={image}
          onChangeText={setImage}
        />
        <StyledInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <StyledInput
          placeholder="Short Bio"
          value={bio}
          onChangeText={setBio}
          multiline
        />
        <StyledInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <StyledInput
          placeholder="New Password"
          value={password}
          onChangeText={setPassword}
        />
        <StyledButton title="Update Settings" onPress={updateSettings} />
      </View>
      <Button title="Sign Out" color="#B85C5C" onPress={SignOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 3,
    justifyContent: 'space-evenly',
  },
});
