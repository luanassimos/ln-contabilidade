# Checklist de publicação

## Dados obrigatórios antes de anunciar o site

- [x] Inserir o WhatsApp real em `assets/js/site-config.js`: `5521981884335`
- [x] Inserir o telefone público: `(21) 98188-4335`
- [x] Inserir base de atendimento: Rio de Janeiro, RJ
- [x] Registrar atendimento nacional
- [ ] Confirmar que `nilton@lncontabilidade.com` é o e-mail principal
- [ ] Confirmar que `leonardo@lncontabilidade.com` deve permanecer público
- [x] Confirmar o Instagram `@contabilidadeln`

## Domínio e SEO

- [ ] Definir o domínio final
- [x] Informar a URL temporária da Vercel em `assets/js/site-config.js`: `https://ln-contabilidade.vercel.app`
- [x] Adicionar uma tag canonical absoluta temporária ao `index.html`
- [x] Trocar o caminho relativo de `og:image` por URL absoluta temporária da Vercel
- [ ] Trocar `https://ln-contabilidade.vercel.app` pelo domínio final em `assets/js/site-config.js`, `index.html`, `standalone/ln-contabilidade.html`, README e materiais de publicação assim que o domínio definitivo for definido
- [ ] Testar o compartilhamento no WhatsApp, LinkedIn e Facebook depois da publicação
- [ ] Configurar HTTPS
- [ ] Criar redirecionamento entre versões com e sem `www`, se aplicável

## Informações institucionais opcionais

- [x] Inserir cidade/base confirmada: Rio de Janeiro, RJ
- [ ] Inserir endereço apenas se for um local de atendimento público
- [ ] Adicionar CNPJ somente depois de confirmação
- [ ] Adicionar CRC somente depois de confirmação do número e da forma correta de exibição

## Formulário

- [x] Validar bloqueio de envio com campos vazios
- [x] Validar envio preenchido abrindo WhatsApp com mensagem pré-preenchida
- [ ] Fazer um envio real no celular pelo WhatsApp
- [x] Conferir a URL de WhatsApp gerada com o número real
- [ ] Confirmar quem responderá aos contatos recebidos
- [ ] Definir tempo interno de resposta

## Privacidade

- [x] Confirmar que a política está acessível em `privacidade.html`
- [x] Confirmar que o texto atual não promete cookies, analytics ou armazenamento que não existem
- [ ] Revisar a política antes de instalar Google Analytics, Meta Pixel, CRM ou formulário com backend
- [ ] Adicionar banner de consentimento somente se houver tecnologia que realmente o exija

## Hospedagem

- [x] Sincronizar `standalone/ln-contabilidade.html` com a página principal final
- [x] Gerar previews finais em `preview/desktop.png`, `preview/tablet.png` e `preview/mobile.png`
- [x] Testar `index.html` por `file://`
- [x] Testar `index.html` por servidor local
- [x] Testar `standalone/ln-contabilidade.html` por `file://`
- [x] Testar `privacidade.html`
- [x] Testar links internos, menu desktop, menu mobile e FAQ
- [x] Confirmar crédito oficial da KNAR no footer com backlink para `https://knar.io/`
- [x] Confirmar ausência de overflow horizontal nas larguras 360 px, 390 px, 768 px e 1440 px
- [x] Confirmar ausência de erros de console na rodada automatizada da Fase 3
- [ ] Regenerar `LN-Contabilidade-Site-Final.zip` caso a entrega final precise ser enviada em ZIP após a Fase 3
- [ ] Testar em celular real depois da publicação
- [ ] Limpar o cache da hospedagem ou CDN após atualizações, se houver CDN

## Fase 3

- [x] Tornar o hero mais direto e comercial
- [x] Substituir o uso genérico de diagnóstico por análise inicial do cenário da empresa
- [x] Adicionar seção `O que a análise pode revelar`
- [x] Adicionar seção `O que você recebe`
- [x] Refinar FAQ para reduzir objeções sem exagero comercial
- [x] Ajustar header em tablet e CTA flutuante mobile
- [x] Sincronizar standalone, previews, QA e documentação

## Conteúdo futuro

- [ ] Substituir ou complementar a seção de autoridade apenas com dados comprováveis
- [ ] Não publicar depoimentos, clientes, percentuais ou resultados sem autorização e evidência
- [ ] Revisar a seção da reforma tributária sempre que houver mudança normativa relevante
