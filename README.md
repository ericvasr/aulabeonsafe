# 🛡️ Projeto de Aula: Beonsafe - Dashboard Colaborativo

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/n8n-FF6D6D?style=for-the-badge&logo=n8n&logoColor=white" alt="n8n">
  <img src="https://img.shields.io/badge/NocoDB-0078D4?style=for-the-badge&logo=database&logoColor=white" alt="NocoDB">
</p>

---

## 🎯 Sobre o Projeto

O **Beonsafe** é um sistema colaborativo de dashboard para monitoramento de segurança em tempo real. Desenvolvido por alunos usando **n8n** (VPS) para automações, **NocoDB** (VPS) como banco de dados, e interface em **HTML/JavaScript** com as cores da Beonsafe (Pantone Verde).

### 🚀 Funcionalidades Principais

- 🤖 **Automações com n8n** (já rodando na VPS)
- 🗄️ **NocoDB** como banco de dados visual (já rodando na VPS)
- 📊 **Dashboard interativo** com métricas ao vivo
- 🎨 **Interface moderna** com design Beonsafe
- 👥 **Sistema modular** para desenvolvimento colaborativo

---

## 🏗️ Arquitetura do Sistema

```
┌─────────────────┐   🤖    ┌─────────────────┐   🗄️    ┌─────────────────┐    🎨   ┌─────────────────┐
│   APIs Externas │ ──────► │      n8n        │ ──────► │     NocoDB      │ ──────► │   Dashboard     │
│   (Webhooks)    │         │   (Automação)   │         │   (Database)    │         │ (HTML/JS)       │
└─────────────────┘         └─────────────────┘         └─────────────────┘         └─────────────────┘
```

### 📁 Estrutura de Arquivos

- **`index.html`** - Interface visual do dashboard
- **`aulajs.js`** - Sistema JavaScript para conectar com APIs
- **`workflows/`** - Workflows do n8n (arquivos JSON)
- **`database/`** - Estruturas e configurações do NocoDB
- **`README.md`** - Este arquivo com todas as instruções

---

## 🗺️ Mapa do Projeto - Como Tudo se Conecta

### 1️⃣ **n8n** (Cérebro das Automações) - 🌐 **Já rodando na VPS**

- Recebe dados de APIs externas
- Processa e transforma os dados
- Envia dados organizados para o NocoDB
- Dispara notificações e alertas

### 2️⃣ **NocoDB** (Banco de Dados Visual) - 🌐 **Já rodando na VPS**

- Armazena todos os dados de segurança
- Interface visual para visualizar tabelas
- API REST automática para conectar com dashboard
- Relatórios e consultas simples

### 3️⃣ **Dashboard** (Interface do Usuário) - 💻 **Local (Windows)**

- Mostra dados em tempo real
- Interface bonita com cores Beonsafe
- Gráficos e métricas visuais
- Controle e monitoramento

---

## 👥 Distribuição de Tarefas por Aluno

### 🤖 **Aline - n8n Analytics & Automações**

**Responsabilidade:** Criar workflows no n8n (VPS) para processar dados e gerar relatórios

#### 🎯 Tarefas Específicas:

1. **Workflow de Coleta de Dados**

   - Criar workflow para receber webhooks de segurança
   - Processar dados de diferentes APIs
   - Filtrar e organizar informações importantes

2. **Automação de Relatórios**

   - Workflow para gerar relatórios diários
   - Envio automático por email
   - Alertas para eventos críticos

3. **Dashboard Analytics**
   - Workflow para calcular métricas (médias, totais)
   - Integração com APIs de gráficos
   - Dados em tempo real para o dashboard

#### 📋 Como executar:

**PASSO 1 - Acessar n8n na VPS**

```
URL: http://seu-ip-vps:5678
Login: (credenciais fornecidas pelo professor)
```

**PASSO 2 - Criar seus workflows**

1. Fazer login no n8n da VPS
2. Criar novo workflow: "Aline-Analytics"
3. Usar nós: Webhook, HTTP Request, NocoDB, Email
4. Configurar endpoint: `/webhook/aline-analytics`

**PASSO 3 - Estrutura do Workflow**

```
Webhook → Filtrar Dados → Processar → NocoDB → Email/Notificação
```

**PASSO 4 - Salvar e Testar**

1. Salvar workflow com nome claro
2. Ativar workflow
3. Testar com dados de exemplo
4. Documentar URLs dos webhooks

**PASSO 5 - Desenvolvimento Local (Windows)**

```cmd
# Criar pasta para arquivos de apoio
mkdir C:\Beonsafe-Dev\aline-analytics
# Criar arquivos de documentação e configuração
```

---

### 🗄️ **Braian - NocoDB Estrutura & Segurança**

**Responsabilidade:** Configurar banco de dados no NocoDB (VPS) e estruturas de dados

