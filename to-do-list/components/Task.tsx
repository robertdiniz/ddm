import { StyleSheet, Text, View } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

type TipoBotao = 'primario' | 'secundario';

interface TaskProps {
    texto: string;
    tipoBotao: TipoBotao;
    icone?: string;
}

export default function Task(props: TaskProps) {

    const estiloTipo = {
        primario: styles.amarelo,
        secundario: styles.verde,
    }

  return (
    <View style={[styles.taskContainer]}>
        <View style={[styles.actionButton, estiloTipo[props.tipoBotao]]}>
            <Text> {props.icone ? `${props.icone}` : "" } </Text>
        </View>
        <View style={[styles.taskText]}>
            <Text style={[styles.text]}>{props.texto}</Text>
        </View>
        <View style={[styles.taskAction]}>
            <Text style={[styles.text]}>X</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    taskContainer: {
        height: 60,
        width: 194,
        gap: 0,
        flexDirection: 'row',
    },
    taskText: {
        height: 60,
        width: 194,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        backgroundColor: "#304163",
        justifyContent: 'center',
        paddingLeft: 20
    },
    taskAction: {
        height: 60,
        width: 60,
        backgroundColor: "#F22424",
        justifyContent: 'center',
        alignItems: 'center',
        borderTopEndRadius: 5,
        borderBottomEndRadius: 5,
    },
    actionButton: {
        height: 60,
        width: 60,
        borderTopStartRadius: 5,
        borderBottomStartRadius: 5,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    amarelo: {
        backgroundColor: "#E88A1A",
    },
    verde: {
        backgroundColor: "#0E9577",
    },
});
