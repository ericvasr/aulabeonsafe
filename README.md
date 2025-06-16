# 🛡️ Projeto de Aula: Beonsafe - Dashboard Colaborativo

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/n8n-FF6D6D?style=for-the-badge&logo=n8n&logoColor=white" alt="n8n">
  <img src="https://img.shields.io/badge/NocoDB-0078D4?style=for-the-badge&logo=database&logoColor=white" alt="NocoDB">
</p>

---

## 🎯 Sobre o Projeto

O **Beonsafe** é um sistema colaborativo de dashboard para monitoramento de segurança em tempo real. Desenvolvido por alunos usando **n8n** para automações, **NocoDB** como banco de dados, e interface em **HTML/JavaScript** com as cores da Beonsafe (Pantone Verde).

### 🚀 Funcionalidades Principais

- 🤖 **Automações com n8n** para processar dados
- 🗄️ **NocoDB** como banco de dados visual
- 📊 **Dashboard interativo** com métricas ao vivo
- 🎨 **Interface moderna** com design Beonsafe
- 👥 **Sistema modular** para desenvolvimento colaborativo

---

## 🏗️ Arquitetura do Sistema

```
┌─────────────────┐    🤖    ┌─────────────────┐    🗄️    ┌─────────────────┐    🎨    ┌─────────────────┐
│   APIs Externas │ ──────► │      n8n        │ ──────► │     NocoDB      │ ──────► │   Dashboard     │
│   (Webhooks)    │         │   (Automação)   │         │   (Database)    │         │ (HTML/JS)       │
└─────────────────┘         └─────────────────┘         └─────────────────┘         └─────────────────
```

### 📁 Estrutura de Arquivos

- **`index.html`** - Interface visual do dashboard
- **`aulajs.js`** - Sistema JavaScript para conectar com APIs
- **`workflows/`** - Workflows do n8n (arquivos JSON)
- **`database/`** - Estruturas e configurações do NocoDB
- **`README.md`** - Este arquivo com todas as instruções

---

## 🗺️ Mapa do Projeto - Como Tudo se Conecta

### 1️⃣ **n8n** (Cérebro das Automações)

- Recebe dados de APIs externas
- Processa e transforma os dados
- Envia dados organizados para o NocoDB
- Dispara notificações e alertas

### 2️⃣ **NocoDB** (Banco de Dados Visual)

- Armazena todos os dados de segurança
- Interface visual para visualizar tabelas
- API REST automática para conectar com dashboard
- Relatórios e consultas simples

### 3️⃣ **Dashboard** (Interface do Usuário)

- Mostra dados em tempo real
- Interface bonita com cores Beonsafe
- Gráficos e métricas visuais
- Controle e monitoramento

---

## 👥 Distribuição de Tarefas por Aluno

### 🤖 **Aline - n8n Analytics & Automações**

**Responsabilidade:** Criar workflows no n8n para processar dados e gerar relatórios

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

#### 📋 Como executar (Windows):

**PASSO 1 - Verificar n8n**

```cmd
# Abrir PowerShell como Administrador
# Tecla Windows + X → "Windows PowerShell (Admin)"

# Verificar se n8n está funcionando
n8n --version
```

**PASSO 2 - Iniciar n8n**

```cmd
# No PowerShell:
n8n start

# Abrir navegador em: http://localhost:5678
```

**PASSO 3 - Criar seus workflows**

1. Abrir n8n no navegador
2. Criar novo workflow
3. Usar nós: Webhook, HTTP Request, NocoDB
4. Salvar como: `aline-analytics-workflow.json`

**PASSO 4 - Testar**

```javascript
// No console do dashboard:
updateMyModule("aline", "development");
```

---

### 🗄️ **Braian - NocoDB Estrutura & Segurança**

**Responsabilidade:** Configurar banco de dados no NocoDB e sistemas de autenticação

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
   - Backup automático de dados críticos

#### 📋 Como executar (Windows):

**PASSO 1 - Verificar NocoDB**

```cmd
# Abrir PowerShell
# Verificar se NocoDB está rodando
# Abrir navegador em: http://localhost:8080
```

**PASSO 2 - Iniciar NocoDB (se não estiver rodando)**

```cmd
# No PowerShell:
npx nocodb

# Ou se instalado globalmente:
nocodb
```

**PASSO 3 - Criar estrutura de dados**

