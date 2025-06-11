import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { TextInput, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

interface InputProps {
    titulo: string;
    icon?: boolean;
    onAdd?: (novaTarefa: string) => void;
}

export default function Input(props: InputProps) {

    const [ valor, setValor ] = useState("");

    const handleAdd = () => {
        if (valor && props.onAdd) {
        props.onAdd(valor);
        setValor("");
        }
    };

    return (
        <View style={styles.cardContainer}>
            <TextInput
                style={styles.input}
                placeholder="Qual a tarefa?"
                value={valor}
                onChangeText={setValor}
            ></TextInput>
            <View style={[styles.button]} onTouchEnd={handleAdd}>
                <FontAwesome6 name="square-plus" size={24} color="white" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        height: 56,
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#252627",
        paddingLeft: 16,
        borderRadius: 5,
        color: "#fff",
    },
    button: {
        backgroundColor: "#1E1E1E",
        padding: 15.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopEndRadius: 5,
        borderEndEndRadius: 5,
    },
    input: {
        width: "90%",
        fontSize: 24,
        color: "#fff",
    },
});