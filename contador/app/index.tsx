import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function ContadorSimples() {
  // Estado para armazenar o valor do contador
  const [contador, setContador] = useState(0);

  // Funções para manipular o contador usando declaração de função normal
  function aumentar() {
    setContador(contador + 1);
  }

  function diminuir() {
    setContador(contador - 1);
  }

  function resetar() {
    setContador(0);
  }

  return (
    <View style={styles.container}>
      {/* Título do App */}
      <Text style={styles.titulo}>Contador App</Text>

      {/* Valor do Contador */}
      <Text style={styles.contador}>{contador}</Text>

      {/* Botões de Controle - Usando o componente Button padrão */}
      <View style={styles.botoes}>
        <Button title="-" onPress={diminuir} color="red" />
        <Button title="Reset" onPress={resetar} color="gray" />
        <Button title="+" onPress={aumentar} color="green" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  titulo: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
  },
  contador: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  botoes: {
    color: 'white',
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
  },
});
