import CreateTask from '@/components/Input';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Card from '../../components/Card';
import Task from '../../components/Task';

interface Tarefa {
  id: number;
  descricao: string;
  concluida: boolean;
}

export default function HomeScreen() {

  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  const handleAddTarefa = (descricao: string) => {
    if (!descricao.trim()) return;
    const novaTarefa = {
      id: Date.now(),
      descricao,
      concluida: false,
    };
    setTarefas(prev => [...prev, novaTarefa]);
  };

  const toggleConcluida = (id: number) => {
    setTarefas(prev =>
      prev.map(t =>
        t.id === id ? { ...t, concluida: !t.concluida } : t
      )
    );
  };

  const pendentes = tarefas.filter(t => !t.concluida);
  const concluidas = tarefas.filter(t => t.concluida);

  return (
    <View style={[styles.main]}>
      <Text style={[styles.text]}>Componentes</Text>

      {/* Componente de Adicionar Tarefa */}
      <CreateTask titulo='Qual a tarefa?' icon={true} onAdd={handleAddTarefa}/>

      {/* Componentes de Card */}
      <View style={{ gap: 10, flexDirection: 'row' }}>
        <Card titulo={'Cadastradas:'} quantidade={tarefas.length} tipoBotao='default'></Card>
        <Card titulo={'Em aberto:'} quantidade={pendentes.length} tipoBotao={"amarelo"}></Card>
        <Card titulo={'Finalizadas:'} quantidade={concluidas.length} tipoBotao={"verde"}></Card>
      </View>

      <Text style={styles.text}>Pendentes</Text>
      <View style={{ gap: 10 }}>
        {pendentes.map(tarefa => (
          <TouchableOpacity key={tarefa.id} onPress={() => toggleConcluida(tarefa.id)}>
            <Task texto={tarefa.descricao} tipoBotao="primario" />
          </TouchableOpacity>
        ))}
      </View>

      <Text style={[styles.text, { marginTop: 20 }]}>Concluídas</Text>
      <View style={{ gap: 10 }}>
        {concluidas.map(tarefa => (
          <TouchableOpacity key={tarefa.id} onPress={() => toggleConcluida(tarefa.id)}>
            <Task texto={tarefa.descricao} tipoBotao="secundario" />
          </TouchableOpacity>
        ))}
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
