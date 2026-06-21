# Relatório de testes

Data da validação: 21 de junho de 2026

Navegador de teste: Chromium 144.0.7559.96

Resultado automatizado: **170 de 170 verificações aprovadas**.

## Ambientes validados

- abertura direta do `index.html` pelo protocolo `file://`
- abertura em servidor HTTP local
- versão independente `standalone/ln-contabilidade.html` pelo protocolo `file://`
- página `privacidade.html` pelo protocolo `file://`

## Larguras testadas

- 320 px
- 360 px
- 375 px
- 390 px
- 430 px
- 768 px
- 1440 px
- 1920 px

## Verificações executadas

- carregamento da página
- título e H1
- ausência de erros no console
- ausência de respostas HTTP 4xx e 5xx para recursos locais
- ausência de overflow horizontal
- carregamento das imagens
- existência dos destinos de âncoras internas
- abertura e fechamento do menu mobile
- abertura do FAQ
- bloqueio de envio com campos vazios
- mensagens de validação acessíveis
- fallback de e-mail enquanto o WhatsApp está sem número
- abertura da versão standalone
- imagem incorporada no standalone
- responsividade da política de privacidade
- sintaxe dos arquivos JavaScript com `node --check`
- referências relativas e existência dos arquivos locais
- IDs duplicados
- associação entre labels e campos

## Resultado

Nenhuma falha foi registrada na rodada automatizada final.

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

O arquivo `LN-Contabilidade-Site-Final.zip` foi extraído em uma pasta limpa e validado novamente em quatro cenários:

- `index.html` por `file://`
- `index.html` por HTTP local
- `standalone/ln-contabilidade.html` por `file://`
- `privacidade.html` por `file://`

Os quatro cenários carregaram sem erros de console, sem overflow horizontal e com os recursos principais disponíveis.
