import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [texto, onChangeTexto] = React.useState('')

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text>Buscar...</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeTexto}
          value={texto}
        />
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 25,
    borderWidth: 0.3,
    padding: 10,
    borderRadius: 10
  },
});
