// Importamos o gerenciador de estados básicos useState:
import React, { useState } from 'react';

// Importamos elementos de layout estruturais, botões clicáveis e barra de rolagem horizontal:
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

// Importamos a folha de estilos externa compartilhada:
import { styles } from '../styles/styles';

// Importação dos componentes de exemplo:
import Formulario from './exemplo/Formulario';
import Modal from './exemplo/Modal';
import Audio from './exemplo/Audio';
import Animacao from './exemplo/Animacao';

// Componente principal (Tela de entrada principal):
export default function App() {
  // Estado numérico que armazena qual exemplo está ativo na tela no momento (0 significa nenhum/home)
  const [opcaoSelecionada, setOpcaoSelecionada] = useState<number>(0);

  // Função com switch-case que lê o estado atual e decide qual componente renderizar dinamicamente na tela:
  const renderizarExemplo = () => {
    switch (opcaoSelecionada) {
      case 1:
        // Caso o estado seja 1, renderiza o formulário de foco automático:
        return <Formulario />;
      case 2:
        // Caso o estado seja 2, renderiza a tela com o modal:
        return <Modal />;
      case 3:
        // Caso o estado seja 3, renderiza o controlador de áudio simulado:
        return <Audio />;
      case 4:
        // Caso o estado seja 4, renderiza o bloco com o quadrado animado:
        return <Animacao />;
      default:
        // Caso padrão (estado igual a 0), exibe a mensagem de boas-vindas:
        return (
          <View style={styles.boasVindas}>
            <Text style={styles.textoHome}>
              Selecione um dos exemplos acima para visualizar a aplicação prática do hook useRef.
            </Text>
          </View>
        );
    }
  };

  return (
    // Container base da tela:
    <View style={styles.container}>

      {/* Título de cabeçalho visível o tempo todo no topo da aplicação: */}
      <Text style={styles.tituloApp}>Exemplos de Uso do Hook useRef</Text>

      {/* Menu Horizontal deslizável contendo os botões de seleção de exemplos: */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.menuHorizontal}>

        {/* Mapeia um array numérico de 1 a 4 para desenhar de forma dinâmica os 4 botões na tela: */}
        {[1, 2, 3, 4].map((num) => (
          <TouchableOpacity
            key={num} // Atribui uma chave única exigida pelo React para cada item mapeado.
            style={[
              styles.botaoMenu, // Aplica o design básico do botão.
              opcaoSelecionada === num && styles.botaoAtivo // Se este botão for o selecionado, injeta a cor azul de ativo.
            ]}
            // Ao clicar no botão, atualiza o estado para o número correspondente, disparando o switch-case:
            onPress={() => setOpcaoSelecionada(num)}
          >

            {/* Texto exibido dentro do botão: */}
            <Text style={[styles.textoBotaoMenu, opcaoSelecionada === num && styles.textoBotaoAtivo]}>
              Exemplo {num}
            </Text>

          </TouchableOpacity>
        ))}
        
        {/* Renderização Condicional: se alguma opção estiver aberta (diferente de 0), exibe o botão vermelho de limpar (reset): */}
        {opcaoSelecionada !== 0 && (
          <TouchableOpacity style={styles.botaoReset} onPress={() => setOpcaoSelecionada(0)}>
            <Text style={styles.textoBotaoReset}>Limpar</Text>
          </TouchableOpacity>
        )}
      </ScrollView>

      {/* Área reservada onde o switch-case injetará o código do componente selecionado: */}
      <View style={styles.conteudoDinamico}>
        {renderizarExemplo()}
      </View>
    </View>
  );
}
