import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Estilo do container principal da tela principal:
  container: { flex: 1, backgroundColor: '#f0f2f5', paddingTop: 60, paddingHorizontal: 20 },

  // Estilo do título principal do aplicativo:
  tituloApp: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', color: '#1c1c1e', marginBottom: 28 },

  // Estilo da barra horizontal de botões (menu):
  menuHorizontal: { flexDirection: 'row', maxHeight: 50, marginBottom: 20 },

  // Estilo padrão de cada botão não selecionado:
  botaoMenu: { backgroundColor: '#fff', width: 170, paddingHorizontal: 16, paddingVertical: 10, borderRadius: 8, marginRight: 10, borderWidth: 1, borderColor: '#ddd', height: 40, alignItems: 'center', justifyContent: 'center' },

  // Estilo aplicado ao botão que está selecionado no momento:
  botaoAtivo: { backgroundColor: '#007AFF', borderColor: '#007AFF' },

  // Texto padrão do botão do menu:
  textoBotaoMenu: { color: '#333', fontWeight: '600' },

  // Texto do botão quando ele estiver ativo (selecionado):
  textoBotaoAtivo: { color: '#fff', fontSize: 16, fontWeight: '600' },

  // Espaçamento entre os botões do exemplo de contadores:
  botaoContador: { width: '100%', minHeight: 44, paddingHorizontal: 16, paddingVertical: 12, borderRadius: 6, alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  botaoParar: { backgroundColor: '#FF3B30' },

  // Botão vermelho de limpar a seleção (reset) e voltar para a tela principal (home):
  botaoReset: { backgroundColor: '#FF3B30', width: 140, paddingHorizontal: 16, paddingVertical: 10, borderRadius: 8, height: 40, alignItems: 'center', justifyContent: 'center' },

  // Texto do botão vermelho de limpar (reset):
  textoBotaoReset: { color: '#fff', fontWeight: '600' },

  // Área central dinâmica onde o switch-case injeta o exemplo ativo:
  conteudoDinamico: { flex: 1, justifyContent: 'center' },

  // Caixa branca que envelopa cada exemplo individualmente:
  caixa: { backgroundColor: '#fff', padding: 20, borderRadius: 12, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' },
  caixaRolagem: { flex: 1, marginBottom: 16 },

  // Título interno de cada exemplo:
  subtitulo: { fontSize: 18, fontWeight: 'bold', marginBottom: 15, color: '#007AFF' },

  // Campos de entrada de texto padronizados:
  input: { borderWidth: 1, borderColor: '#e5e5ea', padding: 12, borderRadius: 8, marginBottom: 12, backgroundColor: '#f9f9f9' },

  // Texto padrão dos exemplos:
  texto: { fontSize: 16, color: '#1c1c1e', marginBottom: 12 },

  // Texto dos valores exibidos no exemplo de contadores:
  textoContador: { fontSize: 18, color: '#1c1c1e', marginBottom: 12 },

  // Texto do tempo exibido no cronômetro:
  textoCronometro: { fontSize: 24, color: '#1c1c1e', marginBottom: 20 },

  // Lista e itens do exemplo de rolagem:
  lista: { flex: 1, marginBottom: 20 },
  item: { padding: 12, backgroundColor: '#f9f9f9', marginBottom: 10, fontSize: 16 },

  // Caixa de boas-vindas:
  boasVindas: { alignItems: 'center', padding: 20 },

  // Texto descritivo da tela inicial:
  textoHome: { fontSize: 16, textAlign: 'center', color: '#666', lineHeight: 22 },
});
