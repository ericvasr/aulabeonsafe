# 🛡️ Projeto de Aula: Beonsafe - Dashboard Colaborativo

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Webhooks-2E8B57?style=for-the-badge&logo=webhook&logoColor=white" alt="Webhooks">
  <img src="https://img.shields.io/badge/Real--Time-FF6B6B?style=for-the-badge&logo=socketdotio&logoColor=white" alt="Real-Time">
</p>

---

## 🎯 Sobre o Projeto

O **Beonsafe** é um sistema colaborativo de dashboard para monitoramento de segurança em tempo real. Desenvolvido por alunos, o projeto utiliza **webhooks** para receber dados externos e apresentá-los em uma interface moderna com as cores da Beonsafe (Pantone Verde).

### 🚀 Funcionalidades Principais

- 📡 **Recebimento de Webhooks** em tempo real
- 📊 **Dashboard interativo** com métricas ao vivo
- 🎨 **Interface moderna** com design Beonsafe
- 👥 **Sistema modular** para desenvolvimento colaborativo
- 📈 **Visualizações dinâmicas** de dados de segurança

---

## 🏗️ Arquitetura do Sistema

```
┌─────────────────┐    📡    ┌─────────────────┐    🎨    ┌─────────────────┐
│   APIs Externas │ ──────► │   aulajs.js     │ ──────► │   index.html    │
│   (Webhooks)    │         │   (Processamento)│         │   (Visual)      │
└─────────────────┘         └─────────────────┘         └─────────────────┘
```

### 📁 Estrutura de Arquivos

- **`index.html`** - Interface visual com cores Beonsafe e design responsivo
- **`aulajs.js`** - Sistema de processamento de webhooks e gerenciamento de dados
- **`README.md`** - Documentação e instruções do projeto

---

## 👥 Distribuição de Tarefas por Aluno

### 📊 **Aline - Módulo Analytics & Visualizações**

**Responsabilidade:** Criar gráficos e dashboards interativos

#### 🎯 Tarefas Específicas:

1. **Implementar gráficos em tempo real**

   - Integrar Chart.js ou D3.js ao projeto
   - Criar gráficos de linha para conexões ativas
   - Desenvolver gráfico de pizza para tipos de webhooks

2. **Dashboard de métricas avançadas**

   - Calcular médias de requisições por minuto
   - Criar indicadores de performance (KPIs)
   - Implementar alertas visuais para anomalias

3. **Relatórios de segurança**
   - Gerar relatórios automáticos em PDF
   - Criar timeline de eventos de segurança
   - Implementar filtros por data/tipo

#### 📋 Como executar:

```bash
# 1. Criar pasta para seus arquivos
mkdir aline-analytics
cd aline-analytics

# 2. Instalar dependências (Chart.js)
# Adicionar no HTML: <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

# 3. Criar seus arquivos:
touch analytics.js
touch charts-config.js
touch reports.js

# 4. Testar sua implementação
# Use: updateMyModule("aline", "development")
```

---

### 🔐 **Braian - Módulo Autenticação & Segurança**

**Responsabilidade:** Sistema de login e controle de acesso

#### 🎯 Tarefas Específicas:

1. **Sistema de autenticação**

   - Criar tela de login/registro
   - Implementar hash de senhas (bcrypt)
   - Desenvolver sistema de JWT tokens

2. **Controle de permissões**

   - Definir níveis de acesso (admin, user, viewer)
   - Proteger rotas sensíveis
   - Implementar middleware de autorização

3. **Validação e segurança**
   - Sanitizar inputs do usuário
   - Implementar rate limiting
   - Criar logs de segurança

#### 📋 Como executar:

```bash
# 1. Criar pasta para seus arquivos
mkdir braian-auth
cd braian-auth

# 2. Estrutura de arquivos
touch auth.js
touch login.html
touch security.js
touch validation.js

# 3. Configurar JWT
# npm install jsonwebtoken bcryptjs

# 4. Testar sua implementação
# Use: updateMyModule("braian", "development")
```

---

### 🌐 **Kauã - Módulo Webhooks & API**

**Responsabilidade:** Gerenciar recebimento e processamento de webhooks

#### 🎯 Tarefas Específicas:

1. **API de webhooks**

   - Criar endpoints REST para receber dados
   - Implementar validação de payload
   - Desenvolver sistema de filas (Queue)

2. **Processamento em tempo real**

   - Configurar WebSockets para updates live
   - Implementar cache para performance
   - Criar sistema de retry para falhas

3. **Integração externa**
   - Conectar com APIs de segurança (VirusTotal, etc)
   - Implementar webhooks para Slack/Discord
   - Criar documentação da API

#### 📋 Como executar:

```bash
# 1. Criar pasta para seus arquivos
mkdir kaua-webhooks
cd kaua-webhooks

# 2. Configurar servidor Node.js
npm init -y
npm install express socket.io cors helmet

# 3. Estrutura de arquivos
touch webhook-server.js
touch api-routes.js
touch websocket-handler.js
touch queue-manager.js

# 4. Testar sua implementação
# Use: updateMyModule("kaua", "development")
```

---

### 💾 **Elcio - Módulo Database & Backend**

**Responsabilidade:** Estrutura de dados e persistência

#### 🎯 Tarefas Específicas:

1. **Banco de dados**

   - Projetar schema para webhooks
   - Implementar MongoDB ou PostgreSQL
   - Criar índices para performance

2. **Queries e otimização**

   - Desenvolver queries para relatórios
   - Implementar paginação
   - Criar stored procedures/agregações

