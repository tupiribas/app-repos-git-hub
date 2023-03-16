import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

import {Platform, UIManager, findNodeHandle} from 'react-native';

if (Platform.OS === 'android') {
  UIManager.sendAccessibilityEvent(
    findNodeHandle(this),
    UIManager.AccessibilityEventTypes.typeViewFocused,
  );
}

export default function App() {
  const [texto, onChangeTexto] = React.useState('')

  return (
      <View style={styles.container}>
        accessible={true}
        accessibilityActions={[
          {name: 'cut', label: 'cut'}
        ]}
        <SafeAreaView>
          <Text style={styles.textContainer}>Buscar</Text>
          <TextInput
            style={styles.input} 
            onChangeText={onChangeTexto}
            value={texto}
            accessibilityLabel='Buscar'
          />
          <View style={styles.areaBotaoBusca}>
            <Button
              title="Buscar"
              accessibilityLabel='Buscar'
              onPress={() => Alert.alert('Simple Button pressed')}
            />
          </View>
        </SafeAreaView>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 50,
  },
  textContainer: {
    padding: 10,
  },
  input: {
    height: 40,
    borderWidth: 0.3,
    padding: 10,
    borderRadius: 10
  },
  areaBotaoBusca: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
    borderRadius: 10
  }
});
