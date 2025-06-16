/**
 * BEONSAFE - Sistema de Dashboard Colaborativo
 * Arquivo principal JavaScript para gerenciamento de webhooks e interface
 * Desenvolvido para o projeto colaborativo dos alunos
 */

class BeonsafeDashboard {
    constructor() {
        this.connections = 0;
        this.totalRequests = 0;
        this.webhookData = [];
        this.modules = {
            aline: { status: 'waiting', description: 'Analytics & Visualizações' },
            braian: { status: 'waiting', description: 'Autenticação & Segurança' },
            kaua: { status: 'waiting', description: 'API & Webhooks' },
            elcio: { status: 'waiting', description: 'Database & Backend' },
            alessandra: { status: 'waiting', description: 'UI/UX Design' }
        };

        this.init();
    }

    init() {
        console.log('🛡️ Beonsafe Dashboard Iniciado');
        this.updateStatus();
        this.setupWebhookSimulator();
        this.startPeriodicUpdates();
        this.setupModuleInteractions();
    }

    /**
     * Atualiza os valores do dashboard
     */
    updateStatus() {
        document.getElementById('activeConnections').textContent = this.connections;
        document.getElementById('totalRequests').textContent = this.totalRequests;
        document.getElementById('lastUpdate').textContent = new Date().toLocaleTimeString('pt-BR');
    }

    /**
     * Simula recebimento de dados via webhook
     */
    simulateWebhookData() {
        const sampleData = [
            { type: 'security_alert', message: 'Tentativa de acesso suspeito detectada', timestamp: new Date() },
            { type: 'user_login', message: 'Usuário admin logou no sistema', timestamp: new Date() },
            { type: 'data_backup', message: 'Backup automático concluído com sucesso', timestamp: new Date() },
            { type: 'system_update', message: 'Atualização de segurança aplicada', timestamp: new Date() },
            { type: 'api_call', message: 'Nova requisição API processada', timestamp: new Date() }
        ];

        const randomData = sampleData[Math.floor(Math.random() * sampleData.length)];
        this.processWebhookData(randomData);
    }

    /**
     * Processa dados recebidos via webhook
     * @param {Object} data - Dados do webhook
     */
    processWebhookData(data) {
        this.totalRequests++;
        this.webhookData.unshift(data);

        // Manter apenas os últimos 10 registros
        if (this.webhookData.length > 10) {
            this.webhookData.pop();
        }

        this.updateWebhookDisplay();
        this.updateStatus();

        console.log('📡 Webhook processado:', data);
    }

    /**
     * Atualiza o display de webhooks na interface
     */
    updateWebhookDisplay() {
        const webhookContent = document.getElementById('webhookData');
        let content = '📍 Endpoint: /webhook/beonsafe\n';
        content += '🔄 Status: Ativo e recebendo dados\n';
        content += `📊 Total de requisições: ${this.totalRequests}\n\n`;
        content += '📝 Logs recentes:\n';
        content += '─'.repeat(50) + '\n';

        this.webhookData.forEach((data, index) => {
            const timestamp = data.timestamp.toLocaleTimeString('pt-BR');
            const typeIcon = this.getTypeIcon(data.type);
            content += `[${timestamp}] ${typeIcon} ${data.type.toUpperCase()}\n`;
            content += `   └── ${data.message}\n\n`;
        });

        if (this.webhookData.length === 0) {
            content += 'Aguardando dados...\n';
        }

        webhookContent.textContent = content;
        webhookContent.scrollTop = 0; // Scroll para o topo
    }

    /**
     * Retorna ícone baseado no tipo de webhook
     * @param {string} type - Tipo do webhook
     */
    getTypeIcon(type) {
        const icons = {
            'security_alert': '🚨',
            'user_login': '👤',
            'data_backup': '💾',
            'system_update': '🔄',
            'api_call': '📡',
            'default': '📝'
        };
        return icons[type] || icons.default;
    }

    /**
     * Configura simulador de webhooks para demonstração
     */
    setupWebhookSimulator() {
        // Simula conexão ativa
        setTimeout(() => {
            this.connections = 1;
            this.updateStatus();
        }, 2000);

        // Simula dados chegando via webhook a cada 5 segundos
        setInterval(() => {
            if (Math.random() > 0.3) { // 70% de chance de receber dados
                this.simulateWebhookData();
            }
        }, 5000);
    }

    /**
     * Inicia atualizações periódicas do dashboard
     */
    startPeriodicUpdates() {
        setInterval(() => {
            this.updateStatus();
        }, 1000);
    }

