import { Text, View, FlatList, StyleSheet, Alert, Pressable  } from 'react-native';

const categories = [
  { name: "Fantasia", count: 12, color: "#8B5CF6" },
  { name: "Ficção", count: 8, color: "#EF4444" },
  { name: "Romance", count: 15, color: "#F59E0B" },
  { name: "História", count: 6, color: "#10B981" },
  { name: "Tecnologia", count: 9, color: "#3B82F6" }
];

export default function Categories() {

  const handlePress = (name: string, count: number) => {
    Alert.alert(`A categoria ${name} tem ${count} livros.`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ paddingVertical: 20 }}
        renderItem={({ item }) => (
          <Pressable
            style={[styles.card, { backgroundColor: item.color }]}
            onPress={() => handlePress(item.name, item.count)}
          >
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.count}>{item.count} livros</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    paddingHorizontal: 20,
    paddingTop: 48,
  },
  card: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  count: {
    fontSize: 16,
    color: '#fff',
  },
});