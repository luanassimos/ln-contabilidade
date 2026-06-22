# Relatório de testes

Data da validação: 22 de junho de 2026

Navegador de teste: Chrome/Chromium headless via DevTools Protocol

Resultado automatizado: **45 de 45 verificações aprovadas**.

## Ambientes validados

- abertura direta do `index.html` pelo protocolo `file://`
- abertura de `index.html` em servidor HTTP local
- abertura direta da versão independente `standalone/ln-contabilidade.html` pelo protocolo `file://`
- abertura direta de `privacidade.html` pelo protocolo `file://`

## Larguras testadas

- 360 px
- 390 px
- 768 px
- 1440 px
- desktop amplo, com 1920 px

## Verificações executadas

- existência dos arquivos principais
- ausência de npm, build, framework e dependências externas
- manutenção do WhatsApp vazio em `assets/js/site-config.js`
- fallback de contato por e-mail enquanto o WhatsApp permanece vazio
- carregamento por `file://` sem erros de console
- carregamento por servidor local sem respostas HTTP 4xx ou 5xx
- ausência de overflow horizontal
- carregamento das imagens
- existência dos destinos de âncoras internas
- ausência de IDs duplicados
- apenas um H1 no `index.html`
- menu desktop visível em desktop
- menu mobile abrindo, navegando e fechando
- FAQ abrindo pelo elemento `summary`
- formulário vazio bloqueando envio
- formulário preenchido acionando fallback por e-mail
- foco visível e navegação inicial por teclado
- standalone com um H1, imagens carregadas e sem overflow
- política de privacidade acessível
- sintaxe de `assets/js/main.js` e `assets/js/site-config.js` validada com `node --check`
- ausência de CNPJ, CRC, número de clientes, cases, depoimentos, certificações ou resultados inventados
- ausência de promessas tributárias inadequadas

## Resultado

Nenhuma falha foi registrada na rodada automatizada final.

O arquivo detalhado da rodada está em:

`qa/results.json`

## Informações pendentes, sem invenção de dados

- número de WhatsApp
- telefone público
- domínio
- cidade
- endereço
- CNPJ, caso deva ser publicado
- CRC, caso deva ser publicado

Enquanto o WhatsApp permanece vazio, o formulário prepara um e-mail para `nilton@lncontabilidade.com`. Os botões principais levam ao formulário e nenhum número fictício aparece no projeto.

## Observação sobre links externos

Os links institucionais usados na seção da reforma tributária apontam para Receita Federal e Planalto. O Instagram aponta para `@contabilidadeln`. A disponibilidade futura de serviços externos depende dos respectivos provedores.

## Validação do pacote compactado

O pacote final criado é:

`LN-Contabilidade-Site-Final.zip`

O ZIP foi extraído em uma pasta temporária limpa e validado novamente em 22 de junho de 2026.

Resultado da validação do pacote: **5 de 5 verificações aprovadas**.

- estrutura obrigatória presente no ZIP
- `index.html` extraído por `file://` em 390 px e 1440 px
- `standalone/ln-contabilidade.html` extraído por `file://` em 390 px e 1440 px
- um H1 por página testada
- imagens carregadas, sem overflow horizontal e sem erros de console nos arquivos extraídos
