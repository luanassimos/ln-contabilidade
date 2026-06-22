# Checklist de publicação

## Dados obrigatórios antes de anunciar o site

- [ ] Inserir o WhatsApp real em `assets/js/site-config.js`
- [ ] Inserir o telefone público, caso seja diferente do WhatsApp
- [ ] Confirmar que `nilton@lncontabilidade.com` é o e-mail principal
- [ ] Confirmar que `leonardo@lncontabilidade.com` deve permanecer público
- [ ] Confirmar o Instagram `@contabilidadeln`

## Domínio e SEO

- [ ] Informar o domínio real em `assets/js/site-config.js`
- [ ] Adicionar uma tag canonical absoluta ao `index.html` depois de definir o domínio
- [ ] Trocar o caminho relativo de `og:image` por uma URL absoluta depois de definir o domínio
- [ ] Testar o compartilhamento no WhatsApp, LinkedIn e Facebook depois da publicação
- [ ] Configurar HTTPS
- [ ] Criar redirecionamento entre versões com e sem `www`, se aplicável

## Informações institucionais opcionais

- [ ] Inserir cidade apenas se houver interesse comercial em divulgá-la
- [ ] Inserir endereço apenas se for um local de atendimento público
- [ ] Adicionar CNPJ somente depois de confirmação
- [ ] Adicionar CRC somente depois de confirmação do número e da forma correta de exibição

## Formulário

- [x] Validar bloqueio de envio com campos vazios
- [x] Validar envio preenchido com fallback por e-mail enquanto o WhatsApp está vazio
- [ ] Fazer um envio real no celular depois de configurar o WhatsApp
- [ ] Conferir a mensagem pré-preenchida no WhatsApp real, se o número for configurado
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
- [x] Confirmar ausência de overflow horizontal nas larguras 360 px, 390 px, 768 px, 1440 px e desktop amplo
- [x] Confirmar ausência de erros de console na rodada automatizada final
- [x] Criar e validar `LN-Contabilidade-Site-Final.zip` extraído em pasta temporária
- [ ] Testar em celular real depois da publicação
- [ ] Limpar o cache da hospedagem ou CDN após atualizações, se houver CDN

## Conteúdo futuro

- [ ] Substituir ou complementar a seção de autoridade apenas com dados comprováveis
- [ ] Não publicar depoimentos, clientes, percentuais ou resultados sem autorização e evidência
- [ ] Revisar a seção da reforma tributária sempre que houver mudança normativa relevante
