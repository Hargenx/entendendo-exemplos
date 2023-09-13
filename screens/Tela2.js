import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Tela2({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela 2  </Text>
      <Button
        title="Voltar para Tela 1"
        onPress={() => navigation.navigate('Tela1')}
      />
    </View>
  );
}
