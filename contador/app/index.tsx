import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ContadorSimples() {
  // Estado para armazenar o valor do contador
  const [contador, setContador] = useState(0);
  const [mensagem, setMensagem] = useState('');

  // Funções para manipular o contador usando declaração de função normal
  function aumentar() {
    setContador(contador + 1);
    setMensagem('Contador aumentado!');
  }

  function diminuir() {
    setContador(contador - 1);
    setMensagem('Contador diminuído!');
  }

  function resetar() {
    setContador(0);
    setMensagem('Contador resetado!');
  }

  return (
    <View style={styles.container}>
      {/* Título do App */}
      <Text style={styles.titulo}>Contador App</Text>

      {/* Valor do Contador */}
      <View style={styles.contadorContainer}>
        <Text style={styles.contador}>{contador}</Text>
      </View>

      {/* Mensagem de Alerta - Usando o componente Text padrão */}
      <View>
        {mensagem !== '' && (
          <Text style={styles.mensagem}>{mensagem}</Text>
        )}
      </View>

      {/* Botões de Controle - Usando o componente Button padrão */}
      <View style={styles.botoesContainer}>
        <Pressable style={[styles.botoes, styles.vermelho]} onPress={diminuir} >
          <Text style={[styles.botoesTexto]}>-</Text>
        </Pressable>
        <Pressable style={[styles.botoes, styles.ciano]} onPress={resetar} >
          <Text style={[styles.botoesTexto]}>Resetar</Text>
        </Pressable>
        <Pressable style={[styles.botoes, styles.verde]} onPress={aumentar} >
          <Text style={[styles.botoesTexto]}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f6f6f6',
  },
  titulo: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 32,
    marginBottom: 30,
  },
  contadorContainer: {
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 500,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginBottom: 40,
  },
  contador: {
    color: 'black',
    fontSize: 64,
    fontWeight: 'bold',
  },
  botoesContainer: {
    color: 'black',
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
  },
  botoes: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    elevation: 5,
  },
  vermelho: {
    backgroundColor: '#ff6b69',
  },
  ciano: {
    backgroundColor: '#4dcec3',
  },
  verde: {
    backgroundColor: '#5bc9a6',
  },
  botoesTexto: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mensagem: {
    fontSize: 16,
    color: 'grey',
    marginBottom: 20,
  }
});
