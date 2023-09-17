import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';
import theme from '../theme/theme';

const Tela2 = ({ navigateToTela1 }) => {
  return (
    <View style={theme.container}>
      <Text style={styles.text}>Tela 2</Text>
      <Text>O que você quer na tela 2</Text>
      <TouchableOpacity style={styles.button} onPress={navigateToTela1}>
        <Text style={styles.buttonText}>Voltar para Tela 1</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tela2;
