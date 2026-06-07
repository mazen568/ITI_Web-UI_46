// 1. Setup & History
let history = [];
const API_KEY = "";
const API_URL = "https://api.openai.com/v1/chat/completions";

// 2. API Logic
async function getResponse(userMessage) {
    try {
        history.push({ role: "user", content: userMessage });

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-4o-mini", 
                messages: history
            })
        });

        const data = await response.json();

        if (data.error) throw new Error(data.error.message);

        let text = data.choices[0].message.content;

        // Remove special characters (keep alphanumeric, spaces, and basic punctuation)
        text = text.replace(/[^a-zA-Z0-9\s.,!?;:'"()-]/g, '');

        history.push({ role: "assistant", content: text });
        return text;

    } catch (error) {
        console.error("Gemini Error:", error);
        return "I'm having trouble connecting to my brain. Please try again!";
    }
}

// 3. UI Helper: Create Chat Bubbles
function appendMessage(role, text) {
    const messagesList = document.getElementById('messages-list');

    const wrapper = document.createElement('div');
    wrapper.className = `message-wrapper ${role} ${text === '...' ? 'loading' : ''}`;

    const content = document.createElement('div');
    content.className = 'message-content';
    content.innerText = text;

    wrapper.appendChild(content);
    messagesList.appendChild(wrapper);

    const chatContainer = document.getElementById('chat-container');
    chatContainer.scrollTop = chatContainer.scrollHeight;

    return content; // Return the content element to allow updating
}

function setSendingState(isSending) {
    const input = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const clearBtn = document.getElementById('clear-btn');

    input.disabled = isSending;
    sendBtn.disabled = isSending || !input.value.trim();
    clearBtn.disabled = isSending;
}

// 5. Main Actions
async function sendMessage() {
    const input = document.getElementById('chat-input');
    const welcome = document.getElementById('welcome-screen');
    const message = input.value.trim();

    if (!message) return;

    input.value = '';
    welcome.style.display = 'none';

    appendMessage('user', message);
    setSendingState(true);

    // Add loading message
    const aiContent = appendMessage('ai', '...');

    const aiResponse = await getResponse(message);

    // Update loading message with actual response
    aiContent.innerText = aiResponse;
    aiContent.parentElement.classList.remove('loading');

    setSendingState(false);
    input.focus();
}

function clearChat() {
    // Clear the logic
    history = [];

    // Clear the UI
    document.getElementById('messages-list').innerHTML = '';
    document.getElementById('welcome-screen').style.display = 'block';
    document.getElementById('chat-input').value = '';
    document.getElementById('chat-input').focus();
}

// 6. Event Listeners
document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('clear-btn').addEventListener('click', clearChat);

document.getElementById('chat-input').addEventListener('input', (e) => {
    const sendBtn = document.getElementById('send-btn');
    sendBtn.disabled = !e.target.value.trim();

    // Auto-resize textarea
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
});

document.getElementById('chat-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});