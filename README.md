Aqua Recife — Sistema Inteligente de Monitoramento de Perdas de Água
Integrantes da Equipe
Mario Marcelino — Matrícula: 01796910
Allan Correia de Andrade — Matrícula: 01588024
Paulo Bezerra de Oliveira Freire — Matrícula: 01798569
1. Descrição do Problema
O desperdício e a perda de água na rede de distribuição urbana representam um dos maiores desafios de infraestrutura e sustentabilidade na Região Metropolitana do Recife, no contexto da Compesa. Vazamentos ocultos, variações bruscas de pressão nas tubulações e o tempo elevado para identificação e reparo de anomalias causam grandes prejuízos econômicos e impactos no abastecimento populacional.
2. Solução Proposta
O Aqua Recife é uma aplicação web desenvolvida em React que simula um painel SCADA de telemetria e monitoramento de rede em tempo real. A solução permite:
Painel de Controle (Dashboard): Visualização consolidada de indicadores chave de perda estipulada em litros por segundo, pressão média e quantidade de alertas críticos.
Monitoramento por Sensores: Acompanhamento dinâmico de telemetria em bairros piloto como Boa Viagem, Várzea, Santo Amaro, Espinheiro e Casa Amarela com funcionalidade de simulação de alteração de estado dos sensores.
Gestão de Ordens de Serviço: Abertura e acompanhamento do ciclo de vida das manutenções corretivas na rede.
Relatório Executivo: Consolidação dos parâmetros operacionais para tomada de decisão.
3. Instruções de Execução
Pré-requisitos
Navegador web moderno (Google Chrome, Mozilla Firefox, Microsoft Edge ou Safari) com conexão à internet para carregamento das dependências via CDN.
Passo a Passo
Clonar ou baixar o repositório:
git clone https://github.com/Paulobfreire-hub/aqua-recife.git
Executar a aplicação:
Abra diretamente o arquivo index.html em qualquer navegador web ou através do serviço GitHub Pages. Não é necessária a instalação prévia do Node.js ou gerenciadores de pacote.
Tecnologias Utilizadas
React.js carregado via CDN para componentização e gerenciamento de estados com o gancho useState.
Babel Standalone para transpilação de sintaxe JSX diretamente no navegador.
Lucide React via CDN para iconografia industrial de telemetria.
CSS-in-JS para estilização responsiva nativa voltada para alta performance.
