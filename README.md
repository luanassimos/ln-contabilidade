# LN Contabilidade | Site final

Site institucional estático criado em HTML5, CSS3 e JavaScript puro. Não exige npm, build, servidor, CDN ou dependências externas para abrir.

## Abrir agora

1. Abra a pasta do projeto.
2. Dê dois cliques em `index.html`.
3. O site abrirá no navegador com imagens, estilos, menu, FAQ e formulário.

A versão de arquivo único está em:

`standalone/ln-contabilidade.html`

Ela incorpora CSS, JavaScript, favicons e imagens essenciais no próprio HTML. A standalone foi sincronizada com a versão principal na Fase 3 e também abre direto por `file://`.

## Publicar

Envie todo o conteúdo da pasta para a raiz da hospedagem, preservando a estrutura de diretórios. O arquivo inicial deve permanecer como `index.html`.

Estrutura principal:

```text
index.html
privacidade.html
assets/
brand/
preview/
qa/
standalone/
```

## Dados editáveis

Edite somente:

`assets/js/site-config.js`

Campos disponíveis:

```js
brandName
responsible
whatsapp
phone
emailPrimary
emailSecondary
instagramHandle
instagramUrl
city
address
domain
defaultMessage
```

O WhatsApp deve conter apenas números, com país e DDD. Na versão atual, o número confirmado é `5521981884335`, exibido como `(21) 98188-4335`.

A base de atendimento confirmada é Rio de Janeiro, RJ, com atendimento nacional. O domínio temporário usado para SEO é `https://ln-contabilidade.vercel.app`; troque esse valor pelo domínio final quando ele for definido.

O e-mail `nilton@lncontabilidade.com` permanece publicado porque já estava no projeto, mas ainda precisa de confirmação final antes do anúncio amplo do site.

## Alterar textos

Os textos institucionais estão diretamente em `index.html`. Isso garante que o conteúdo principal continue visível mesmo quando o JavaScript estiver desativado.

Depois de qualquer ajuste aprovado na página principal, regenere ou revise `standalone/ln-contabilidade.html` para manter as duas entregas alinhadas.

## Alterar cores e espaçamentos

O sistema visual está em:

`assets/css/styles.css`

As variáveis principais aparecem no início do arquivo, dentro de `:root`.

## Alterar a foto

Substitua os arquivos em `assets/img/`, mantendo os mesmos nomes e dimensões aproximadas:

```text
nilton-480.webp
nilton-720.webp
nilton-960.webp
nilton-1200.webp
nilton-960.jpg
```

A proporção usada no site é 4:5. A foto real do Nilton não foi alterada artificialmente nesta finalização.

## Logo e identidade

Os SVGs editáveis estão em `brand/` e `assets/logo/`.

O guia resumido está em:

`brand/guia-da-marca.md`

## Privacidade

A página `privacidade.html` descreve o funcionamento atual do formulário. O site não usa cookies, analytics, anúncios ou armazenamento próprio na versão entregue.

A política deve ser revisada antes de adicionar qualquer tecnologia de rastreamento, CRM, formulário com banco de dados ou automação.

## Reforma tributária

A seção foi redigida com base em fontes institucionais vigentes na data da entrega, incluindo orientações da Receita Federal para 2026 e a Lei Complementar nº 214/2025. Os links oficiais estão dentro da própria seção.

## Controle de qualidade

O relatório está em:

`qa/relatorio-de-testes.md`

A rodada de atualização de contato registrou a validação do WhatsApp real, telefone exibido, base de atendimento, domínio temporário da Vercel, `file://`, servidor local, standalone, responsividade, menu, FAQ, formulário com WhatsApp, acessibilidade básica e ausência de dados inventados.

## Fase 3

A Fase 3 refinou a landing page para aumentar percepção de autoridade, conversão e maturidade comercial sem inventar dados reais. As principais mudanças foram:

- hero mais direto sobre contabilidade empresarial, tributos, caixa e crescimento
- oferta inicial renomeada para análise inicial do cenário da empresa
- nova seção `O que a análise pode revelar`
- nova seção `O que você recebe`
- FAQ revisado para reduzir objeções sem prometer resultado
- ajustes de tablet, mobile e CTA flutuante

O arquivo `LN-Contabilidade-Site-Final.zip` existente pertence ao pacote final anterior e não foi regenerado nesta fase, porque ZIP não estava na lista de arquivos permitidos. Para publicar a versão Fase 3 em ZIP, gere um novo pacote a partir da pasta atual.