    /**
     * Configura interações dos módulos
     */
    setupModuleInteractions() {
        const moduleCards = document.querySelectorAll('.module-card');

        moduleCards.forEach(card => {
            card.addEventListener('click', () => {
                const title = card.querySelector('.module-title').textContent;
                this.showModuleInfo(title);
            });
        });
    }

    /**
     * Exibe informações detalhadas do módulo
     * @param {string} moduleTitle - Título do módulo
     */
    showModuleInfo(moduleTitle) {
        const moduleInfo = {
            'Analytics': {
                student: 'Aline',
                tasks: [
                    'Criar gráficos de dados em tempo real',
                    'Implementar dashboard de métricas',
                    'Desenvolver relatórios de segurança',
                    'Integrar bibliotecas de visualização (Chart.js/D3.js)'
                ]
            },
            'Autenticação': {
                student: 'Braian',
                tasks: [
                    'Sistema de login/logout',
                    'Implementar JWT tokens',
                    'Controle de permissões por usuário',
                    'Validação e sanitização de dados'
                ]
            },
            'Webhooks': {
                student: 'Kauã',
                tasks: [
                    'Criar endpoints para receber webhooks',
                    'Processar dados em tempo real',
                    'Implementar fila de processamento',
                    'Integração com APIs externas'
                ]
            },
            'Database': {
                student: 'Elcio',
                tasks: [
                    'Estruturar banco de dados',
                    'Criar queries otimizadas',
                    'Implementar backups automáticos',
                    'Gerenciar logs e auditoria'
                ]
            },
            'UI/UX': {
                student: 'Alessandra',
                tasks: [
                    'Melhorar design responsivo',
                    'Criar componentes reutilizáveis',
                    'Otimizar experiência do usuário',
                    'Implementar temas e acessibilidade'
                ]
            }
        };

        const moduleName = moduleTitle.split(' - ')[1];
        const info = moduleInfo[moduleName];

        if (info) {
            alert(`📋 Módulo ${moduleName}\n👤 Responsável: ${info.student}\n\n📝 Tarefas:\n${info.tasks.map(task => `• ${task}`).join('\n')}`);
        }
    }

    /**
     * Método para atualizar status de um módulo
     * @param {string} student - Nome do aluno
     * @param {string} status - Status: 'waiting', 'development', 'ready'
     */
    updateModuleStatus(student, status) {
        const statusClasses = {
            'waiting': 'status-waiting',
            'development': 'status-development',
            'ready': 'status-ready'
        };

        const statusTexts = {
            'waiting': 'Aguardando Desenvolvimento',
            'development': 'Em Desenvolvimento',
            'ready': 'Concluído'
        };

        // Encontrar o cartão do módulo pelo nome do aluno
        const moduleCards = document.querySelectorAll('.module-card');
        moduleCards.forEach(card => {
            const title = card.querySelector('.module-title').textContent;
            if (title.toLowerCase().includes(student.toLowerCase())) {
                const statusElement = card.querySelector('.module-status');
                statusElement.className = `module-status ${statusClasses[status]}`;
                statusElement.textContent = statusTexts[status];
            }
        });

        console.log(`📊 Status do módulo ${student} atualizado para: ${status}`);
    }
}

/**
 * Funções globais para uso dos alunos
 */

// Função para alunos enviarem atualizações
window.updateMyModule = function(studentName, status) {
    if (window.dashboard) {
        window.dashboard.updateModuleStatus(studentName, status);
    }
};

// Função para simular webhook personalizado
window.sendCustomWebhook = function(type, message) {
    if (window.dashboard) {
        window.dashboard.processWebhookData({
            type: type,
            message: message,
            timestamp: new Date()
        });
    }
};

// Inicialização quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    window.dashboard = new BeonsafeDashboard();

    // Exemplo de uso para os alunos:
    console.log('🎯 Comandos disponíveis para os alunos:');
    console.log('updateMyModule("aline", "development") - Atualiza status do seu módulo');
    console.log('sendCustomWebhook("custom", "Minha mensagem") - Envia webhook personalizado');
});

/**
 * API para integração externa (webhooks reais)
 */
window.BeonsafeAPI = {
    // Endpoint simulado para receber dados externos
    receiveWebhook: function(data) {
        if (window.dashboard) {
            window.dashboard.processWebhookData(data);
        }
    },

    // Obter estatísticas atuais
    getStats: function() {
        if (window.dashboard) {
            return {
                connections: window.dashboard.connections,
                totalRequests: window.dashboard.totalRequests,
                recentWebhooks: window.dashboard.webhookData
            };
        }
        return null;
    }
};
