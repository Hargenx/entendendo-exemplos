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
    backgroundColor: '#007bff', // Cor de fundo do botão
    borderRadius: 8, // Borda arredondada
    paddingVertical: 12, // Espaçamento vertical interno
    paddingHorizontal: 24, // Espaçamento horizontal interno
    alignItems: 'center', // Alinhar o conteúdo no centro horizontalmente
    justifyContent: 'center', // Alinhar o conteúdo no centro verticalmente
    shadowColor: '#000', // Cor da sombra
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 9.81, // Opacidade da sombra
    shadowRadius: 3.84, // Raio da sombra
    elevation: 5, // Elevação da sombra (para Android)
  },
  textoBotao: {
    color: 'white', // Cor do texto
    fontSize: 16, // Tamanho da fonte
    fontWeight: 'bold', // Negrito
  },
});

export default MeuBotao;