1. Abrir NocoDB no navegador
2. Criar novo projeto: "Beonsafe-Database"
3. Criar tabelas:
   - `usuarios` (id, nome, email, nivel_acesso, data_criacao)
   - `logs_seguranca` (id, tipo_evento, descricao, timestamp, usuario_id)
   - `alertas` (id, nivel, mensagem, resolvido, data_criacao)
   - `metricas` (id, tipo_metrica, valor, data_registro)

**PASSO 4 - Configurar API**

1. Ir em "Team & Settings" no NocoDB
2. Copiar "API Token"
3. Salvar token em arquivo: `braian-api-config.txt`

**PASSO 5 - Testar conexão**

```javascript
// No console do dashboard:
updateMyModule("braian", "development");
```

---

### 🌐 **Kauã - Integração n8n + NocoDB**

**Responsabilidade:** Conectar n8n com NocoDB e criar APIs para o dashboard

#### 🎯 Tarefas Específicas:

1. **Workflow de Integração**

   - Conectar workflows do n8n com NocoDB
   - Inserir dados automaticamente nas tabelas
   - Sincronização em tempo real

2. **API para Dashboard**

   - Criar endpoints usando n8n
   - Fornecer dados para o dashboard HTML
   - Webhook para atualizações ao vivo

3. **Processamento de Dados**
   - Workflow para limpar e validar dados
   - Transformar dados antes de salvar
   - Sistema de filas para muitos dados

#### 📋 Como executar (Windows):

**PASSO 1 - Configurar conexão**

```cmd
# Garantir que n8n e NocoDB estejam rodando
# n8n: http://localhost:5678
# NocoDB: http://localhost:8080
```

**PASSO 2 - Criar workflow de integração**

1. No n8n, criar novo workflow
2. Adicionar nó "NocoDB"
3. Configurar com token do Braian
4. Testar inserção de dados

**PASSO 3 - Criar API endpoints**

1. Workflow com nó "Webhook"
2. URL: `http://localhost:5678/webhook/beonsafe-data`
3. Conectar com nó NocoDB para buscar dados
4. Retornar JSON para dashboard

**PASSO 4 - Arquivo de configuração**
Criar `kaua-integration-config.json`:

```json
{
  "n8n_url": "http://localhost:5678",
  "nocodb_url": "http://localhost:8080",
  "webhook_endpoint": "/webhook/beonsafe-data",
  "api_token": "TOKEN_DO_BRAIAN_AQUI"
}
```

**PASSO 5 - Testar**

```javascript
// No console do dashboard:
updateMyModule("kaua", "development");
```

---

### 💾 **Elcio - Backup e Monitoramento**

**Responsabilidade:** Sistema de backup automático e monitoramento de performance

#### 🎯 Tarefas Específicas:

1. **Backup Automático**

   - Workflow no n8n para backup diário
   - Exportar dados do NocoDB
   - Salvar backups em pasta local

2. **Monitoramento de Sistema**

   - Verificar se n8n e NocoDB estão funcionando
   - Alertas quando sistema está offline
   - Métricas de performance

3. **Relatórios de Status**
   - Relatório diário de funcionamento
   - Estatísticas de uso do sistema
   - Log de erros e problemas

#### 📋 Como executar (Windows):

**PASSO 1 - Criar pasta de backups**

```cmd
# No PowerShell:
mkdir C:\Beonsafe-Backups
mkdir C:\Beonsafe-Backups\daily
mkdir C:\Beonsafe-Backups\logs
```

**PASSO 2 - Workflow de Backup**

1. No n8n, criar workflow "Backup-Diario"
2. Nó "Schedule Trigger" (todo dia às 23:00)
3. Nó "HTTP Request" para exportar dados do NocoDB
4. Nó "Write Binary File" para salvar backup

**PASSO 3 - Monitoramento**

1. Workflow "Monitor-Sistema"
2. Nó "Schedule Trigger" (a cada 5 minutos)
3. Nó "HTTP Request" para testar n8n e NocoDB
4. Nó "IF" para verificar se está funcionando
5. Nó "Email" para alertas quando offline

**PASSO 4 - Script de status**
Criar `elcio-monitor.js`:

```javascript
// Script para verificar status do sistema
function checkSystemStatus() {
  // Verificar n8n
  // Verificar NocoDB
  // Gerar relatório
}
```

**PASSO 5 - Testar**

```javascript
// No console do dashboard:
updateMyModule("elcio", "development");
```

---

### 🎨 **Alessandra - Interface e Design**

**Responsabilidade:** Melhorar interface HTML/CSS e experiência do usuário

#### 🎯 Tarefas Específicas:

