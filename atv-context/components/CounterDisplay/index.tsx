import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { useCounter } from '@/contexts/CounterContext';


export default function CounterDisplay(){

    const { count } = useCounter();

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>{count}</Text>
            <Text style={styles.texto}>Contador atual</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#cffafe",
        borderColor: "#67e8f9",
        borderWidth: 1,
        borderRadius: 8,
        padding: 8
    },
    texto: {
        fontSize: 24,
        color: "#155e75",
        textAlign: 'center',
        marginVertical: 10,
    },
});