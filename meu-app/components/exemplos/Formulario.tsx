// Importamos o hook useRef:
import { useRef } from 'react';

// Importamos os componentes visuais nativos do React Native:
import { View, Text, TextInput, Button } from 'react-native';

// Importamos o objeto de estilos compartilhado:
import { styles } from '../../styles/styles';

// Formpulo com foco automático:
export default function Formulario() {
  /*
   * Criamos uma referência para o TextInput de e-mail. 
   * Indicamos que ela guarda um TextInput e inicia com null.
   */
  const emailInputRef = useRef<TextInput>(null);
  
  /*
   * Criamos uma referência para o TextInput de senha. 
   * Indicamos que ela guarda um TextInput e inicia com null.
   */
  const senhaInputRef = useRef<TextInput>(null);

  return (
    // Caixa branca externa que agrupa o exemplo:
    <View style={styles.caixa}>
      {/* Texto de cabeçalho do exemplo */}
      <Text style={styles.subtitulo}>Foco Automático em Inputs</Text>
      
      {/* Input de Nome (Primeiro Campo): */}
      <TextInput
        style={styles.input} // Aplica o estilo padrão de inputs.
        placeholder="Nome (Pressione Avançar)" // Texto de fundo.
        returnKeyType="next" // Modifica o botão de conclusão do teclado do celular para "Avançar".
        // Evento disparado quando o usuário clica no botão "Avançar" do teclado:
        // Ele acessa a referência do email e dispara o método nativo focus() para abrir o teclado lá.
        onSubmitEditing={() => emailInputRef.current?.focus()} 
      />

      {/* Input de E-mail (Segundo Campo): */}
      <TextInput
        ref={emailInputRef} // Vincula este campo à referência 'emailInputRef'.
        style={styles.input} // Aplica o estilo padrão de inputs.
        placeholder="E-mail (Pressione Avançar)" // Texto de fundo.
        keyboardType="email-address" // Configura o teclado para o formato de e-mail (com @ visível).
        returnKeyType="next" // Modifica o botão de conclusão do teclado para "Avançar".
        // Evento disparado ao avançar: move o cursor diretamente para o campo de senha.
        onSubmitEditing={() => senhaInputRef.current?.focus()}
      />

      {/* Input de Senha (Terceiro e Ùltimo Campo): */}
      <TextInput
        ref={senhaInputRef} // Vincula este campo com a referência 'senhaInputRef'.
        style={styles.input} // Aplica o estilo padrão de inputs.
        placeholder="Senha (Concluir)" // Texto de fundo.
        secureTextEntry // Oculta os caracteres digitados substituindo por bolinhas por segurança.
        returnKeyType="done" // Modifica o botão de conclusão do teclado para "Concluído/Pronto".
      />

      {/* Botão Final de Submissão do Formulário: */}
      <Button title="Enviar Cadastro" onPress={() => alert('Sucesso!')} />
    </View>
  );
}
