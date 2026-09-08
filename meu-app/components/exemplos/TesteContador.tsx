import { useState, useRef } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function TesteContador() {
    let contadorVariavel = 0;
    const [contadorEstado, setContadorEstado] = useState<number>(0);
    const contadorRef = useRef(0);

    // Esses logs rodam TODA VEZ que o componente é atualizado (redesenhado) na tela:
    console.log("O componente foi atualizado (redesenhado) na tela!");
    console.log(`contadorVariavel: ${contadorVariavel}`);
    console.log(`contadorEstado: ${contadorEstado}`);
    console.log(`contadorRef.current: ${contadorRef.current}`);

    const atualizarContadorVariavel = () => {
        contadorVariavel++;

        console.log(`contadorVariavel: ${contadorVariavel}`);
        console.log(`contadorEstado: ${contadorEstado}`);
        console.log(`contadorRef.current: ${contadorRef.current}`);
    };

    const atualizarContadorEstado = () => {
        setContadorEstado(prev => prev + 1);

        console.log(`contadorVariavel: ${contadorVariavel}`);
        console.log(`contadorEstado: ${contadorEstado}`);
        console.log(`contadorRef.current: ${contadorRef.current}`);
    };

    const atualizarContadorRef = () => {
        contadorRef.current = contadorRef.current + 1;

        console.log(`contadorVariavel: ${contadorVariavel}`);
        console.log(`contadorEstado: ${contadorEstado}`);
        console.log(`contadorRef.current: ${contadorRef.current}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>contadorVariavel: {contadorVariavel}</Text>
            <Text style={styles.texto}>contadorEstado: {contadorEstado}</Text>
            <Text style={styles.texto}>contadorRef.current: {contadorRef.current}</Text>

            <Button title="Aumentar contadorVariavel" onPress={atualizarContadorVariavel} />
            <Button title="Aumentar contadorEstado" onPress={atualizarContadorEstado} />
            <Button title="Aumentar contadorRef.current" onPress={atualizarContadorRef} color="green" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 15 },
    texto: { fontSize: 22 },
});
