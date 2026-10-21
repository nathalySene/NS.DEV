# NS.DEV — Portfólio de Nathaly Sene

Portfólio e cartão de visita digital em React, TypeScript, Vite e Tailwind CSS v4.

## Requisitos
- Node.js 20.19+ ou 22.12+

## Iniciar no Windows (PowerShell)
```powershell
cd ns-dev-portfolio
npm install
npm run dev
```
Abra o endereço local mostrado no terminal (normalmente http://localhost:5173).

## Compilar
```powershell
npm run build
npm run preview
```

## Personalizar antes de publicar
1. Edite `src/data/portfolio.ts`: e-mail, LinkedIn e WhatsApp (opcionais).
2. Revise descrições de competências e projetos. Não declare experiência que você não possui.
3. Substitua o card "Seu próximo projeto" por um projeto real.
4. Adicione sua foto, currículo ou outros materiais apenas se desejar.
5. Faça o deploy da pasta no GitHub e importe o repositório na Vercel (framework Vite; build `npm run build`; saída `dist`).

O botão **Salvar contato** gera um arquivo `.vcf` usando as informações preenchidas no perfil. Os links vazios de contato não aparecem no site.

## Estrutura
- `src/App.tsx`: seções e componentes da página
- `src/data/portfolio.ts`: conteúdo editável
- `src/styles.css`: identidade visual e responsividade
- `vite.config.ts`: React e Tailwind

## Observações
O projeto não possui formulário com armazenamento de dados nem backend. Os links de contato são opcionais e devem ser preenchidos por você. Fontes do Google exigem acesso à internet.

## Contatos e redes sociais

Edite `src/data/portfolio.ts` e preencha `whatsapp`, `instagram`, `linkedin` e, se desejar, `email`.

- `whatsapp`: somente números, com DDI 55 e DDD (ex.: `5511999999999`). O botão abre uma conversa com mensagem inicial.
- `instagram`: endereço completo, como `https://www.instagram.com/seuusuario/`.
- `linkedin`: endereço completo, como `https://www.linkedin.com/in/seuperfil/`.
- Campos vazios não geram links quebrados: os respectivos cartões ficam ocultos até serem preenchidos.
- O botão **Salvar contato** também inclui os dados preenchidos no arquivo vCard.

Não publique seu número pessoal se não quiser receber mensagens de desconhecidos.

## Projeto AWS no portfólio
A seção de projetos inclui o **SuporteHub — Help Desk na AWS** com link para https://github.com/nathalySene/AWS.

## Contato por WhatsApp
Ao clicar no cartão do WhatsApp, o visitante pode editar uma mensagem em uma caixa de diálogo dentro do portfólio. O botão **Continuar no WhatsApp** abre `wa.me` com o texto preenchido. A mensagem **não é enviada automaticamente**; o visitante confirma o envio no WhatsApp.
