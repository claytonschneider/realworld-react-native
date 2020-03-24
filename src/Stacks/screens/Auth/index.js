import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {signin, signup} from '../../../api';
import {StoreContext} from '../../../context';
import {StyledButton, StyledLoading} from '../../../components/Styled';

export default function SignIn({navigation}) {
  const {setUser} = useContext(StoreContext);

  const [oldUser, setoldUser] = useState(true); // true for sign in, false for sign up
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  function Onpress() {
    setLoading(true);
    if (oldUser) {
      signin(email, password)
        .then(user => {
          console.log(user);
          AsyncStorage.setItem('user', JSON.stringify(user));
          setUser(user);
        })
        .catch(setError)
        .finally(() => setLoading(false));
    } else {
      signup(email, password, username)
        .then(user => {
          AsyncStorage.setItem('user', JSON.stringify(user));
          setUser(user);
        })
        .catch(setError)
        .finally(() => setLoading(false));
    }
  }

  if (loading) {
    return <StyledLoading text={oldUser ? 'Signing In' : 'Signing Up'} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{oldUser ? 'Sign In' : 'Sign Up'}</Text>
      <Text style={styles.subtitle} onPress={() => setoldUser(s => !s)}>
        {oldUser ? 'Need an Account?' : 'Have an Account?'}
      </Text>
      {error ? <Text style={styles.error}>{JSON.stringify(error)}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCompleteType="email"
        autoCapitalize="none"
        autoCorrect={false}
        autoFocus={true}
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
        autoCompleteType="password"
      />
      {oldUser ? null : (
        <TextInput
          style={styles.input}
          placeholder="username"
          value={username}
          onChangeText={setUsername}
        />
      )}
      <StyledButton
        title={oldUser ? 'Sign In' : 'Sign Up'}
        onPress={Onpress}
        disabled={
          oldUser ? !(email && password) : !(email && password && username)
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.30)',
    borderRadius: 5,
    padding: 5,
    margin: 5,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    padding: 10,
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    color: '#5CB85C',
  },
  error: {
    textAlign: 'center',
    color: '#B85C5C',
  },
});
