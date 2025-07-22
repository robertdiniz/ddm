import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { useCounter } from '@/contexts/CounterContext';
import { ProgressBar } from 'react-native-paper';

export default function CounterStatus(){

    const { count, canIncrement, canDecrement  } = useCounter();

    const statusMensagem = !canDecrement 
    ? 'Status: Valor mínimo atingido!'
    : !canIncrement
    ? 'Status: Valor máximo atingido!'
    : 'Status: Operação normal!'

    return (
        <View style={styles.container}>
            <Text>{statusMensagem}</Text>
            <View style={styles.statusRow}>
                <Text style={styles.label}>
                    Incrementar:{' '}
                    <Text style={canIncrement ? styles.permitido : styles.bloqueado}>
                        {canIncrement ? '✅ Permitido' : '❌ Bloqueado'}
                    </Text>
                </Text>

                <Text style={styles.label}>
                    Decrementar:{' '}
                    <Text style={canDecrement ? styles.permitido : styles.bloqueado}>
                        {canDecrement ? '✅ Permitido' : '❌ Bloqueado'}
                    </Text>
                </Text>
                
            </View>
            <ProgressBar
                progress={count / 100}
                color="#0ea5e9"
                style={styles.progressBar}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#cffafe",
        borderColor: "#67e8f9",
        borderWidth: 1,
        borderRadius: 8,
        padding: 8,
        gap: 12,
        alignItems: 'center',
    },
    texto: {
        fontSize: 24,
        color: "#155e75",
        textAlign: 'center',
        marginVertical: 10,
    },
    button: {
        color: "#fff",
        padding: 12,
        borderRadius: 8,
    },
    decrement: {
        backgroundColor: "#ef4444",
    },
    reset: {
        backgroundColor: "#64748b",
    },
    increment: {
        backgroundColor: "#22c55e",
    },
    progressBar: {
        height: 8,
        borderRadius: 8,
        width: '100%',
        backgroundColor: '#e2e8f0',
    },
    label: {
        fontSize: 14,
    },
    statusRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
        gap: 8,
    },
    permitido: {
        color: '#16a34a',
    },
    bloqueado: {
        color: '#dc2626',
    },
    progress: {
        backgroundColor: '#fff',
        height: 8,
        width: '100%',
        borderRadius: 8
    },
});