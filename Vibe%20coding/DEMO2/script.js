document.addEventListener('DOMContentLoaded', () => {
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const messagesList = document.getElementById('messages-list');
    const welcomeScreen = document.getElementById('welcome-screen');
    const newChatBtn = document.getElementById('new-chat-btn');
    const chatHistory = document.getElementById('chat-history');

    // Auto-resize textarea
    chatInput.addEventListener('input', () => {
        chatInput.style.height = 'auto';
        chatInput.style.height = (chatInput.scrollHeight) + 'px';
        
        // Enable/disable send button
        sendBtn.disabled = chatInput.value.trim() === '';
    });

    // Handle sending message
    function sendMessage() {
        const text = chatInput.value.trim();
        if (!text) return;

        // Hide welcome screen on first message
        if (welcomeScreen.style.display !== 'none') {
            welcomeScreen.style.display = 'none';
        }

        // Add user message
        addMessage(text, 'user');
        
        // Clear input
        chatInput.value = '';
        chatInput.style.height = 'auto';
        sendBtn.disabled = true;

        // Simulate AI response
        setTimeout(() => {
            simulateAIResponse("This is a simulated response. In a real app, I would connect to an LLM API to provide intelligent answers based on your prompt: \"" + text + "\"");
        }, 800);
    }

    function addMessage(content, role) {
        const wrapper = document.createElement('div');
        wrapper.className = `message-wrapper ${role}`;
        
        const avatar = document.createElement('div');
        avatar.className = `avatar ${role}-avatar`;
        avatar.innerHTML = role === 'user' ? 'M' : '<i data-lucide="bot"></i>';
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.textContent = content;

        wrapper.appendChild(avatar);
        wrapper.appendChild(messageContent);
        messagesList.appendChild(wrapper);

        // Refresh icons for the bot avatar
        if (role === 'ai') {
            lucide.createIcons();
        }

        // Scroll to bottom
        const chatContainer = document.getElementById('chat-container');
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    function simulateAIResponse(response) {
        addMessage(response, 'ai');
    }

    // Event listeners
    sendBtn.addEventListener('click', sendMessage);
    
    chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    newChatBtn.addEventListener('click', () => {
        messagesList.innerHTML = '';
        welcomeScreen.style.display = 'block';
        chatInput.value = '';
        chatInput.focus();
    });

    // Add interactivity to history items
    document.querySelectorAll('.history-item').forEach(item => {
        item.addEventListener('click', () => {
            const title = item.querySelector('span').textContent;
            messagesList.innerHTML = '';
            welcomeScreen.style.display = 'none';
            addMessage(`You clicked on: ${title}`, 'user');
            setTimeout(() => {
                simulateAIResponse(`Resuming conversation about "${title}"...`);
            }, 500);
        });
    });
});
