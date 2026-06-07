/* eslint-disable no-alert */
const STORAGE_KEY = "chat_ui_v1";

function nowIso() {
  return new Date().toISOString();
}

function uid() {
  return Math.random().toString(16).slice(2) + Date.now().toString(16);
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function clampText(text, maxLen) {
  const t = (text ?? "").trim().replace(/\s+/g, " ");
  if (!t) return "New chat";
  if (t.length <= maxLen) return t;
  return t.slice(0, maxLen - 1) + "…";
}

function createEmptyChat() {
  const id = uid();
  return {
    id,
    title: "New chat",
    createdAt: nowIso(),
    updatedAt: nowIso(),
    messages: [],
  };
}

function defaultState() {
  const first = createEmptyChat();
  return {
    activeChatId: first.id,
    chats: [first],
  };
}

function sortChatsByUpdatedDesc(chats) {
  return [...chats].sort((a, b) => String(b.updatedAt).localeCompare(a.updatedAt));
}

function getActiveChat(state) {
  return state.chats.find((c) => c.id === state.activeChatId) ?? state.chats[0];
}

function setActiveChat(state, chatId) {
  state.activeChatId = chatId;
  const chat = getActiveChat(state);
  if (!chat) return;
}

function upsertChat(state, chat) {
  const idx = state.chats.findIndex((c) => c.id === chat.id);
  if (idx === -1) state.chats.push(chat);
  else state.chats[idx] = chat;
}

function addMessage(state, { role, content }) {
  const chat = getActiveChat(state);
  if (!chat) return;
  chat.messages.push({
    id: uid(),
    role,
    content,
    createdAt: nowIso(),
  });
  chat.updatedAt = nowIso();

  if (role === "user" && chat.messages.length === 1) {
    chat.title = clampText(content, 44);
  }
  upsertChat(state, chat);
}

function clearMessages(state) {
  const chat = getActiveChat(state);
  if (!chat) return;
  chat.messages = [];
  chat.title = "New chat";
  chat.updatedAt = nowIso();
  upsertChat(state, chat);
}

function renderChatList(state, elements) {
  const { chatListEl } = elements;
  chatListEl.innerHTML = "";

  const chats = sortChatsByUpdatedDesc(state.chats);
  for (const chat of chats) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chatItem";
    btn.setAttribute("role", "listitem");
    btn.setAttribute("aria-current", chat.id === state.activeChatId ? "true" : "false");

    const title = document.createElement("div");
    title.className = "chatItem__title";
    title.textContent = chat.title || "New chat";

    const meta = document.createElement("div");
    meta.className = "chatItem__meta";
    const msgCount = document.createElement("span");
    msgCount.textContent = `${chat.messages.length} msg`;
    const updated = document.createElement("span");
    updated.textContent = new Date(chat.updatedAt).toLocaleDateString(undefined, {
      month: "short",
      day: "2-digit",
    });
    meta.append(msgCount, updated);

    btn.append(title, meta);
    btn.addEventListener("click", () => {
      state.activeChatId = chat.id;
      saveState(state);
      render(state, elements);
    });

    chatListEl.appendChild(btn);
  }
}

function messageAvatar(role) {
  return role === "user" ? "You" : "GPT";
}

function messageRoleLabel(role) {
  return role === "user" ? "You" : "Assistant";
}

function renderThread(state, elements) {
  const { threadEl, activeChatTitleEl } = elements;
  const chat = getActiveChat(state);

  activeChatTitleEl.textContent = chat?.title || "New chat";
  threadEl.innerHTML = "";

  if (!chat || chat.messages.length === 0) {
    const empty = document.createElement("div");
    empty.className = "message message--assistant";

    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.textContent = "GPT";

    const bubble = document.createElement("div");
    bubble.className = "bubble";

    const role = document.createElement("div");
    role.className = "bubble__role";
    role.textContent = "Assistant";

    const text = document.createElement("div");
    text.className = "bubble__text";
    text.textContent =
      "Start a conversation. This is a UI-only demo (no real model calls).";

    bubble.append(role, text);
    empty.append(avatar, bubble);
    threadEl.appendChild(empty);
    return;
  }

  for (const msg of chat.messages) {
    const msgEl = document.createElement("div");
    msgEl.className = `message message--${msg.role}`;

    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.textContent = messageAvatar(msg.role);

    const bubble = document.createElement("div");
    bubble.className = "bubble";

    const role = document.createElement("div");
    role.className = "bubble__role";
    role.textContent = messageRoleLabel(msg.role);

    const text = document.createElement("div");
    text.className = "bubble__text";
    text.textContent = msg.content;

    bubble.append(role, text);
    msgEl.append(avatar, bubble);
    threadEl.appendChild(msgEl);
  }

  threadEl.scrollTop = threadEl.scrollHeight;
}

function autoGrowTextarea(textarea) {
  textarea.style.height = "auto";
  const next = Math.min(textarea.scrollHeight, 220);
  textarea.style.height = `${next}px`;
}

function ensureActiveChatExists(state) {
  if (state.chats.length === 0) {
    const c = createEmptyChat();
    state.chats.push(c);
    state.activeChatId = c.id;
    return;
  }
  const active = getActiveChat(state);
  if (!active) state.activeChatId = state.chats[0].id;
}

function render(state, elements) {
  ensureActiveChatExists(state);
  renderChatList(state, elements);
  renderThread(state, elements);
}

function simulateAssistantReply(state, elements, userText) {
  const reply =
    "Got it. (UI-only demo)\n\nYou said:\n" + userText.trim();
  addMessage(state, { role: "assistant", content: reply });
  saveState(state);
  render(state, elements);
}

function main() {
  const elements = {
    newChatBtn: document.getElementById("newChatBtn"),
    chatListEl: document.getElementById("chatList"),
    threadEl: document.getElementById("thread"),
    activeChatTitleEl: document.getElementById("activeChatTitle"),
    composerForm: document.getElementById("composerForm"),
    composerInput: document.getElementById("composerInput"),
    clearCurrentBtn: document.getElementById("clearCurrentBtn"),
  };

  const state = loadState() ?? defaultState();
  ensureActiveChatExists(state);
  saveState(state);

  render(state, elements);

  elements.newChatBtn.addEventListener("click", () => {
    const chat = createEmptyChat();
    state.chats.push(chat);
    setActiveChat(state, chat.id);
    saveState(state);
    render(state, elements);
    elements.composerInput.focus();
  });

  elements.clearCurrentBtn.addEventListener("click", () => {
    clearMessages(state);
    saveState(state);
    render(state, elements);
    elements.composerInput.focus();
  });

  elements.composerInput.addEventListener("input", () => {
    autoGrowTextarea(elements.composerInput);
  });

  elements.composerInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      elements.composerForm.requestSubmit();
    }
  });

  elements.composerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = elements.composerInput.value;
    if (!text.trim()) return;

    addMessage(state, { role: "user", content: text });
    elements.composerInput.value = "";
    autoGrowTextarea(elements.composerInput);
    saveState(state);
    render(state, elements);

    window.setTimeout(() => simulateAssistantReply(state, elements, text), 220);
  });

  autoGrowTextarea(elements.composerInput);
}

main();

