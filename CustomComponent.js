import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Pressable } from 'react-native';

export default function CustomButton({ title }) {
  return (
    <Pressable>
        <Text>{title}</Text>
    </Pressable>
  );
}