#### 🎯 Tarefas Específicas:

1. **Estrutura do Banco**

   - Criar tabelas para usuários, logs, alertas
   - Definir relacionamentos entre tabelas
   - Configurar campos e validações

2. **Sistema de Usuários**

   - Tabela de usuários com níveis de acesso
   - Sistema de login simples
   - Controle de permissões por módulo

3. **Logs de Segurança**
   - Tabela para armazenar todos os eventos
   - Histórico de ações dos usuários
   - Relatórios de segurança

#### 📋 Como executar:

**PASSO 1 - Acessar NocoDB na VPS**

```
URL: http://seu-ip-vps:8080
Login: (credenciais fornecidas pelo professor)
```

**PASSO 2 - Criar estrutura de dados**

1. Fazer login no NocoDB da VPS
2. Criar novo projeto: "Beonsafe-Database"
3. Criar tabelas essenciais:

**Tabela: `usuarios`**

- id (AutoNumber)
- nome (SingleLineText)
- email (Email)
- nivel_acesso (SingleSelect: admin, user, viewer)
- data_criacao (DateTime)
- ativo (Checkbox)

**Tabela: `logs_seguranca`**

- id (AutoNumber)
- tipo_evento (SingleSelect: login, logout, alert, error)
- descricao (LongText)
- timestamp (DateTime)
- usuario_id (LinkToAnotherRecord → usuarios)
- ip_origem (SingleLineText)

**Tabela: `alertas`**

- id (AutoNumber)
- nivel (SingleSelect: baixo, medio, alto, critico)
- titulo (SingleLineText)
- mensagem (LongText)
- resolvido (Checkbox)
- data_criacao (DateTime)
- responsavel_id (LinkToAnotherRecord → usuarios)

**Tabela: `metricas_sistema`**

- id (AutoNumber)
- tipo_metrica (SingleSelect: conexoes, requests, cpu, memoria)
- valor (Number)
- unidade (SingleLineText)
- data_registro (DateTime)

**PASSO 3 - Configurar API**

1. Ir em "Team & Settings" no NocoDB
2. Gerar "API Token"
3. Configurar permissões de API

**PASSO 4 - Desenvolvimento Local (Windows)**

```cmd
# Criar pasta para configurações
mkdir C:\Beonsafe-Dev\braian-database
# Salvar configurações de API
# Criar scripts de teste
```

---

### 🌐 **Kauã - Integração n8n + NocoDB + Dashboard**

**Responsabilidade:** Conectar n8n (VPS) com NocoDB (VPS) e criar APIs para o dashboard

#### 🎯 Tarefas Específicas:

1. **Workflow de Integração**

   - Conectar workflows do n8n com NocoDB
   - Inserir dados automaticamente nas tabelas
   - Sincronização em tempo real

2. **API para Dashboard**

   - Criar endpoints usando n8n
   - Fornecer dados para o dashboard HTML
   - Sistema de webhooks para atualizações

3. **Processamento de Dados**
   - Workflow para limpar e validar dados
   - Transformar dados antes de salvar
   - Sistema de cache para performance

#### 📋 Como executar:

**PASSO 1 - Workflow de Integração (n8n VPS)**

1. Acessar n8n: `http://seu-ip-vps:5678`
2. Criar workflow: "Kaua-Integration"
3. Configurar nós:
   - **Webhook** (receber dados)
   - **Function** (processar dados)
   - **NocoDB** (salvar dados)
   - **Respond to Webhook** (responder ao dashboard)

**PASSO 2 - Endpoints para Dashboard**
Criar workflows para cada endpoint:

**Endpoint 1: `/webhook/dashboard-data`**

```
Webhook → NocoDB (Get) → Function (format) → Response
```

**Endpoint 2: `/webhook/save-data`**

```
Webhook → Validate → NocoDB (Insert) → Response
```

**Endpoint 3: `/webhook/alerts`**

```
Webhook → NocoDB (Get alerts) → Format → Response
```

**PASSO 3 - Configuração Local (Windows)**

```cmd
# Criar pasta de desenvolvimento
mkdir C:\Beonsafe-Dev\kaua-integration

# Criar arquivo de configuração
# endpoints.json com URLs dos webhooks
```

**PASSO 4 - Atualizar Dashboard JavaScript**
Modificar `aulajs.js` para conectar com VPS:

```javascript
const VPS_BASE_URL = "http://seu-ip-vps:5678";
const ENDPOINTS = {
  getData: "/webhook/dashboard-data",
  saveData: "/webhook/save-data",
  getAlerts: "/webhook/alerts",
};
```

---

### 💾 **Elcio - Backup e Monitoramento**

**Responsabilidade:** Sistema de backup automático e monitoramento da VPS

#### 🎯 Tarefas Específicas:

1. **Backup Automático**

   - Workflow no n8n para backup diário do NocoDB
   - Exportar dados para arquivos
   - Armazenar backups em local seguro

2. **Monitoramento de Sistema**

   - Verificar se n8n e NocoDB estão funcionando
   - Alertas quando sistema está offline
   - Métricas de performance da VPS

3. **Relatórios de Status**

   - Relatório diário de funcionamento
   - Estatísticas de uso do sistema
   - Log de erros e problemas

#### 📋 Como executar:

**PASSO 1 - Workflow de Backup (n8n VPS)**

1. Acessar n8n: `http://seu-ip-vps:5678`
2. Criar workflow: "Elcio-Backup-System"
3. Configurar:
   - **Cron** (Schedule: todo dia às 02:00)
   - **NocoDB** (Export data)
   - **HTTP Request** (salvar em storage)
   - **Email** (confirmar backup)

**PASSO 2 - Monitoramento**
Criar workflow: "Elcio-Monitor"

```
Schedule (5min) → HTTP (test n8n) → HTTP (test NocoDB) →
IF (error) → Email (alert) → NocoDB (log error)
```

**PASSO 3 - Dashboard de Status**
Criar página local para monitorar:

```cmd
mkdir C:\Beonsafe-Dev\elcio-monitoring
# Criar monitor.html para acompanhar status
```

**PASSO 4 - Script de Verificação**
Criar `monitor.js` para verificar:

- Status do n8n (VPS)
- Status do NocoDB (VPS)
- Tempo de resposta
- Última atualização de dados

---

### 🎨 **Alessandra - Interface e Design**

**Responsabilidade:** Melhorar interface HTML/CSS local e experiência do usuário

#### 🎯 Tarefas Específicas:

1. **Design Responsivo**

   - Interface que funciona no celular
   - Melhorar cores e tipografia
   - Animações suaves e bonitas

2. **Componentes Visuais**

   - Gráficos com Chart.js conectados à VPS
   - Cards informativos
   - Botões e formulários estilizados

3. **Experiência do Usuário**

   - Navegação fácil e intuitiva
   - Feedback visual para ações
   - Temas claro e escuro

#### 📋 Como executar:

**PASSO 1 - Ambiente de Desenvolvimento (Windows)**

```cmd
# Criar estrutura de arquivos
mkdir C:\Beonsafe-Dev\alessandra-design
mkdir C:\Beonsafe-Dev\alessandra-design\styles
mkdir C:\Beonsafe-Dev\alessandra-design\components
mkdir C:\Beonsafe-Dev\alessandra-design\assets
```

**PASSO 2 - Estrutura de Arquivos**

```
alessandra-design/
├── styles/
│   ├── main.css
│   ├── responsive.css
│   ├── themes.css
│   └── dashboard.css
├── components/
│   ├── cards.css
│   ├── charts.css
│   ├── buttons.css
│   └── forms.css
├── assets/
│   ├── images/
│   └── icons/
└── js/
    ├── charts.js
    ├── animations.js
    └── responsive.js
```

**PASSO 3 - Conectar com VPS**
Atualizar dashboard para buscar dados reais:

```javascript
// Conectar gráficos com dados da VPS
async function loadChartData() {
  const response = await fetch("http://seu-ip-vps:5678/webhook/dashboard-data");
  const data = await response.json();
  // Criar gráficos com dados reais
}
```

**PASSO 4 - Gráficos Interativos**

```html
<!-- Adicionar Chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<!-- Criar gráficos conectados com NocoDB -->
```

---

## 🚀 Como Iniciar o Projeto

### 📋 **Informações da VPS (fornecidas pelo professor)**

```
🤖 n8n: http://seu-ip-vps:5678
🗄️ NocoDB: http://seu-ip-vps:8080
👤 Usuários e senhas: (fornecidos individualmente)
```

### 💻 **Setup Local (Windows)**

**PASSO 1 - Baixar o Projeto**

```cmd
# Opção 1: Baixar ZIP do GitHub
1. Ir em: https://github.com/ericvasr/aulabeonsafe
2. Clicar em "Code" → "Download ZIP"
3. Extrair para: C:\Beonsafe-Local\

# Opção 2: Git (se instalado)
git clone https://github.com/ericvasr/aulabeonsafe.git C:\Beonsafe-Local\
```

**PASSO 2 - Configurar Dashboard**

```cmd
cd C:\Beonsafe-Local\aulabeonsafe\
# Editar aulajs.js com IP da VPS
# Abrir index.html no navegador
```

**PASSO 3 - Criar Pasta Pessoal**

```cmd
mkdir C:\Beonsafe-Dev\seu-nome-modulo
# Trabalhar nos seus arquivos aqui
```

---

## 🔧 URLs e Endpoints Importantes

### **VPS - Serviços Principais**

