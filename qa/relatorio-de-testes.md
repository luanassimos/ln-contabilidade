# Relatório de testes

Data da validação: 22 de junho de 2026

Fase validada: Atualização de contato e localização

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

## Verificações executadas

- existência dos arquivos principais
- ausência de npm, build, framework e dependências externas
- WhatsApp real configurado em `assets/js/site-config.js`
- telefone público exibido como `(21) 98188-4335`
- base de atendimento Rio de Janeiro, RJ
- atendimento nacional informado sem endereço completo
- URL temporária da Vercel usada como domínio provisório
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
- formulário preenchido acionando WhatsApp com mensagem pré-preenchida
- foco visível e navegação inicial por teclado
- standalone com um H1, imagens carregadas e sem overflow
- política de privacidade acessível
- sintaxe de `assets/js/main.js` e `assets/js/site-config.js` validada com `node --check`
- ausência de CNPJ, CRC, número de clientes, cases, depoimentos, certificações ou resultados inventados
- ausência de promessas tributárias inadequadas

## Resultado

Nenhuma falha foi registrada na rodada automatizada da Fase 3.

O arquivo detalhado da rodada está em:

`qa/results.json`

## Alterações cobertas pela Fase 3

- hero mais direto sobre atuação contábil, tributária e financeira
- oferta inicial mais tangível, nomeada como análise inicial do cenário da empresa
- nova seção `O que a análise pode revelar`
- nova seção `O que você recebe`
- FAQ refinado para reduzir objeções sem criar promessa de resultado
- ajuste do header em tablet
- CTA flutuante mobile menos intrusivo
- standalone e previews sincronizados

## Informações confirmadas nesta rodada

- WhatsApp: `5521981884335`
- telefone exibido: `(21) 98188-4335`
- base de atendimento: Rio de Janeiro, RJ
- atendimento: nacional
- Instagram: `@contabilidadeln`
- domínio temporário: `https://ln-contabilidade.vercel.app`

## Informações pendentes, sem invenção de dados

- domínio final
- confirmação final do e-mail principal `nilton@lncontabilidade.com`
- confirmação de que `leonardo@lncontabilidade.com` deve permanecer público
- endereço completo, caso exista local de atendimento público
- CNPJ, caso deva ser publicado
- CRC, caso deva ser publicado

Com o WhatsApp configurado, os CTAs principais abrem `wa.me/5521981884335` com mensagem inicial. O formulário preenchido também abre o WhatsApp com a mensagem preparada. O e-mail `nilton@lncontabilidade.com` permanece publicado temporariamente porque já existia no projeto, mas ainda precisa de confirmação final.

## Observação sobre pacote compactado

O arquivo `LN-Contabilidade-Site-Final.zip` existente não foi regenerado na Fase 3 porque ZIP não estava na lista de arquivos permitidos para alteração. Caso a entrega final precise ser distribuída em ZIP depois desta fase, gere um novo pacote a partir da pasta atual.
