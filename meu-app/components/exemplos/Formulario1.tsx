import { useRef } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function Formulario1() {
    // Criamos a referência com valor inicial null:
    const inputRef = useRef<TextInput>(null);

    const tratarFoco = () => {
        // Acessamos o método .focus() do componente através da propriedade .current:
        inputRef.current?.focus();
    };

    return (
        <View style={styles.container}>
            <TextInput
                ref={inputRef} // Associamos a referência ao TextInput.
                style={styles.input}
                placeholder="Clique no botão para focar aqui."
            />
            <Button title="Focar no Input" onPress={tratarFoco} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});
