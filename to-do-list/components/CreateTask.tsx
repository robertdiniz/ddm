import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { StyleSheet, Text, View } from 'react-native';

interface CreateTaskProps {
    titulo: string;
}

export default function CreateTask(props: CreateTaskProps) {
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.text}>{props.titulo}</Text>
            <Text style={[styles.conteudo, styles.default]}></Text>
            <FontAwesome6 name="square-plus" size={24} color="white" />
        </View>
    );
}

const styles = StyleSheet.create({
    createTaskContainer: {

    },
    cardContainer: {
        height: 100,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 5,
        color: "#E88A1A",
        gap: 10,
    },
    text: {
        fontSize: 32,
    },
    default: {
        color: "#000",
    },
    amarelo: {
        color: "#E88A1A",
    },
    verde: {
        color: "#0E9577",
    },
    conteudo: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});