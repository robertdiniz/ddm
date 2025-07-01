import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function BookDetails() {
  const { id, title, author, category, year, description } = useLocalSearchParams();

  const router = useRouter();

  function handleAdicionar() {
    Alert.alert('Sucesso', 'Livro adicionado!');
  }

  function handleCompartilhar() {
    Alert.alert('Sucesso', 'Link copiado!');
  }

  function handleVoltar() {
    router.back();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.card}>
        <Text style={styles.text}>Autor: {author}</Text>
        <Text style={styles.text}>Categoria: {category}</Text>
        <Text style={styles.text}>Ano: {year}</Text>
        <Text style={styles.text}>Descrição:</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      
      <View style={styles.buttonsContainer}>
        <Pressable style={[styles.button, styles.addButton]} onPress={handleAdicionar}>
          <Text style={styles.buttonText}>Adicionar à Lista</Text>
        </Pressable>

        <Pressable style={[styles.button, styles.shareButton]} onPress={handleCompartilhar}>
          <Text style={styles.buttonText}>Compartilhar</Text>
        </Pressable>

        <Pressable style={[styles.button, styles.backButton]} onPress={handleVoltar}>
          <Text style={styles.buttonText}>Voltar</Text>
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#0f172a',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4f46e5',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 6,
  },
  description: {
    fontSize: 16,
    color: '#cbd5e1',
    marginTop: 8,
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 20,
    flexGrow: 1,
  },
  buttonsContainer: {
    marginTop: 20,
  },
  button: {
    paddingVertical: 14,
    borderRadius: 8,
    marginVertical: 6,
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#4f46e5',
  },
  shareButton: {
    backgroundColor: '#6d28d9',
  },
  backButton: {
    backgroundColor: '#374151',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
