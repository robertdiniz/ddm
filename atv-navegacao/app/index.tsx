import { Text, View, StyleSheet, Pressable  } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Ionicons name="book" size={24} color="white"/>
      <Text style={styles.title}>Livraria Digital</Text>
      <Text style={styles.description}>Descubra seu próximo livro favorito</Text>
      <Pressable onPress={() => router.push('/(tabs)')}>
        <Text style={styles.button}>EXPLORAR LIVROS</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4f46e5',
    padding: 10,
    borderRadius: 5,
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  }
});