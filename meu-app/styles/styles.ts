// Importamos a ferramenta que cria os estilos do React Native:
import { StyleSheet } from 'react-native';

// Criamos e exportamos o objeto de estilos para ser usado em todos os arquivos:
export const styles = StyleSheet.create({
  // Estilo do container principal da tela principal:
  container: { flex: 1, backgroundColor: '#f0f2f5', paddingTop: 60, paddingHorizontal: 20 },

  // Estilo do título principal do aplicativo:
  tituloApp: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', color: '#1c1c1e', marginBottom: 20 },

  // Estilo da barra horizontal de botões (menu):
  menuHorizontal: { flexDirection: 'row', maxHeight: 50, marginBottom: 20 },

  // Estilo padrão de cada botão não selecionado:
  botaoMenu: { backgroundColor: '#fff', paddingHorizontal: 16, paddingVertical: 10, borderRadius: 20, marginRight: 10, borderWidth: 1, borderColor: '#ddd', height: 40 },

  // Estilo aplicado ao botão que está selecionado no momento:
  botaoAtivo: { backgroundColor: '#007AFF', borderColor: '#007AFF' },

  // Texto padrão do botão do menu:
  textoBotaoMenu: { color: '#333', fontWeight: '600' },

  // Texto do botão quando ele estiver ativo (selecionado):
  textoBotaoAtivo: { color: '#fff' },

  // Botão vermelho de limpar a seleção (reset) e voltar para a tela principal (home):
  botaoReset: { backgroundColor: '#FF3B30', paddingHorizontal: 16, paddingVertical: 10, borderRadius: 20, height: 40 },

  // Texto do botão vermelho de limpar (reset):
  textoBotaoReset: { color: '#fff', fontWeight: '600' },

  // Área central dinâmica onde o switch-case injeta o exemplo ativo:
  conteudoDinamico: { flex: 1, justifyContent: 'center' },

  // Caixa branca que envelopa cada exemplo individualmente:
  caixa: { backgroundColor: '#fff', padding: 20, borderRadius: 12, elevation: 3, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },

  // Título interno de cada exemplo:
  subtitulo: { fontSize: 18, fontWeight: 'bold', marginBottom: 15, color: '#007AFF' },

  // Campos de entrada de texto padronizados:
  input: { borderWidth: 1, borderColor: '#e5e5ea', padding: 12, borderRadius: 8, marginBottom: 12, backgroundColor: '#f9f9f9' },

  // Caixa de boas-vindas:
  boasVindas: { alignItems: 'center', padding: 20 },

  // Texto descritivo da tela inicial:
  textoHome: { fontSize: 16, textAlign: 'center', color: '#666', lineHeight: 22 },

  // Fundo cinza transparente que cobre a tela quando o Modal abre:
  modalFundo: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },

  // Caixa central branca do conteúdo interno do modal:
  modalConteudo: { backgroundColor: '#fff', padding: 24, borderRadius: 12, alignItems: 'center', width: '80%' },

  // Texto interno de aviso do modal:
  textoModal: { fontSize: 16, textAlign: 'center', marginBottom: 20 },

  // Texto que exibe se a música está tocando ou pausada:
  statusTexto: { fontSize: 16, textAlign: 'center', marginVertical: 20, fontWeight: '500' },

  // Quadrado laranja controlado por animação:
  caixaAnimada: { width: 100, height: 100, backgroundColor: '#FF9500', borderRadius: 8, alignSelf: 'center', marginBottom: 20 }
});
