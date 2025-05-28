import { StyleSheet, Text, View } from 'react-native';

type TipoBotao = 'amarelo' | 'verde';

interface CardProps {
    titulo: string;
    tipoBotao: TipoBotao;
    quantidade?: number;
}

export default function Card(props: CardProps) {

    console.log('Card', props);

    const estiloTipo = {
        amarelo: styles.amarelo,
        verde: styles.verde,
    }

  return (
    <View style={[styles.cardContainer]}>
        <Text>{props.titulo}</Text>
        <Text style={[estiloTipo[props.tipoBotao], styles.conteudo]}>{props.quantidade}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    cardContainer: {
        height: 100,
        width: 113,
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
    amarelo: {
        color: "#E88A1A",
    },
    verde: {
        color: "#0E9577",
    },
    conteudo: {
        fontSize: 24,
        fontWeight: 'bold',
    }
});