- 🤖 **n8n**: `http://seu-ip-vps:5678`
- 🗄️ **NocoDB**: `http://seu-ip-vps:8080`

### **Endpoints dos Alunos (a serem criados)**

- 📊 **Aline**: `http://seu-ip-vps:5678/webhook/aline-analytics`
- 🗄️ **Braian**: API Token no NocoDB
- 🌐 **Kauã**: `http://seu-ip-vps:5678/webhook/dashboard-data`
- 💾 **Elcio**: `http://seu-ip-vps:5678/webhook/system-status`
- 🎨 **Alessandra**: Dashboard local conectado à VPS

### **Comandos para Teste**

```javascript
// No console do browser (F12):
updateMyModule("seu_nome", "development");
sendCustomWebhook("teste", "Mensagem do " + "seu_nome");
```

---

## 📝 Cronograma do Projeto

| Semana | Módulo                 | Responsável | Entrega         |
| ------ | ---------------------- | ----------- | --------------- |
| 1-2    | Estrutura Base         | Todos       | ✅ Concluído    |
| 3-4    | Workflows n8n          | Aline       | 🔄 Em andamento |
| 3-4    | Estrutura NocoDB       | Braian      | 🔄 Em andamento |
| 5-6    | Integração VPS + Local | Kauã        | ⏳ Aguardando   |
| 5-6    | Backup & Monitoramento | Elcio       | ⏳ Aguardando   |
| 7-8    | Interface Final        | Alessandra  | ⏳ Aguardando   |

---

## 🎨 Guia de Cores Beonsafe

```css
:root {
  --beonsafe-green: #2e8b57; /* Verde principal */
  --beonsafe-light-green: #90ee90; /* Verde claro */
  --beonsafe-dark-green: #1f5f3f; /* Verde escuro */
  --text-primary: #333333; /* Texto principal */
  --text-secondary: #666666; /* Texto secundário */
}
```

---

## 🆘 Problemas Comuns e Soluções

### ❌ **"Não consigo acessar a VPS"**

1. Verificar se IP está correto
2. Verificar se portas 5678 e 8080 estão abertas
3. Contatar professor para credenciais

### ❌ **"Dashboard não carrega dados"**

1. Verificar se n8n está rodando na VPS
2. Verificar se NocoDB está rodando na VPS
3. Verificar console do navegador (F12) para erros
4. Verificar se endpoints estão configurados

### ❌ **"Workflow não funciona"**

1. Verificar se workflow está ativado no n8n
2. Verificar credenciais do NocoDB
3. Testar cada nó individualmente
4. Verificar logs de erro no n8n

---

## 🤝 Como Contribuir

### **Fluxo de Trabalho:**

**PASSO 1 - Trabalhar localmente**

```cmd
# Fazer alterações nos seus arquivos
# Testar localmente
# Configurar conexões com VPS
```

**PASSO 2 - Configurar na VPS**

```cmd
# Acessar n8n/NocoDB na VPS
# Criar/configurar seus workflows/tabelas
# Testar integração
```

**PASSO 3 - Commit e Push**

```cmd
cd C:\Beonsafe-Local\aulabeonsafe\
git add .
git commit -m "Add: Módulo [Seu Nome] - [Descrição]"
git push origin main
```

### **Padrões de Commit:**

- `Add:` Nova funcionalidade criada
- `Fix:` Correção de problema
- `Update:` Melhoria em código existente
- `Config:` Configuração de VPS/workflows

---

## 📞 Suporte e Contato

- 💬 **Reuniões**: Quintas-feiras às 14h
- 🆘 **Problemas com VPS**: WhatsApp do grupo
- 📝 **Dúvidas técnicas**: GitHub Issues
- 🔑 **Credenciais VPS**: Solicitar ao professor

### **Checklist de Problemas:**

1. ✅ VPS está acessível?
2. ✅ n8n e NocoDB estão rodando?
3. ✅ Credenciais estão corretas?
4. ✅ Workflows estão ativados?
5. ✅ Dashboard local está conectado?

---

## 🏆 Status do Projeto

![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)
![Alunos](https://img.shields.io/badge/Alunos-5%20Colaboradores-green)
![Tecnologias](https://img.shields.io/badge/VPS-n8n%2BNocoDB-blue)

**Sistema atual:**

- ✅ Dashboard base funcionando
- ✅ VPS configurada com n8n + NocoDB
- 🔄 Conectar workflows dos alunos
- ⏳ Integração completa VPS + Local

---

> 💡 **Importante:** A VPS já tem n8n e NocoDB rodando! Foquem em CRIAR workflows e estruturas de dados. O desenvolvimento local é só para interface e testes.

**Equipe Beonsafe** 🛡️ | **VPS n8n + NocoDB** | **Desenvolvido com ❤️ pelos alunos**
