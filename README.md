# Legado Capital — Escritório virtual privado

Este repositório **privado** contém uma cópia do código atual do escritório da Legado Capital, preservada para desenvolvimento e testes com Codex.

## Situação desta cópia

- **Origem:** Cloudflare Worker `escritorio-virtual`, exportado em 28/10/2026.
- **Código original:** [`src/worker.mjs`](src/worker.mjs). A interface atual está embutida na constante `PAGE`, incluindo o escritório 3D e suas interações.
- **Produção:** `https://escritorio-virtual.guilherme-assisp27.workers.dev/`, restrita pelo Cloudflare Access.
- **Conta Cloudflare:** `71cf441cbc0672743ba897b8e59d2f54`; **D1:** `d900f663-bff7-46ea-b6ee-25ef49e42ef6`.
- **Bindings:** Workers AI (`AI`) e banco D1 (`DB`). O cron do Worker está configurado como `15 * * * *`.
- **Dados:** o repositório contém **código**, não o conteúdo privado das tabelas D1, nem credenciais OAuth/segredos de terceiros. Não pressupor que clonar o projeto reproduza o estado da produção.

**Importante:** o código foi copiado, não implantado. Fazer commits ou abrir PRs aqui **não** altera automaticamente o escritório em produção.

## Objetivo do produto

Criar uma **empresa virtual operacional 24/7**, com personagens do escritório 3D representando funções reais de IA, delegação e acompanhamento de tarefas, ferramentas conectadas, SLAs verificáveis, rastreabilidade e aprovação do CEO. A interface 3D **deve ser mantida** e melhorada sem ser substituída por dashboards genéricos.

Áreas planejadas: Direção-Geral/COO, Comercial/CRO, Marketing/CMO, Tráfego Pago, Criação/Canva, SDR e Prospecção, CRM, Atendimento, Financeiro/CFO, Tecnologia/CTO, RH e Compliance. Consulte [`docs/REQUISITOS.md`](docs/REQUISITOS.md) para condições reais de operação e lacunas existentes.

## Regras invioláveis

1. **Não apagar, esconder, substituir ou redesenhar o escritório 3D nem os funcionários existentes sem aprovação explícita.**
2. **Não fazer deploy/publicação de alterações no Worker de produção sem aprovação expressa do CEO.**
3. **Preservar Cloudflare Access privado, 1 endereço autorizado, e o conteúdo privado do D1.**
4. **Não contratar serviços pagos, ativar despesas, divulgar dados, enviar mensagens, publicar conteúdo ou alterar campanhas sem regras e autorizações aprovadas.**
5. **Não confundir integração ChatGPT/Windsor.ai com OAuth direto do Worker.** A ponte para D1 atualmente importa relatórios, não oferece execução autônoma em Canva/Meta/Instagram.
6. **Não fingir funcionários operacionais, leads, faturamento, vendas ou resultados.** Comprovar integrações e execução por ferramenta antes de alterar status.
7. **Não confundir créditos vendidos com receita de comissões.** Meta informada: R$ 500 mil em **crédito vendido/mês**; limite informado para ferramentas: R$ 500/mês, incluindo ChatGPT Plus.
8. **Não publicar logotipos não oficiais da Ademicon.** Co-branding e aprovação visual dependem do CEO e da licença apropriada.

## Como trabalhar no Codex

- Usar este repositório e criar branch/PR; nunca editar a produção durante o desenvolvimento.
- Começar executando `npm run check` e `npm test`, depois mapear erros concretos e criar testes de regressão.
- Separar com cuidado HTML/CSS/JS do Worker, criando módulos com diffs pequenos e testes que confirmem o comportamento existente.
- Priorizar operação real, conexões verificadas, fila de tarefas, SLAs, aprovações e desempenho da cena 3D. Evitar adicionar mais áreas decorativas ou dashboards de auditoria.
- Mostrar evidências e limitações. Se o teste depende de sessão Cloudflare Access, marque-o como **não testado** até conseguir sessão autorizada.
- Consulte [`AGENTS.md`](AGENTS.md) para as diretrizes dos agentes de desenvolvimento.

## Comandos locais (para o Codex)

```bash
npm run check
npm test
```

Esses comandos não implantam nada e não usam credenciais da Cloudflare.
