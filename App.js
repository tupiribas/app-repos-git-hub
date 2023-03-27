import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [texto, onChangeTexto] = React.useState('')
  const [resultado, setResultado] = React.useState('')

  const buscar = async () => {
    try {
      const resposta = await fetch(`https://rest-api-spring-boot-github-production.up.railway.app/users/${texto}`)
      const json = await resposta.json()
      setResultado(json)
    } catch (erro) {
      console.erro(erro)
      setResultado(`Erro ao buscar usuário ${texto}`)
    }
  }

  return (
      <View style={styles.container}>
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
              onPress={buscar}
            />
          </View>
          <Image
            style={styles.logo}
            source={{
              uri: `${resultado.avatar_url}`
            }}
          />
          <Text>{resultado.nome}</Text>
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
  logo: {
    width: 66,
    height: 58,
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
