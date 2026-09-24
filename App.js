import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !address) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    Alert.alert(
      'Form Submitted',
      `Name: ${name}\nEmail: ${email}\nAddress: ${address}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Form</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Address</Text>
      <TextInput
        style={[styles.input, styles.addressInput]}
        placeholder="Enter your address"
        value={address}
        onChangeText={setAddress}
        multiline
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },

  addressInput: {
    height: 100,
    textAlignVertical: 'top',
  },
});