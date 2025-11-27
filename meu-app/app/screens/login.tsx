import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>

      <TouchableOpacity style={styles.botao} onPress={() => router.push('/')}>
        <Text style={styles.textoDoBotao}>Voltar para a tela inicial</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { margin: 20, padding: 20, marginTop: 50, borderWidth: 1, borderColor: 'red' },
  titulo: { fontSize: 24, marginBottom: 20 },
  botao: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 6,
    marginBottom: 12,
  },
  textoDoBotao: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});