# Davi Portella Advocacia

Landing page estatica premium para advocacia criminal e previdenciaria.

URL de producao: https://dr-davi-portella.vercel.app/

## Estrutura

- `index.html`: conteudo, SEO, links e areas clicaveis por cima dos templates.
- `style.css`: responsivo, animacoes, hotspots e ajustes visuais dos templates.
- `script.js`: menu mobile, FAQ, ticker animado e mensagens do WhatsApp.
- `assets/logo-davi-portella.png`: logo usada no topo mobile.
- `assets/templates/`: imagens finais numeradas da landing page.
- `vercel.json`: configuracao de deploy e cache na Vercel.

## Atualizar templates

Substitua os arquivos em `assets/templates/` mantendo exatamente os mesmos nomes:

1. `template-01-hero.png`
2. `template-02-primeiro-passo.png`
3. `template-03-criminal.png`
4. `template-04-diferenciais.png`
5. `template-05-etapas.png`
6. `template-06-inss.png`
7. `template-07-sobre.png`
8. `template-08-brasil.png`
9. `template-09-faq.png`

Use imagens na proporcao `1672 x 941` para manter os hotspots alinhados.

## Atualizar contatos

- WhatsApp: altere a constante `phone` em `script.js`.
- Mensagens por botao: edite o objeto `messages` em `script.js`.
- E-mail e Instagram: procure por `mailto:`, `proton.me` e `instagram.com` em `index.html`.
- SEO: atualize `title`, `description`, Open Graph e JSON-LD no topo do `index.html`.

## Validacao rapida

```bash
node --check script.js
```

Depois abra o site localmente e teste:

- menu mobile;
- FAQ abrindo e fechando;
- botoes de WhatsApp, e-mail e Instagram;
- hover dos cards;
- versao mobile.

## Deploy

O site e estatico. A Vercel publica direto a partir da raiz do projeto.