3. **Backup e auditoria**
   - Sistema de backup automático
   - Logs de auditoria de dados
   - Monitoramento de performance do DB

#### 📋 Como executar:

```bash
# 1. Criar pasta para seus arquivos
mkdir elcio-database
cd elcio-database

# 2. Configurar banco de dados
# Para MongoDB:
npm install mongoose
# Para PostgreSQL:
npm install pg sequelize

# 3. Estrutura de arquivos
touch database-config.js
touch models.js
touch queries.js
touch backup-system.js

# 4. Testar sua implementação
# Use: updateMyModule("elcio", "development")
```

---

### 🎨 **Alessandra - Módulo UI/UX Design**

**Responsabilidade:** Interface e experiência do usuário

#### 🎯 Tarefas Específicas:

1. **Design responsivo**

   - Otimizar para mobile/tablet
   - Implementar grid system flexível
   - Criar breakpoints consistentes

2. **Componentes reutilizáveis**

   - Criar biblioteca de componentes CSS
   - Desenvolver sistema de design tokens
   - Implementar animações suaves

3. **Experiência do usuário**
   - Melhorar navegação e usabilidade
   - Implementar modo escuro/claro
   - Criar guias de acessibilidade

#### 📋 Como executar:

```bash
# 1. Criar pasta para seus arquivos
mkdir alessandra-design
cd alessandra-design

# 2. Ferramentas de desenvolvimento
# Instalar Sass (opcional):
npm install -g sass

# 3. Estrutura de arquivos
touch styles.css
touch components.css
touch responsive.css
touch animations.css
touch design-tokens.css

# 4. Testar sua implementação
# Use: updateMyModule("alessandra", "development")
```

---

## 🚀 Como Iniciar o Projeto

### 1. **Clone e Setup Inicial**

```bash
git clone https://github.com/ericvasr/aulabeonsafe.git
cd aulabeonsafe
```

### 2. **Abrir o Dashboard**

```bash
# Abrir index.html no navegador
open index.html
# ou
python -m http.server 8000  # Para servidor local
```

### 3. **Testar Funcionalidades**

- ✅ Dashboard carrega com cores Beonsafe
- ✅ Simulação de webhooks funcionando
- ✅ Contadores atualizando em tempo real
- ✅ Módulos dos alunos visíveis

---

## 🔧 Comandos para Desenvolvedores

### **Atualizar Status do Seu Módulo**

```javascript
// No console do navegador:
updateMyModule("seu_nome", "development"); // ou "ready"
```

### **Enviar Webhook Personalizado**

```javascript
// Testar webhook customizado:
sendCustomWebhook("teste", "Minha mensagem de teste");
```

### **Verificar Estatísticas**

```javascript
// Obter dados atuais:
BeonsafeAPI.getStats();
```

---

## 📚 Recursos de Desenvolvimento

### **Bibliotecas Recomendadas:**

- 📊 **Chart.js** - Gráficos interativos
- 🔐 **bcryptjs** - Hash de senhas
- 📡 **Socket.io** - WebSockets
- 💾 **MongoDB/PostgreSQL** - Banco de dados
- 🎨 **Tailwind CSS** - Framework CSS

### **APIs Úteis:**

- 🛡️ **VirusTotal API** - Verificação de segurança
- 📱 **Slack API** - Notificações
- 📧 **SendGrid** - Envio de emails
- 📊 **Google Analytics** - Métricas

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

| Semana | Módulo         | Responsável | Entrega         |
| ------ | -------------- | ----------- | --------------- |
| 1-2    | Estrutura Base | Todos       | ✅ Concluído    |
| 3-4    | Webhooks & API | Kauã        | 🔄 Em andamento |
| 3-4    | Database       | Elcio       | 🔄 Em andamento |
| 5-6    | Autenticação   | Braian      | ⏳ Aguardando   |
| 5-6    | Analytics      | Aline       | ⏳ Aguardando   |
| 7-8    | UI/UX Final    | Alessandra  | ⏳ Aguardando   |

---

## 🤝 Como Contribuir

1. **Faça um fork** do repositório
2. **Crie uma branch** para sua feature: `git checkout -b feature/seu-modulo`
3. **Commit suas mudanças**: `git commit -m "Add: nova funcionalidade"`
4. **Push para a branch**: `git push origin feature/seu-modulo`
5. **Abra um Pull Request** detalhando as alterações

### **Padrões de Commit:**

- `Add:` Nova funcionalidade
- `Fix:` Correção de bug
- `Update:` Atualização de código existente
- `Docs:` Documentação

---

## 📞 Suporte e Contato

- 📧 **Email do projeto**: beonsafe@projeto.edu
- 💬 **Reuniões**: Quintas-feiras às 14h
- 📝 **Issues**: Use o GitHub Issues para reportar problemas
- 📚 **Wiki**: Documentação detalhada no Wiki do repositório

---

## 🏆 Status do Projeto

![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)
![Contribuidores](https://img.shields.io/badge/Contribuidores-5-green)
![Tecnologias](https://img.shields.io/badge/Tecnologias-HTML%2FJS%2FWebhooks-blue)

**Última atualização:** `git log -1 --format="%cd" --date=short`

---

> 💡 **Lembre-se:** Este é um projeto colaborativo! Sempre comunique suas alterações, participe das reuniões e ajude seus colegas quando necessário.

**Equipe Beonsafe** 🛡️ | **Desenvolvido com ❤️ pelos alunos**
