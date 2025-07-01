import { Text, View, StyleSheet, Alert, Pressable  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const profile = {
  nome: "Jeferson Queiroga",
  email: "jeferson@livraria.com",
  estatisticas: {
    livros_lidos: 23,
    categoria_favorita: "Romance",
    livros_na_lista: 5
  }
}

export default function Profile() {

  function handleEditarPerfil() {
    Alert.alert("Aviso", "Função em desenvolvimento");
  }

  return (
    <View style={styles.container}>

      <View style={styles.cardInfo}>
        <Ionicons name="person" size={24} color="#fff" />
        <View>
          <Text style={styles.text}>{profile.nome}</Text>
          <Text style={styles.email}>{profile.email}</Text>
        </View>
      </View>
      
      <View style={[styles.estatisticas, styles.cardInfo]}>
        <Text style={styles.estatisticaItem}>Livros lidos: {profile.estatisticas.livros_lidos}</Text>
        <Text style={styles.estatisticaItem}>Categoria favorita: {profile.estatisticas.categoria_favorita}</Text>
        <Text style={styles.estatisticaItem}>Livros na lista: {profile.estatisticas.livros_na_lista}</Text>
      </View>

      <View style={styles.botao}>
        <Pressable onPress={handleEditarPerfil}>
          <Text style={styles.text}>Editar Perfil</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 48,
  },
  cardInfo: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    paddingTop: 20,
    gap: 10,
    backgroundColor: '#1e1b4b',
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    color: '#fff',
  },
  email: {
    fontSize: 16,
    color: '#4f46e5',
    marginBottom: 20,
  },
  estatisticas: {
    marginBottom: 20,
    padding: 10,
  },
  estatisticaItem: {
    fontSize: 16,
    color: '#fff',
  },
  botao: {
    alignSelf: 'flex-start',
    backgroundColor: '#4f46e5',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
});