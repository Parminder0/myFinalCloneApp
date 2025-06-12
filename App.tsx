import React from 'react';
import { View, Text, Button, StyleSheet, Alert, TextInput, Image } from 'react-native';

export default function App() {
  const showAlert = () => {
    Alert.alert("Alert Button pressed");
  };

  return (
    <View style={styles.container}>
      {/* App Logo */}
      <Image
        source={{ uri: 'https://picsum.photos/120' }}
        style={styles.logo}
      />

      {/* App Title */}
      <Text style={styles.title}>Welcome to MyApp</Text>

      {/* Input Placeholder */}
      <TextInput
        placeholder="Email or username"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />

      {/* Login Button */}
      <View style={styles.loginButton}>
        <Text style={styles.buttonText}>Log In</Text>
      </View>

      {/* Alert Button */}
      <View style={styles.alertWrapper}>
        <Button title="Alert" onPress={showAlert} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
    borderRadius: 60,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    backgroundColor: '#ffffff',
    padding: 12,
    marginVertical: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#1da1f2',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  alertWrapper: {
    position: 'absolute',
    bottom: 40,
  },
});
