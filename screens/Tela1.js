import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles'; // Importa os estilos

import MeuBotao from '../components/MeuBotao'; // Importa o componente MeuBotao

export default function Tela1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela 1</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Tela2')}
      >
        <Text style={styles.buttonText}>Ir para Tela 2</Text>
      </TouchableOpacity>
      <MeuBotao texto="Um Botão Customizado" />
    </View>
  );
}
