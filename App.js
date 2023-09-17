import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles/styles';
import Tela1 from './screens/Tela1';
import Tela2 from './screens/Tela2';

export default function App() {
  const [telaAtual, setTelaAtual] = useState('Tela1');

  const navigateToTela1 = () => {
    setTelaAtual('Tela1');
  };

  const navigateToTela2 = () => {
    setTelaAtual('Tela2');
  };

  return (
    <View style={{ flex: 1 }}>
      {telaAtual === 'Tela1' && <Tela1 navigateToTela2={navigateToTela2} />}
      {telaAtual === 'Tela2' && <Tela2 navigateToTela1={navigateToTela1} />}
    </View>
  );
}
