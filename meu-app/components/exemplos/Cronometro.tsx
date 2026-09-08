import { useState, useRef } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Cronometro() {
    const [segundos, setSegundos] = useState<number>(0);

    /* 
     * O useRef armazena o ID do timer e não causa re-render ao mudar.
     * Usando ReturnType<typeof setInterval>, você diz ao TypeScript: 
     * "Pegue o tipo exato do que a função setInterval retorna neste ambiente".
     */    
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const iniciarCronometro = () => {
        if (timerRef.current !== null)
            return; // Evita múltiplos timers ativos.

        /*
         * A função setInterval retorna um identificador numérico único (um ID 
         * inteiro, como 1, 2, 3...). Quando você executa o setInterval, é criada 
         * uma tarefa em segundo plano. Para controlar essa tarefa, é necessário 
         * manter esse ID em uma lista interna. Esse ID é usado mais tarde para
         * destruir a tarefa com clearInterval. O useRef é ideal para armazenar esse ID,
         * pois ele persiste entre renderizações sem causar re-renderizações adicionais.
         */
        timerRef.current = setInterval(() => {
            setSegundos((valor) => valor + 1);
        }, 1000);
    };

    const pararCronometro = () => {
        if (timerRef.current !== null) {
            // Destruimos o timer ativo usando o ID armazenado na referência:
            clearInterval(timerRef.current);
            timerRef.current = null; // Reseta a referência.
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Tempo: {segundos}s</Text>
            <Button title="Iniciar" onPress={iniciarCronometro} />
            <Button title="Parar" onPress={pararCronometro} color="red" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 },
    texto: { fontSize: 32, marginBottom: 20 },
});
