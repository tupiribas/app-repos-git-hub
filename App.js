import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import axios from 'axios';
// import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Image, TouchableOpacity, SafeAreaView, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';

export default function App() {
  const [texto, onChangeTexto] = React.useState('')
  const [resultado, setResultado] = React.useState('')
  const [repo, setRepo] = useState([]);


  const Separator = () => <View style={styles.separator} />;

  const buscarUsuario = async () => {
    try {
      const resposta = await fetch(`https://creepy-leg-production.up.railway.app/users/${texto}`)
      const json = await resposta.json()
      setResultado(json)
    } catch (erro) {
      console.erro(erro)
      setResultado(`Erro ao buscar usuário ${texto}`)
    }
  }

  const buscarRepositorio = async () => {
    try {
      const resposta = await fetch(`https://creepy-leg-production.up.railway.app/users/${texto}/repos`)
      const json = await resposta.json()
      setRepo(json)
    } catch (erro) {
      console.erro(erro)
      setRepo([])
    }
  }
  

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={styles.textContainer}>Pesquisar usuário no GitHub</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeTexto}
            value={texto}
            accessibilityLabel='Buscar'
          />
          <View style={styles.areaBotaoBusca}>
            <TouchableOpacity style={styles.botaoBuscar} onPress={buscarUsuario} onPressIn={buscarRepositorio}>
              <Text style={styles.buttonText}>Buscar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.respostaContainer}>
            <Text style={styles.resposta}>Respostas</Text>
            <Separator></Separator>
          </View>
          <FlatList
            data={repo}
            // keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <View style={styles.cartTexto}>
                  <View style={styles.tituloLoginContainer}>
                    <Text style={styles.titlo}>{item.nome_projeto}</Text>
                  </View>
                  <Text style={styles.localizacao}>{item.linguagem}</Text>
                </View>
              </View>
            )}
          />
        </SafeAreaView>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#1B1F23',
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 50,
  },
  textContainer: {
    marginBottom: 10,
    fontSize: 20,
    color: 'white',
  },
  input: {
    color: 'white',
    height: 60,
    borderWidth: 1,
    padding: 10,
    shadowColor: '#24292E',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0,
    shadowRadius: 10,
    elevation: 12,
    borderRadius: 15,
    borderColor: '#6F42C1'
  },
  areaBotaoBusca: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 10
  },
  botaoBuscar: {
    borderRadius: 50,
    fontSize: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 28,
    paddingVertical: 10,
    borderColor: '#fff',
    color: '#fff',
  },
  respostaContainer: {
    color: 'white',
    marginBottom: 10,
  },
  separator: {
    marginTop: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  resposta: {
    color: 'white',
    fontSize: 20,
  },
  card: {
    display:'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginTop: 20,
    justifyContent: 'space-evenly',
    shadowColor: '#e8eaea',
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    padding: 30,
  },
  cartTexto: {
    display:'flex',
    flexDirection: 'column',
    marginLeft: 30,
    marginTop: 10
  },
  tituloLoginContainer: {
    display:'flex',
    flexDirection: 'row'
  },
  titlo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  login: {
    // fontFamily: 'Fonte-retro',
    fontSize: 12,
    textAlign: 'left',
  },
  descricaoContainer: {
    marginTop: 3,
  },
  descricao: {
    textAlign: 'left',
    fontSize: 12,
  },
  localizacao: {
    fontSize: 10,
    marginTop: 6,
    fontWeight: 'bold',
  }
});
