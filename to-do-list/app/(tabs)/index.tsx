import CreateTask from '@/components/CreateTask';
import { StyleSheet, Text, View } from 'react-native';
import Card from '../../components/Card';
import Task from '../../components/Task';

export default function HomeScreen() {
  return (
    <View style={[styles.main]}>
      <Text style={[styles.text]}>Componentes</Text>

      {/* Componente de Adicionar Tarefa */}
      <CreateTask titulo='Adicionar Tarefa' />

      {/* Componentes de Card */}
      <View style={{ gap: 10, flexDirection: 'row' }}>
        <Card titulo={'Cadastradas:'} quantidade={4} tipoBotao='default'></Card>
        <Card titulo={'Em aberto:'} quantidade={2} tipoBotao={"amarelo"}></Card>
        <Card titulo={'Finalizadas:'} quantidade={2} tipoBotao={"verde"}></Card>
      </View>

      {/* Componente de Task */}
      <View style={{ gap: 10, }}>
        <Task texto='Texto' tipoBotao='primario'/>
        <Task texto='Texto' tipoBotao='secundario'/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: 20,
    gap: 8,
    borderColor: "#28385E",
    backgroundColor: "#28385E",
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
});
