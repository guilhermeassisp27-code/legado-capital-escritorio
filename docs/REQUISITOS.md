# Requisitos de operação — Legado Capital

## Visão

Uma empresa privada que funciona por eventos e tarefas programadas 24/7 com SLAs e resultados reais, representada em um escritório virtual 3D que o CEO aprova e deseja preservar.

## Funções e dependências

| Cargo | Responsabilidade verificável | Ferramentas/condições | SLA proposto para aprovação, não ativo |
|---|---|---|---|
| COO / Diretor-Geral | Distribui tarefas e cobra SLAs; consolida prioridades e exceções para o CEO | Orquestrador, D1, filas e logs | Revisão a cada 30–60 min |
| CMO / Marketing | Estratégia da marca, conteúdo, calendário e diretrizes de comunicação | Editor de identidade, Canva, Instagram | Plano diário, revisão semanal |
| Designer / Criação | Gera artes compatíveis com marca e versão aprovada | Canva API com OAuth próprio ou outro renderizador autorizado | Produção por fila, prazo definido por tipo |
| Gestor de Tráfego | Cria/testa/mede/otimiza campanhas, com orçamento e políticas aprovados | Meta Marketing API, metas, eventos, permissões Ads | Monitoramento ~30 min; otimizações conforme critérios |
| CRO / Comercial | Gestão de pipeline, oportunidades, metas e produtividade | CRM, resultados Meta, SDR | Relatório diário e alertas por desvio |
| SDR / Prospecção | Captação, qualificação e agendamento; registra todas as interações | Meta Leads, WhatsApp Business API, CRM, consentimento | Resposta em até 5 minutos a leads autorizados |
| Atendimento / Pós-venda | Responde solicitações, registra casos e encaminha exceções | WhatsApp Business, CRM, política de atendimento | Definir por prioridade e horário de serviço |
| CFO / Financeiro | Controla despesas, receitas de comissão, previsão de caixa | Dados validados, integração contábil quando permitida | Reconciliação diária |
| CTO | Disponibilidade, incidentes e conexões | Workers, D1, observabilidade e integrações | Detecção rápida e escalonamento |
| RH / Qualidade | Avalia e cobra padrões das entregas | Histórico, métricas e trilha de avaliação | Revisão diária |
| Compliance | Revisa publicidade, consórcio e privacidade | Aprovações, regras, evidências | Gate antes de publicação ou contato sensível |

SLA = alvo **a ser validado** após medir limites técnicos, APIs e custos. Não declarar acordos de nível de serviço efetivos sem teste.

## Situação das conexões no momento da exportação

- Cloudflare Worker, Access e D1: infraestrutura configurada e privada.
- Workers AI: binding disponível; isso não equivale a funcionários autônomos.
- Meta Ads: relatório limitado dos últimos dias coletado via Windsor.ai no ChatGPT e gravado em D1 (tabela `bridge_meta_daily`), com automação de sincronização do ChatGPT **pausada por solicitação do CEO**.
- Canva: pasta privada 'LEGADO CAPITAL | Identidade e Conteúdos' criada na conta conectada no ChatGPT. Isso não autoriza o Worker a editar arquivos.
- Instagram, Facebook e Meta Ads: disponíveis em conectores do ChatGPT, mas **sem OAuth próprio testado no Worker**.
- WhatsApp e CRM comercial: sem integração comprovada no Worker.
- Financeiro: ainda possui controles locais do navegador, sem integração contábil.
- Cloudflare Cron `15 * * * *`: auditoria interna, não é conexão Meta/Canva.
- Três automações do ChatGPT (auditoria, sincronização, relatório): **pausadas** a pedido do CEO.
- **Zero garantia de publicação automatizada ou atendimento real até integrações e aprovações completas.**

## Arquitetura-alvo

1. **Orquestrador:** tarefas com autor, responsável, prioridade, SLA, status, tentativas, idempotência, dependências e registro de falhas. Cada atividade só sai do estado `done` quando há evidência verificável.
2. **Integrações específicas:** credenciais por plataforma armazenadas como Secrets/criptografadas e com escopo mínimo. Canva, Meta, Instagram, WhatsApp, CRM, quando tecnicamente autorizado.
3. **Política do CEO:** limites prévios de orçamento, privacidade, marca, aprovadores, canais e publicações. Ações fora do limite bloqueadas aguardando aprovação.
4. **Observabilidade:** status operacional de cada ferramenta, tempo da última ação, problemas de SLA e custo por execução.
5. **Interface existente:** preservar a cena 3D e associar personagens a tarefas e resultados reais (em vez de gerar novas abas de cartões).
6. **Produção controlada:** testes automatizados, prévia protegida, homologação com CEO, deploy apenas aprovado. Nenhum serviço pago habilitado automaticamente.

## Critérios de aceite para primeira versão operacional

- 3D continua funcional, fluido e reconhecível.
- Funcionários aparecem com dados verdadeiros: tarefa, origem, progresso, SLA e bloqueio.
- Uma campanha Meta pode ser **lida diretamente pelo Worker** com teste real, e posteriormente alterada sob política aprovada e verificação da alteração.
- Uma arte Canva pode ser criada/alterada por integração oficialmente autorizada, com arquivo e registro verificáveis.
- Novo lead chega e é registrado com consentimento, sem duplicação; SDR executa atendimento permitido e atualiza CRM.
- Histórico persistido, erros e atrasos evidenciados, sem dashboards decorativos.
- Nenhuma publicação, anúncio, contato ou gasto ocorre sem configuração e aprovação aplicável do CEO.

## Desenvolvimento seguro

Não realizar publicação automática. O código atual foi exportado para GitHub privado; o deploy de produção da Cloudflare fica intocado até autorização.
