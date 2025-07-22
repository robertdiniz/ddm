import React from 'react';

import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useCounter } from '@/contexts/CounterContext';


export default function CounterControls(){

    const { increment, decrement, reset, canIncrement, canDecrement  } = useCounter();

    return (
        <View style={styles.container}>
            <Pressable
                onPress={decrement}
                disabled={!canDecrement}
            >
                <Text style={[styles.button, styles.decrement]}>-1</Text>
            </Pressable>
            <Pressable
                onPress={reset}
            >
                <Text style={[styles.button, styles.reset]}>Reset</Text>
            </Pressable>
            <Pressable
                onPress={increment}
                disabled={!canIncrement}
            >
                <Text style={[styles.button, styles.increment]}>+1</Text>
            </Pressable>
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
        flexDirection: "row",
        gap: 12,
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
});