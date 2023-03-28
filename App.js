import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as Font from 'expo-font';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Image, TouchableOpacity, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App(props) {
  const [texto, onChangeTexto] = React.useState('')
  const [resultado, setResultado] = React.useState('')
  
  async function loadFontes() {
    await Font.loadAsync({
      'Fonte-retro': require('./assets/fonts/IBM_Plex_Mono/IBMPlexMono-Regular.ttf')
    });
  }

  React.useEffect(() => {
    loadFontes();
  }, []);

  const Separator = () => <View style={styles.separator} />;

  const buscar = async () => {
    try {
      const resposta = await fetch(`https://creepy-leg-production.up.railway.app/users/${texto}`)
      const json = await resposta.json()
      setResultado(json)
    } catch (erro) {
      console.erro(erro)
      setResultado(`Erro ao buscar usuário ${texto}`)
    }
  }

  const Filtro = () => {
    return (
      <View style={styles.container}>
        <Text>Filtros</Text>
      </View>
    );
  };
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
            <TouchableOpacity style={styles.botaoBuscar} onPress={buscar}>
              <Text style={styles.buttonText}>Nome do usuário</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoBuscar} onPress={buscar}>
              <Text style={styles.buttonText}>Nome do repo.</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.areaBotaoBusca}>
            <TouchableOpacity style={styles.botaoBuscar} onPress={buscar}>
              <Text style={styles.buttonText}>Buscar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.respostaContainer}>
            <Text style={styles.resposta}>Respostas</Text>
            <Separator></Separator>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.logo}
              source={{
                uri: `${resultado.avatar_url}`
              }}
            />
            <View style={styles.cartTexto}>
              <View style={styles.tituloLoginContainer}>
                <Text style={styles.titlo}>{resultado.name}</Text>
                <Text style={styles.login}>{resultado.login}</Text>
              </View>
              <View style={styles.descricaoContainer}>
                <Text numberOfLines={3} ellipsizeMode='tail' style={styles.descricao}>{resultado.bio}</Text>
              </View>
              <Text style={styles.localizacao}>{resultado.localizacao}</Text>
            </View>
          </View>
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
    marginVertical: 8,
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
    borderRadius: 10,
    padding: 25,
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
    width: 50,
    height: 50,
    borderRadius: 50
  },
  cartTexto: {
    display:'flex',
    flexDirection: 'column',
    width: '62%',
    marginLeft: 20,
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
    fontFamily: 'Fonte-retro',
    fontSize: 12,
    textAlign: 'left',
    margin: 3,
    marginLeft: 5
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
