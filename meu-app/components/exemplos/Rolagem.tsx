import { useState, useRef } from 'react';
import { StyleSheet, View, Text, FlatList, Button } from 'react-native';

export default function Rolagem() {
    const [itens, setItens] = useState<string[]>(['Mensagem 1', 'Mensagem 2', 'Mensagem 3']);
    const flatListRef = useRef<FlatList>(null);

    const adicionarItem = () => {
        setItens((vetor) => [...vetor, `Mensagem ${vetor.length + 1}`]);

        // Aguarda o próximo ciclo para garantir que o item já foi renderizado na tela:
        setTimeout(() => {
            flatListRef.current?.scrollToEnd({ animated: true });
        }, 50);
    };

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={itens}
                keyExtractor={(item) => item}
                renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                style={styles.lista}
            />
            <Button title="Adicionar e Rolar pro Fim" onPress={adicionarItem} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, paddingTop: 50 },
    lista: { flex: 1, marginBottom: 20 },
    item: { padding: 20, backgroundColor: '#f9c2ff', marginBottom: 10, fontSize: 18 },
});
