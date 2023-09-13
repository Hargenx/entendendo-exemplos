import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles/styles';

export default function App() {
  const [tela, setTela] = useState('Tela1');

  const renderizarTela = () => {
    if (tela === 'Tela1') {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Tela 1</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setTela('Tela2')}
          >
            <Text style={styles.buttonText}>Ir para Tela 2</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (tela === 'Tela2') {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Tela 2</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setTela('Tela1')}
          >
            <Text style={styles.buttonText}>Voltar para Tela 1</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {renderizarTela()}
    </View>
  );
}
