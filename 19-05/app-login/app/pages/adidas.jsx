import { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import Logo from '../../assets/images/adidas.png';

export default function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function Entrar() {
    console.log({ email, senha });
  }

  return (
    <ScrollView contentContainerStyle={estilos.container}>

      <Image
        source={Logo}
        style={estilos.logo}
        resizeMode="contain"
      />

      <Text style={estilos.titulo}>Adidas</Text>

      <Text style={estilos.subtitulo}>
         "You Got This".
      </Text>

      <View style={estilos.card}>

        <Text style={estilos.label}>E-mail</Text>

        <TextInput
          style={estilos.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#777"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={estilos.label}>Senha</Text>

        <TextInput
          style={estilos.input}
          placeholder="********"
          placeholderTextColor="#777"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity
          style={estilos.botao}
          onPress={Entrar}
        >
          <Text style={estilos.textoBotao}>
            Entrar
          </Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}

const estilos = StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },

  logo: {
    width: 140,
    height: 140,
    marginBottom: 15,
  },

  titulo: {
    color: '#FFF',
    fontSize: 38,
    fontWeight: 'bold',
    letterSpacing: 3,
  },

  subtitulo: {
    color: '#AAA',
    fontSize: 16,
    marginBottom: 35,
  },

  card: {
    width: '100%',
    backgroundColor: '#111',
    padding: 25,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#222',
  },

  label: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: 8,
    marginTop: 10,
    fontWeight: '600',
  },

  input: {
    backgroundColor: '#1C1C1C',
    color: '#FFF',
    padding: 15,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#333',
  },

  botao: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },

  textoBotao: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },

});