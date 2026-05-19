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

import Logo from '../../assets/images/joao.png';

export default function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function Login() {
    console.log('Dados do login');
    console.log({ email, senha });
  }

  return (
    <ScrollView contentContainerStyle={estilos.container}>

      <Image
        source={Logo}
        style={estilos.logo}
        resizeMode='cover'
      />

      <Text style={estilos.titulo}>Login</Text>

      <Text style={estilos.sub}>
        Insira suas credenciais
      </Text>

      <View style={estilos.form}>

        <Text style={estilos.label}>E-mail</Text>

        <TextInput
          style={estilos.input}
          placeholder='Digite seu e-mail'
          keyboardType='email-address'
          autoCapitalize='none'
          value={email}
          onChangeText={setEmail}
        />

        <Text style={estilos.label}>Senha</Text>

        <TextInput
          style={estilos.input}
          placeholder='******'
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity
          style={estilos.botao}
          onPress={Login}
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
    backgroundColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },

  logo: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 25,
    borderWidth: 3,
    borderColor: '#38BDF8',
  },

  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },

  sub: {
    fontSize: 16,
    color: '#CBD5E1',
    marginBottom: 35,
  },

  form: {
    width: '100%',
    backgroundColor: '#1E293B',
    padding: 25,
    borderRadius: 20,
  },

  label: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 8,
    marginTop: 10,
    fontWeight: '600',
  },

  input: {
    backgroundColor: '#334155',
    color: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 15,
  },

  botao: {
    backgroundColor: '#38BDF8',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 15,
  },

  textoBotao: {
    color: '#0F172A',
    fontSize: 18,
    fontWeight: 'bold',
  },

});