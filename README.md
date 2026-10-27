# Aqua Recife — Sistema Inteligente de Monitoramento de Perdas de Água

## Integrantes da Equipe
- Mario Marcelino — Matrícula: 01796910
- Allan Correia de Andrade — Matrícula: 01588024
- Paulo Bezerra de Oliveira Freire — Matrícula: 01798569

---

## 1. Descrição do Problema
O desperdício e a perda de água na rede de distribuição urbana representam um dos maiores desafios de infraestrutura e sustentabilidade na Região Metropolitana do Recife, no contexto da Compesa. Vazamentos ocultos, variações bruscas de pressão nas tubulações e o tempo elevado para identificação e reparo de anomalias causam grandes prejuízos econômicos e impactos no abastecimento populacional.

## 2. Solução Proposta
O Aqua Recife é uma aplicação web desenvolvida em React que simula um painel SCADA de telemetria e monitoramento de rede em tempo real. A solução permite:
- Painel de Controle (Dashboard): Visualização consolidada de indicadores chave de perda estipulada em litros por segundo, pressão média e quantidade de alertas críticos.
- Monitoramento por Sensores: Acompanhamento dinâmico de telemetria em bairros piloto como Boa Viagem, Várzea, Santo Amaro, Espinheiro e Casa Amarela com funcionalidade de simulação de alteração de estado dos sensores.
- Gestão de Ordens de Serviço: Abertura e acompanhamento do ciclo de vida das manutenções corretivas na rede.
- Relatório Executivo: Consolidação dos parâmetros operacionais para tomada de decisão.

---

## 3. Instruções de Execução

### Pré-requisitos
- Node.js na versão 18 LTS ou superior instalado no sistema.

### Passo a Passo

1. Clonar o repositório:
git clone https://github.com/Paulobfreire-hub/aqua-recifee.git
cd aqua-recifee

2. Instalar as dependências do projeto:
npm install
npm install lucide-react

3. Executar a aplicação em modo de desenvolvimento:
npm run dev

4. Acessar a aplicação:
Abra o navegador no endereço local indicado no terminal, geralmente localizado em http://localhost:5173.

---

## Tecnologias Utilizadas
- React.js para componentização e gerenciamento de estados com o gancho useState.
- Vite como ferramenta de build e ambiente de desenvolvimento.
- Lucide React como pacote de iconografia industrial.
- CSS-in-JS para estilização responsiva nativa voltada para alta performance.
- 
