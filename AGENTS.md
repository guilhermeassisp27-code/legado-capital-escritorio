# Instruções ao Codex — Legado Capital

Você está trabalhando em um sistema **real**, não em um protótipo de chatbot. Trate a base em `src/worker.mjs` como fonte de verdade para o estado atual do escritório privado, não como autorização para refazer seu design.

## O que foi explicitamente solicitado

- **Manter o escritório 3D e os funcionários existentes.** O CEO gosta do conceito; quer performance, estética e funcionamento melhores. Substituir o 3D por cards, esconder personagens ou recriar a navegação sem autorização é erro.
- Empresa completa: Direção-Geral, Marketing, Comercial, Tráfego Pago, SDR, Criação Canva, Instagram, Atendimento WhatsApp, CRM, Financeiro, Compliance, RH, Tecnologia. Os funcionários devem delegar atividades e produzir resultados por ferramentas, em rotinas 24/7.
- Cada cargo com SLA específico, dependências claras, orquestração, persistência, retomada/retry, provas de execução e aprovação quando obrigatória.
- Integrar ferramentas diretamente por OAuth/APIs oficiais; as conexões ao ChatGPT não fornecem tokens transferíveis. A ponte de leitura ChatGPT → D1 existe para indicadores, não substitui APIs de escrita.
- Priorizar entregáveis verificáveis, não textos genéricos, personagens que apenas conversam ou dashboards decorativos.

## Restrições

- **Sem deploy, publicação, liberação do Access, postagem, mensagens, campanhas ou gasto** sem autorização explícita aplicável.
- Criar commits/PRs privados e testes automatizados. Não confundir deploy de teste com produção.
- Não modificar `wrangler.toml` para remover AI/DB, mudar contas, desproteger domínio ou habilitar planos pagos.
- Nunca gravar segredos, tokens, dados pessoais de leads ou sessões no Git.
- Para dados de campanhas, informar janela temporal, fonte, atualização e distinguir clique, lead atribuído, conversa real, reunião e venda.
- Não inventar condições de consórcio, contemplação garantida ou rentabilidade.

## Protocolo de desenvolvimento

1. Ler README, requisitos e o Worker exportado.
2. Tirar baseline de sintaxe e inventário de rotas/eventos do código sem reformatar o arquivo monolítico inteiro.
3. Criar testes de regressão dos fluxos existentes (cenas, menus, jornada, editor de marca, APIs, aprovação e segurança). Falta de navegador autenticado = teste visual não verificado.
4. Propor mudanças pequenas isoladas. Antes de mexer em animação/Canvas, medir custo: reduzir animação em abas não visíveis, usar `devicePixelRatio` com limite, economizar redraws sem destruir a experiência.
5. Implementar backend de tarefas e ferramentas por função com fila, `job_id`, status, logs, deduplicação, SLA e aprovação antes de ações externas. Integrar uma plataforma real por vez, com token guardado em Worker Secret e teste de leitura/escrita controlado.
6. Reexecutar testes e apresentar diff, efeitos, métricas, regressões, falhas e o que depende de permissão.
7. Solicitar aprovação para deploy, até lá trabalhar apenas no repositório.

## Condição de pronto

Uma função de IA só pode constar como **operacional** após um teste real de execução fim a fim com a plataforma exigida, output persistido e retorno/erro audível. Uma simples persona, modelo conectado ou D1 com status não constitui funcionário operacional.
