import { View, StyleSheet, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

import { Card } from '@/components/Card';
import { Book } from '@/types/Book';

const books = [
  {
    id: 1,
    title: "O Senhor dos Anéis",
    author: "J.R.R. Tolkien",
    category: "Fantasia",
    year: 1954,
    description: "Uma épica jornada pela Terra Média."
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    category: "Ficção",
    year: 1949,
    description: "Um clássico sobre vigilância e controle."
  },
  {
    id: 3,
    title: "Dom Casmurro",
    author: "Machado de Assis",
    category: "Romance",
    year: 1899,
    description: "A história de amor de Bentinho e Capitu."
  },
  {
    id: 4,
    title: "Sapiens",
    author: "Yuval Harari",
    category: "História",
    year: 2011,
    description: "A história da humanidade em 300 páginas."
  }
];

export default function Livros() {

  const router = useRouter();

  const handleCardPress = (book: Book) => {
    router.push({
      pathname: '/books/[id]',
      params: { 
        id: book.id.toString(),
        title: book.title,
        author: book.author,
        category: book.category,
        year: book.year.toString(),
        description: book.description,
      },
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <Card 
            title={item.title}
            author={item.author}
            category={item.category}
            year={item.year}
            description={item.description}
            onPress={() => handleCardPress(item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 48,
  },
});
