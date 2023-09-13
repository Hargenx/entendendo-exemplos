import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MeuBotao = ({ texto, onPress }) => {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.textoBotao}>{texto}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botao: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  textoBotao: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MeuBotao;
