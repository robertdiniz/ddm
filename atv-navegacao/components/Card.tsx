import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type CardProps = {
    title: string;
    author: string;
    category: string;
    year: number;
    description: string;
    onPress: () => void;
}

export function Card({ title, author, category, year, description, onPress }: CardProps){
    return (
        <Pressable onPress={onPress}>
            <View style={styles.bookCard}>
                <View style={styles.bookHeader}>
                    <Ionicons name="book" size={24} color="#fff" />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.bookBody}>
                    <Text style={styles.subtitle}>Autor: {author}</Text>
                    <Text style={styles.subtitle}>Categoria: {category}</Text>
                    <Text style={styles.subtitle}>Ano: {year}</Text>
                    <Text style={styles.description}>Descrição: {description}</Text>
                </View>
            </View>
        </Pressable>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  bookCard: {
    borderBlockColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
  },
  bookHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#4f46e5',
  },
  bookBody: {
    padding: 10,
    backgroundColor: '#020617',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});