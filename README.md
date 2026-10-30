# 📦 Sistema WM — Gestão de Vendas, Estoque e Entregas

![Next.js](https://img.shields.io/badge/Next.js-14-000000?logo=nextdotjs)
![React](https://img.shields.io/badge/React-18-149ECA?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![Status](https://img.shields.io/badge/status-MVP%20demonstrativo-orange)

> Aplicação web responsiva para simular a gestão de uma distribuidora de água e marmitaria: pedidos, clientes, produtos, estoque, entregas, fiado e relatórios.

## 🎯 Objetivo

Explorar o desenvolvimento de uma aplicação comercial com **Next.js, React e TypeScript**, reunindo fluxos de negócio em uma interface única. Projeto de estudo e portfólio, com foco em lógica, componentes e experiência do usuário.

## ✨ Funcionalidades implementadas no MVP

- **Dashboard:** indicadores de pedidos, faturamento e fiado.
- **Produtos:** cadastro e consulta por categoria.
- **Estoque:** quantidades disponíveis e alertas de estoque mínimo.
- **Clientes:** cadastro com telefone e endereço; acompanhamento de fiado.
- **Pedidos:** carrinho, cálculo do total, escolha de cliente e tipo de atendimento.
- **Pagamentos:** registro demonstrativo de Pix, dinheiro, cartão ou fiado.
- **Entregas:** acompanhamento e alteração do status do pedido.
- **Relatórios:** resumo de vendas, pedidos e formas de pagamento.
- **Layout responsivo:** uso em computador e celular.

## 🛠️ Tecnologias

| Tecnologia | Uso |
| --- | --- |
| Next.js 14 | Estrutura da aplicação |
| React 18 | Componentes e estado da interface |
| TypeScript | Tipagem do código |
| Tailwind CSS | Estilização responsiva |
| Lucide React | Ícones |

## ▶️ Como executar localmente

Requisitos: **Node.js 20 LTS** e npm.

```bash
git clone https://github.com/luanmarcioalvarenga-DevCp/sistema-wm.git
cd sistema-wm
npm install
npm run dev
```

Acesse **http://localhost:3000**.

Para gerar a versão de produção:

```bash
npm run build
npm start
```

## 🔎 Fluxos para explorar

1. Cadastre um produto e verifique sua exibição no estoque.
2. Cadastre um cliente.
3. Crie um pedido com produtos, quantidade, pagamento e entrega/retirada.
4. Acompanhe o pedido e altere seu status.
5. Consulte os indicadores e os relatórios.

## ⚠️ Limitações desta versão

Este repositório representa um **MVP de demonstração**, não um sistema pronto para operação comercial.

- Os dados ficam em **memória no navegador** e retornam aos valores de exemplo ao recarregar a página.
- **Não há autenticação real**, mesmo com estrutura visual para usuários.
- As formas de pagamento são **registros simulados**, sem transações financeiras reais.
- **NFC-e não é emitida**; exigiria integração fiscal.
- Não há banco de dados ou API de persistência implementados nesta versão.
- Os testes automatizados ainda não estão incluídos.

## 🧭 Próximos passos

- [ ] Adicionar persistência e validações de dados
- [ ] Implementar autenticação e autorização
- [ ] Criar testes unitários e de interface
- [ ] Melhorar regras de disponibilidade de estoque
- [ ] Publicar demonstração acessível online

## 👨‍💻 Portfólio

Projeto apresentado no portfólio de **Luan Márcio Alvarenga de Arruda**, estudante de Análise e Desenvolvimento de Sistemas.

[Conheça meu GitHub](https://github.com/luanmarcioalvarenga-DevCp)
