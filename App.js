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
          <View style={styles.card}>
            <Image
              style={styles.logo}
              source={{
                uri: `${resultado.avatar_url}`
              }}
            />
            <View style={styles.cartTexto}>
              <Text style={styles.titlo}>{resultado.nome}</Text>
              <Text style={styles.descricao}>Esse é um exemplo de texto para a miha descrição</Text>
            </View>
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
  },
  card: {
    display:'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 50
  },
  titlo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 20,
  },
  cartTexto: {
    display:'flex',
    flexDirection: 'column',
    width: 205,
    marginTop: 10,
    marginLeft: 20,
  }
});