1. **Design Responsivo**

   - Interface que funciona no celular
   - Melhorar cores e tipografia
   - Animações suaves e bonitas

2. **Componentes Visuais**

   - Gráficos com Chart.js
   - Cards informativos
   - Botões e formulários estilizados

3. **Experiência do Usuário**
   - Navegação fácil e intuitiva
   - Feedback visual para ações
   - Temas claro e escuro

#### 📋 Como executar (Windows):

**PASSO 1 - Preparar ambiente**

```cmd
# Abrir pasta do projeto
# Windows + E → Navegar até aulabeonsafe
# Botão direito → "Abrir no VS Code" (ou bloco de notas)
```

**PASSO 2 - Estrutura de arquivos**

```
alessandra-design/
├── styles/
│   ├── main.css
│   ├── responsive.css
│   └── themes.css
├── components/
│   ├── cards.css
│   ├── buttons.css
│   └── charts.css
└── assets/
    ├── images/
    └── icons/
```

**PASSO 3 - Melhorar CSS**

1. Abrir `index.html`
2. Criar novos estilos em `alessandra-design/styles/main.css`
3. Adicionar responsividade para celular
4. Testar no navegador

**PASSO 4 - Adicionar gráficos**

1. Incluir Chart.js no HTML:

```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

2. Criar gráficos em `alessandra-design/components/charts.js`

**PASSO 5 - Testar**

```cmd
# Abrir index.html no navegador
# Pressionar F12 para abrir console
# Verificar responsividade: Ctrl + Shift + M
```

```javascript
// No console do dashboard:
updateMyModule("alessandra", "development");
```

---

## 🚀 Como Iniciar o Projeto (Windows - Passo a Passo)

### 📁 PASSO 1 - Baixar o Projeto

```cmd
# Opção 1: Baixar ZIP do GitHub
1. Ir em: https://github.com/ericvasr/aulabeonsafe
2. Clicar em "Code" → "Download ZIP"
3. Extrair para: C:\Beonsafe\

# Opção 2: Usar Git (se instalado)
git clone https://github.com/ericvasr/aulabeonsafe.git C:\Beonsafe\
```

### 🤖 PASSO 2 - Iniciar n8n

```cmd
# Abrir PowerShell (Windows + X → PowerShell)
cd C:\Beonsafe\
n8n start

# Aguardar mensagem: "Editor is now accessible via: http://localhost:5678"
# Deixar este PowerShell aberto!
```

### 🗄️ PASSO 3 - Iniciar NocoDB

```cmd
# Abrir NOVO PowerShell (outro terminal)
cd C:\Beonsafe\
npx nocodb

# Aguardar mensagem sobre porta 8080
# Deixar este PowerShell também aberto!
```

### 🌐 PASSO 4 - Abrir Dashboard

```cmd
# Navegar até pasta do projeto
cd C:\Beonsafe\aulabeonsafe\

# Abrir index.html no navegador
start index.html
```

### ✅ PASSO 5 - Verificar se tudo funciona

1. **n8n**: http://localhost:5678 (deve abrir interface)
2. **NocoDB**: http://localhost:8080 (deve abrir interface)
3. **Dashboard**: arquivo index.html (deve mostrar dashboard verde)

---

## 🔧 Comandos para Desenvolvedores

### **Atualizar Status do Seu Módulo**

```javascript
// Abrir F12 no navegador → Console
updateMyModule("seu_nome", "development"); // ou "ready"
```

### **Testar Conexão com APIs**

```javascript
// Testar webhook do n8n:
sendCustomWebhook("teste", "Mensagem do " + "seu_nome");

