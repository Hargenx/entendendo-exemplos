import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';
import MeuBotao from '../components/MeuBotao';
import theme from '../theme/theme';

const Tela1 = ({ navigateToTela2 }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela 1</Text>
      <Text>Sua tela principal</Text>
      <TouchableOpacity style={theme.button} onPress={navigateToTela2}>
        <Text style={styles.buttonText}>Ir para Tela 2</Text>
      </TouchableOpacity>
      <MeuBotao texto={"Tela 2"} onPress={navigateToTela2} />
    </View>
  );
};

export default Tela1;