// Verificar dados do NocoDB:
BeonsafeAPI.getStats();
```

### **URLs Importantes**

- 🤖 **n8n**: http://localhost:5678
- 🗄️ **NocoDB**: http://localhost:8080
- 📊 **Dashboard**: abrir index.html

---

## 📚 Recursos e Tutoriais

### **n8n - Aprender Básico**

1. [Tutorial n8n - YouTube](https://www.youtube.com/watch?v=1MwSUC1Xtkg)
2. [Documentação n8n](https://docs.n8n.io/)
3. [Workflows de exemplo](https://n8n.io/workflows/)

### **NocoDB - Aprender Básico**

1. [Tutorial NocoDB - YouTube](https://www.youtube.com/watch?v=K-UEecQyiOk)
2. [Documentação NocoDB](https://docs.nocodb.com/)
3. [Como criar tabelas](https://docs.nocodb.com/getting-started/quick-start/)

### **HTML/CSS/JavaScript**

1. [W3Schools HTML](https://www.w3schools.com/html/)
2. [W3Schools CSS](https://www.w3schools.com/css/)
3. [W3Schools JavaScript](https://www.w3schools.com/js/)

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

## 📝 Cronograma do Projeto

| Semana | Módulo                  | Responsável | Entrega         |
| ------ | ----------------------- | ----------- | --------------- |
| 1-2    | Estrutura Base          | Todos       | ✅ Concluído    |
| 3-4    | n8n Workflows           | Aline       | 🔄 Em andamento |
| 3-4    | NocoDB Database         | Braian      | 🔄 Em andamento |
| 5-6    | Integração n8n + NocoDB | Kauã        | ⏳ Aguardando   |
| 5-6    | Backup & Monitoramento  | Elcio       | ⏳ Aguardando   |
| 7-8    | Interface Final         | Alessandra  | ⏳ Aguardando   |

---

## 🆘 Problemas Comuns e Soluções

### ❌ **"n8n não funciona"**

```cmd
# Solução:
npm install -g n8n
# ou
npx n8n@latest
```

### ❌ **"NocoDB não abre"**

```cmd
# Solução:
npx nocodb@latest
# ou verificar se porta 8080 está livre
```

### ❌ **"PowerShell não reconhece comando"**

```cmd
# Instalar Node.js primeiro:
# Baixar de: https://nodejs.org/
# Reiniciar computador após instalação
```

### ❌ **"Dashboard não carrega dados"**

1. Verificar se n8n está rodando (localhost:5678)
2. Verificar se NocoDB está rodando (localhost:8080)
3. Verificar console do navegador (F12) para erros

---

## 🤝 Como Contribuir (Passo a Passo)

### **Para quem nunca usou Git:**

**PASSO 1 - Fazer suas alterações**

```cmd
# Trabalhar nos seus arquivos normalmente
# Salvar todas as alterações
```

**PASSO 2 - Preparar para envio**

```cmd
# Abrir PowerShell na pasta do projeto
cd C:\Beonsafe\aulabeonsafe\

# Verificar o que mudou
git status
```

**PASSO 3 - Adicionar arquivos**

```cmd
# Adicionar TODOS os arquivos
git add .

# OU adicionar apenas seus arquivos:
git add aline-analytics/
# git add braian-database/
# git add kaua-integration/
# git add elcio-backup/
# git add alessandra-design/
```

**PASSO 4 - Fazer commit**

```cmd
# Commit com mensagem clara:
git commit -m "Add: Módulo Analytics da Aline - workflows n8n"
# git commit -m "Add: Estrutura database do Braian - tabelas NocoDB"
# git commit -m "Fix: Correção na integração do Kauã"
# git commit -m "Update: Melhorias no design da Alessandra"
```

**PASSO 5 - Enviar para GitHub**

```cmd
git push origin main
```

### **Padrões de Commit:**

- `Add:` Nova funcionalidade criada
- `Fix:` Correção de problema
- `Update:` Melhoria em código existente
- `Docs:` Atualização de documentação

---

## 📞 Suporte e Contato

- 💬 **Reuniões**: Quintas-feiras às 14h
- 📝 **Dúvidas**: Usar GitHub Issues
- 🆘 **Problemas urgentes**: WhatsApp do grupo
- 📚 **Documentação**: Este README

### **Se algo não funcionar:**

1. Ler a seção "Problemas Comuns"
2. Verificar se n8n e NocoDB estão rodando
3. Perguntar no grupo do WhatsApp
4. Levar dúvida para reunião de quinta

---

## 🏆 Status do Projeto

![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)
![Alunos](https://img.shields.io/badge/Alunos-5%20Colaboradores-green)
![Tecnologias](https://img.shields.io/badge/Tecnologias-n8n%2BNocoDB%2BJS-blue)

**Sistema atual:**

- ✅ Dashboard base funcionando
- ✅ Interface com cores Beonsafe
- 🔄 Conectar com n8n e NocoDB
- ⏳ Módulos específicos dos alunos

---

> 💡 **Lembrete Importante:** Este projeto usa n8n e NocoDB que vocês já conhecem! Se tiver dúvida, perguntem nas reuniões. Trabalhem no seu próprio ritmo e sempre testem antes de fazer commit.

**Equipe Beonsafe** 🛡️ | **Desenvolvido com ❤️ pelos alunos** | **Powered by n8n + NocoDB**
